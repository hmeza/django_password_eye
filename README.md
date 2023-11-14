# Django Password Eye

A Django field and widget to show the 'eye' icon that shows and hides password.

## Install
`
pip install django-password-eye
`

In settings, add `django_password_eye` to INSTALLED_APPS:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    ...
    'django_password_eye',
]
```

By default, it includes the Font Awesome css library

If you do not want to include it because you already include it from another template, just
set this in your settings f``ile:

```
DJANGO_PASSWORD_EYE_INCLUDE_FONT_AWESOME = False
```

## Requires

JQuery, Bootstrap and Font Awesome. They are included in the widget.

## Usage

```
Import PasswordEye and use it instead of the traditional Password field.

from django_password_eye.fields import PasswordEye
 
class LoginForm(forms.Form):
    username = forms.CharField(max_length=150,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': _('Login')}),
               ``                label='')
    password = PasswordEye(label='')
```

## CSS classes

Check template input.html.
I suggest to modify `link` class to add cursor: hand/pointer, but it is up to you.

## Source code

The code was taken from this link

https://codepen.io/Qanser/pen/dVRGJv
