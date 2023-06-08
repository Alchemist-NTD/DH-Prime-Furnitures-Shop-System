from ..models import User
from django.forms import ModelForm, Form
from django.forms import DateField, CharField, ChoiceField, TextInput


class UserFormSearch(Form):
    STATUS_CHOICES = [
        ('', 'All'),
        (True, 'Active'),
        (False, 'Inactive')
    ]
    active = ChoiceField(choices=STATUS_CHOICES, required=False)
    username = CharField(required=False)
    date = DateField(required=False, widget=TextInput(
        attrs={ 
            'filter_method': '__gte',
        }
    ))
    begin = DateField(required=False, widget=TextInput(
        attrs={
            'filter_field': 'date',
            'filter_method': '__gte',
            'data-mask': "00/00/0000",
            'placeholder': 'MM/DD/YYYY'
        }
    ))
    end = DateField(required=False, widget=TextInput(
        attrs={
            'filter_field': 'date',
            'filter_method': '__lte',
            'data-mask': "00/00/0000",
            'placeholder': 'MM/DD/YYYY'
        }
    ))
    
    def __init__(self, *args, **kwargs):
        super(UserFormSearch, self).__init__(*args, **kwargs)
        self.fields['begin'].label = "Date Start"
        self.fields['end'].label = "Date End"
        

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = '__all__'