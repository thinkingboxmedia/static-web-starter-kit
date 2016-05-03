export const LOGGED_IN = '@@user/LOGGED_IN'
export const LOGGED_OUT = '@@user/LOGGED_OUT'

export function logIn(method) {

  return { type: LOGGED_IN }
}

export function logOut(method) {
  
  return { type: LOGGED_OUT }
}
