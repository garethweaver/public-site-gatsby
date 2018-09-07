import {createStore} from 'redux'

const state = {
  modal: false,
  mobileMenu: false
}

function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'SHOW_MODAL_HIDE_MOB_MENU':
      return Object.assign({}, state, {
        modal: action.data.modal,
        mobileMenu: action.data.mobileMenu
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        modal: action.data
      })
    case 'SHOW_MOB_MENU':
      return Object.assign({}, state, {
        mobileMenu: action.data
      })
    case 'HIDE_MOB_MENU':
      return Object.assign({}, state, {
        mobileMenu: action.data
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
