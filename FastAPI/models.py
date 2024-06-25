from datetime import datetime
from pydantic import BaseModel


class Member(BaseModel):
    nationalId : str
    firstName : str
    lastName : str
    password : str
    email : str
    admin : bool
    ban : bool


class Car(BaseModel):
    carTag : str
    carModel : str
    nationalId : str

class Service(BaseModel):
    date : str
    carTag : str
    state : bool
    services : str


class ServiceRead(BaseModel):
    serviceId : int
    date : datetime
    carTag : str
    state : bool
    services : str


class Feedback(BaseModel):
    serviceId : int
    feedback : str
    star : int

class FeedbackRead(BaseModel):
    feedbackId : int
    serviceId : int
    feedback : str
    star : int


class FeedbackReadUser(BaseModel):
    feedbackId : int
    serviceId : int
    name : str
    feedback : str
    star : int
