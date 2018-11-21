import {createStore} from 'redux'

let canWebP = () => {
  return typeof document !== 'undefined' &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0
}

let handleResize = (e) => {
  let isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  if (store.getState().isMobile !== isMobile) {
    store.dispatch({type: 'SET_IS_MOBILE', data: isMobile});
  }
}

const defaultState = {
  modal: false,
  mobileMenu: false,
  webp: false,
  isMobile: true
}

defaultState.webp = canWebP()

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

const store = createStore(rootReducer, defaultState)

if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
  handleResize()
}

// store.subscribe(() => {
//   console.log(store.getState())
// })

export default store
