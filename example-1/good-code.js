if (mandatoryFieldsAreNotFilled(payload)) {
  enableButton();
  return;
}

if (isInvalidEmail(email)) {
  showErrorMessage('E-mail inválido');
  enableButton();
  return;
}

if (isInvalidPassword(password)) {
  showErrorMessage('Senha deve possui no mínimo 8 caracteres');
  enableButton();
  return;
}

register(payload, headers);
