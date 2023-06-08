from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import datetime


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(null=False, default="", max_length=128, unique=True)
    age = models.IntegerField(null=True)
    location = models.CharField(null=True, max_length=256)
    career = models.CharField(null=True, max_length=128)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'id: {self.id} - username: {self.username}'