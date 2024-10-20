from django.forms.fields import Field
from django_password_eye.widgets import PasswordEyeWidget


class PasswordEye(Field):
    widget = PasswordEyeWidget
