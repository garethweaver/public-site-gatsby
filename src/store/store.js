import {createStore} from 'redux'

const state = {
  modal: false,
  mobileMenu: false
}

let rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_HIDE_MOB_MENU':
      return Object.assign({}, state, {
        modal: true,
        mobileMenu: false
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        modal: false
      })
    case 'SHOW_MOB_MENU':
      return Object.assign({}, state, {
        mobileMenu: true
      })
    case 'HIDE_MOB_MENU':
      return Object.assign({}, state, {
        mobileMenu: false
      })
    case 'SET_IS_MOBILE':
      return Object.assign({}, state, {
        isMobile: action.data
      })
    default:
      return state
  }
}

const store = createStore(rootReducer, state)

// store.subscribe(() => {
//   console.log(store.getState())
// })

export default store
