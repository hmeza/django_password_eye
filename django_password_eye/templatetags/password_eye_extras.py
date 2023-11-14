from django import template
from django.conf import settings

register = template.Library()


@register.simple_tag
def include_font_awesome(value):
    return getattr(settings, 'DJANGO_PASSWORD_EYE_INCLUDE_FONT_AWESOME', True)
