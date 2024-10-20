from django_password_eye.fields import PasswordEye


def test_initialization():
    field = PasswordEye()
    assert field.widget.independent is False
