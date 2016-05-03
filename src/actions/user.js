export const LOGGED_IN = '@@user/LOGGED_IN'
export const LOGGED_OUT = '@@user/LOGGED_OUT'

export function logIn(method) {

  console.log('logIn', LOGGED_IN)

  return (...args) => ({
    type: LOGGED_IN,
    payload: { method, args },
  })
}

export function logOut(method) {
  return (...args) => ({
    type: LOGGED_OUT,
    payload: { method, args },
  })
}
