from django_password_eye.fields import PasswordEye


def test_initialization_with_independent_false():
    field = PasswordEye(independent=False)
    assert field.widget.independent is False


def test_initialization_with_independent_true():
    field = PasswordEye(independent=True)
    assert field.widget.independent is True
