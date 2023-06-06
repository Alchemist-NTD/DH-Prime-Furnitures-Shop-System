from django.contrib import admin
from .models import *
from django.db.models import Q
from django_admin_search.admin import AdvancedSearchAdmin
from .forms import UserFormSearch, UserForm



class UserAdmin(AdvancedSearchAdmin):
    form = UserForm
    search_form = UserFormSearch
    
    def search_description(self, field, field_value, form_field, request, param_values):
        """
            intercept query filter for description field
        """
        query = Q()
        # your Q logic here
        return query
    
admin.site.register(User, UserAdmin)