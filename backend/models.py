from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float
from database import Base
from datetime import datetime

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)
    is_completed = Column(Boolean, default=False)
    value = Column(Float, default=0.0)
