if (isValid()) {
  if (isValidEmail(email)) {
    if (isValidPassword(password)) {
      register(payload, headers);
    } else {
      $(".swl-alert-error").text('Senha deve possui no mínimo 8 caracteres')
        .show();
      $(this).prop("disabled", false);
    }
  } else {
    $(".swl-alert-error").text('E-mail inválido').show();
    $(this).prop("disabled", false);
  }
} else {
  $(this).prop("disabled", false);
}
