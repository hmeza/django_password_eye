from django.forms.fields import Field
from django_password_eye.widgets import PasswordEyeWidget


class PasswordEye(Field):
    widget = PasswordEyeWidget

    def __init__(self, independent=False, *args, **kwargs):
        super().__init__(widget=self.widget(independent=independent), *args, **kwargs)
