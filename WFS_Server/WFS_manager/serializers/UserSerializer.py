from rest_framework import serializers
from ..models import *


class UserSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField(allow_null=True)
    location = serializers.CharField(allow_null=True)
    usr_id = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['username', 'password', 'age', 'location', 'usr_id']
        extra_kwargs = {
            'password': {'write_only': True},
            'usr_id': {'required': False},
        }
        
    def get_usr_id(self, obj):
        return obj.id

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        
        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        
        instance.is_active = True
        instance.save()
        return instance