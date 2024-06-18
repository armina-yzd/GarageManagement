from database import Base
from sqlalchemy import Column, Integer, String, Boolean, DateTime

class Member(Base):
    __tablename__ = 'member'

    nationalId = Column(String, primary_key=True)
    firstName = Column(String, nullable=False)
    lastName = Column(String, nullable=False)
    password = Column(String(300), nullable=False)
    email = Column(String, nullable=False, unique=True)
    admin = Column(Boolean, nullable=False)
    ban = Column(Boolean, nullable=False)


class Car(Base):
    __tablename__ = 'car'

    carTag = Column(String, primary_key=True)
    carModel = Column(String, nullable=False)
    nationalId = Column(String, nullable=False)
    

class Service(Base):
    __tablename__ = 'service'

    serviceId = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(DateTime, nullable=False)
    carTag = Column(String, nullable=False)
    state = Column(Boolean, nullable=False)
    services = Column(String, nullable=False)


class Feedback(Base):
    __tablename__ = 'feedback'

    feedbackId = Column(Integer, primary_key=True, autoincrement=True)
    serviceId = Column(Integer, nullable=False)
    feedback = Column(String, nullable=False)
    star = Column(Integer, nullable=False)
    
