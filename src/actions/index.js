function logIn(method) {
  return (...args) => ({
    type: LOGGED_IN,
    payload: { method, args },
  })
}

function logOut(method) {
  return (...args) => ({
    type: LOGGED_OUT,
    payload: { method, args },
  })
}

module.exports = {logIn, logOut};
