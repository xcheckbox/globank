
export const types = {
  login: 'login',
  logout: 'logout'
}

export const authReducer = (state = {}, { type, payload }) => {

  console.log(type, payload)

  switch (type) {
    case types.login:
      return {
        ...payload,
        isAuthenticated: true
      }

    case types.logout:
      return {
        isAuthenticated: false
      }

    default:
      return state;
  }
}