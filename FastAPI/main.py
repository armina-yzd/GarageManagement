import hashlib
from datetime import datetime, timedelta, timezone
from typing import Annotated,List
import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from sqlalchemy import and_
from sqlalchemy.orm import Session
import tables
from accessToken import (ACCESS_TOKEN_EXPIRE_MINUTES, ALGORITHM, SECRET_KEY,
                         Token, TokenData, authenticate_member,
                         create_access_token, member_dependency)
from database import SessionLocal
from models import Member, Car, Service, Feedback, FeedbackRead, ServiceRead
import random
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()


origins = {
    'http://localhost:3000',
}

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=['*'],
    allow_headers=['*']
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    except :
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

tables.Base.metadata.create_all(bind=engine)

def hash(password: str) -> str:
    hasher = hashlib.sha256()
    hasher.update(password.encode())
    return hasher.hexdigest()


@app.post("/signUp/")
async def signUpMember(member : Member, db : db_dependency):
    try:
        member_test= db.query(tables.Member).filter(and_(tables.Member.nationalId==member.nationalId)).first()
        if member_test:
            return {"message" : "ID is already taken"}

        hashed_password = hash(member.password)
        member.password = hashed_password

        new_member=tables.Member(**member.model_dump())

        db.add(new_member)

        db.commit()
        db.refresh(new_member)

        return {"message" : "User registered"}
    
    except Exception as e:
        print(f"Error: {e}")
        return False


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
@app.post('/login/')
async def loginMember(form_data:Annotated[OAuth2PasswordRequestForm,Depends()], db: Session = Depends(get_db)):


    try:
        member = authenticate_member(form_data.username , form_data.password , db)
        if not member:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail='could not validate passenger')
        if member.ban:
            return {"message" : "member ban"}
        
        token = create_access_token(member.nationalId, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))

        return {'access_token': token, 'token_type': 'bearer'}
    
    except Exception as e:
        print(f"Error: {e}")
        return False
    
@app.post("/addCar/")
async def addCarMember(member:member_dependency, car:Car, db : db_dependency):
    try:
        car_test= db.query(tables.Car).filter(tables.Car.carTag==car.carTag).first()
        if car_test:
            return {"message" : "carTag is already taken"}
    
        car.nationalId=member.nationalId
        new_car=tables.Car(**car.model_dump())
        db.add(new_car)
        db.commit()
        return {"message": "Car Added"}
        
    except Exception as e:
        print(f"Error: {e}")
        return False


@app.post("/addFeedback/{serviceId}")
async def addFeedbackMember(serviceId:int, feedback:Feedback, db : db_dependency):
    try:
    
        feedback.serviceId=serviceId
        new_feedback=tables.Feedback(**feedback.model_dump())
        db.add(new_feedback)
        db.commit()
        return {"message": "Feedback Added"}
        
    except Exception as e:
        print(f"Error: {e}")
        return False

@app.post("/addService/{carTag}")
async def addServiceMember(member:member_dependency,carTag: str, service:Service, db : db_dependency):
    try:
    
        service.carTag=carTag
        new_service=tables.Service(**service.model_dump())
        db.add(new_service)
        db.commit()
        return {"message": "Service Added"}
        
    except Exception as e:
        print(f"Error: {e}")
        return False


@app.put("/changeInfo")
async def changeInfoMember(member:member_dependency,upMember:Member, db : db_dependency):
    try:
        db.query(tables.Member).filter(tables.Member.nationalId==member.nationalId).update({'firstName' : upMember.firstName,
                                                                                    'lastName' : upMember.lastName,
                                                                                    'email' : upMember.email,
                                                                                    'password' : hash(upMember.password)})
        db.commit()
        return {"message": "User updated"}
        
        
    except Exception as e:
        print(f"Error: {e}")
        return False
    

@app.get("/reserveMember/", response_model=list[Service])
async def readReserveMember(member:member_dependency,db: db_dependency):
    cars = db.query(tables.Car).filter(and_(tables.Car.nationalId==member.nationalId)).all()
    all_services = []
    for car in cars :
        services = db.query(tables.Service).filter(and_(tables.Service.carTag==car.carTag)).all()
        all_services.extend(services)


    return all_services
    
    
@app.get("/carMember/", response_model=list[Car])
async def readCarMember(member:member_dependency,db: db_dependency):

    cars = db.query(tables.Car).filter(and_(tables.Car.nationalId==member.nationalId)).all()
    return cars


@app.delete('/deleteReserve/{serviceId}')
async def deleteReserveUser(member: member_dependency, serviceId: int, db: db_dependency):
    try:
        cars = db.query(tables.Car).filter(and_(tables.Car.nationalId==member.nationalId)).all()

        for car in cars :
            services = db.query(tables.Service).filter(and_(tables.Service.carTag==car.carTag)).all()
        
        for service in services :
            service_delete = db.query(tables.Service).filter(and_(service.serviceId==serviceId)).first()

        if(service_delete):
            db.delete(service_delete)
            db.commit()
            return {"message": "reserve deleted"}
        else:
            return{"message": "no reserve"}

    except Exception as e:
        print(f"Error: {e}")
        return False
    

@app.put("/changeReserve/{serviceId}")
async def changeReserveUser(member:member_dependency,serviceId: int,upService:Service, db : db_dependency):
    try:
        cars = db.query(tables.Car).filter(and_(tables.Car.nationalId==member.nationalId)).all()

        for car in cars :
            services = db.query(tables.Service).filter(and_(tables.Service.carTag==car.carTag)).all()
        
        for service in services :
            service_update = db.query(tables.Service).filter(and_(service.serviceId==serviceId)).first()

        if(service_update):
    
            db.query(tables.Service).filter(tables.Service.serviceId==service_update.serviceId).update({'date' : upService.date,
                                                                                    'carTag' : upService.carTag})
            db.commit()
            return {"message": "resrve updated"}
        else:
            return{"message": "no reserve"}

    except Exception as e:
        print(f"Error: {e}")
        return False
    

@app.get("/car/", response_model=list[Car])
async def readCar(db: db_dependency):

    cars = db.query(tables.Car).all()
    return cars

@app.get("/member/", response_model=list[Member])
async def readMember(db: db_dependency):

    members = db.query(tables.Member).all()
    return members


@app.get("/service/", response_model=list[ServiceRead])
async def readService(db: db_dependency):

    services = db.query(tables.Service).all()
    return services

@app.get("/feedback/", response_model=list[FeedbackRead])
async def readFeedback(db: db_dependency):

    feedbacks = db.query(tables.Feedback).all()
    return feedbacks


@app.get("/banUser/{nationalId}")
async def banUser(nationalId:int, db : db_dependency):
    try:
        db.query(tables.Member).filter(tables.Member.nationalId==nationalId).update({'ban' : False})
        db.commit()
        return {"message": "User updated"}
        
    except Exception as e:
        print(f"Error: {e}")
        return False

@app.delete('/deleteReserveAdmin/{serviceId}')
async def deleteReserveAdmin( serviceId: int, db: db_dependency):
    try:
        service = db.query(tables.Service).filter(and_(tables.Service.serviceId==serviceId)).first()
        db.delete(service)
        db.commit()
        return {"message": "reserve deleted"}


    except Exception as e:
        print(f"Error: {e}")
        return False