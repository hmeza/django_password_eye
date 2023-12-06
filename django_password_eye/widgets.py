from django.forms.widgets import PasswordInput


class PasswordEyeWidget(PasswordInput):
    template_name = 'django_password_eye/input.html'

    class Media:
        css = {
            "all": ("django_password_eye/css/django_password_eye.css",)
        }
        js = ("django_password_eye/js/django_password_eye.js",)

        def __init__(self, media=None, css=None, js=None):
            if media is not None:
                css = getattr(media, "css", {})
                js = getattr(media, "js", [])
            else:
                if css is None:
                    css = {}
                if js is None:
                    js = []
            self._css_lists = [css]
            self._js_lists = [js]

        def __repr__(self):
            return "Media(css=%r, js=%r)" % (self._css, self._js)

        def __str__(self):
            return self.render()
