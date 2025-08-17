from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TaskBase(BaseModel):
    name: str
    description: str
    expires_at: Optional[datetime] = None
    value: float = 0.0

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    is_completed: Optional[bool] = None
    completed_at: Optional[datetime] = None

class Task(TaskBase):
    id: int
    created_at: datetime
    completed_at: Optional[datetime]
    is_completed: bool

    class Config:
        orm_mode = True
