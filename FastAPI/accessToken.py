from fastapi import  Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Annotated
from sqlalchemy.orm import Session
from database import SessionLocal
import tables
import hashlib
from datetime import datetime, timedelta, timezone
import jwt
from jwt.exceptions import InvalidTokenError
from fastapi import FastAPI

app = FastAPI()

SECRET_KEY = "82aae4058e06a6746ebdd345bb19340223780baa5eb704bcc8890983c20c4739"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def get_db():
    db = SessionLocal()
    try:
        yield db
    except :
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    nationalid: str | None = None

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def authenticate_member(nationalid:str, password:str, db):
    member = db.query(tables.Member).filter(tables.Member.nationalId == nationalid).first()
    
    if not member:
        return False
    
    if member.password != hashlib.sha256(password.encode('utf-8')).hexdigest():
        return False

    return member


def create_access_token(nationalid:str, expires_delta: timedelta):
    encode = {'sub': nationalid}
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({'exp': expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)
    

async def get_member(db:db_dependency, nationalid:str):
    return db.query(tables.Member).filter(tables.Member.nationalId == nationalid).first()

async def get_current_member(token: Annotated[str, Depends(oauth2_scheme)], db:db_dependency):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        nationalid: int = payload.get("sub")
        if nationalid is None:
            raise credentials_exception
        token_data = TokenData(nationalid=nationalid)
    except InvalidTokenError:
        raise credentials_exception
    
    member = await get_member(db, token_data.nationalid)
    if member is None:
        raise credentials_exception
    return member


member_dependency = Annotated[tables.Member, Depends(get_current_member)]


