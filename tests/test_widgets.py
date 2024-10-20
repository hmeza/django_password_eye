from django_password_eye.widgets import PasswordEyeWidget


def test_initialization():
    widget = PasswordEyeWidget(independent=True)
    assert widget.independent is True


def test_get_context():
    widget = PasswordEyeWidget(independent=False)
    context = widget.get_context('password', 'test123', {})
    assert context['widget']['independent'] is False


def test_media():
    widget = PasswordEyeWidget(independent=True)
    media = widget.media
    assert 'django_password_eye/css/django_password_eye.css' in media._css['all'][0]
    assert 'django_password_eye/js/django_password_eye.js' in media._js[0]
