from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
    TokenBlacklistView,
)
from django.contrib import admin


urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'login', TokenObtainPairView.as_view(), name='login'),
    path(r'logout', TokenBlacklistView.as_view(), name='logout'),
]
