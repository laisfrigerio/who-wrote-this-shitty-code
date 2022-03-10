function isLoginPage () {
  return window.location.pathname === '/login'
}

function hasQueryString() {
  return window.location.search !== ""
}

function hasLoggedOut (queryString) {
  return queryString.includes('?user=logout')
}

function hasExpires (queryString) {
  return queryString.includes('?user=expires')
}

function isForbiddenAccess (queryString) {
  return queryString.includes('?user=forbidden')
}

function messageHTML (message, type) {
  return `<span class='ui ${type} message'>${message}</span>`
}

function showAlert (message, type) {
  const ref = $('.c-login').find('.message')
  const content = messageHTML(message, type)
  $(ref).html(content)
}

function renderAlert () {
  const queryString = window.location.search

  if (hasLoggedOut(queryString)) {
    const message = 'Logout realizado com sucesso!'
    return showAlert(message, 'success')
  }

  if (hasExpires(queryString)) {
    const message = 'Login expirado!'
    return showAlert(message, 'warning')
  }

  if (isForbiddenAccess(queryString)) {
    const message = 'Usuário não tem permissão para acessar esta página!'
    return showAlert(message, 'negative')
  }
}

function renderAlertOnLoginPage () {
  if (isLoginPage() && hasQueryString()) {
    renderAlert()
  }
}
