import { createStore } from 'redux'

const testWebp = () => {
  return (
    typeof document !== 'undefined' &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0
  )
}

const handleResize = e => {
  let isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  if (store.getState().isMobile !== isMobile) {
    store.dispatch({ type: 'SET_IS_MOBILE', data: isMobile })
  }
}

const isWebp = testWebp()

const defaultState = {
  modal: false,
  mobileMenu: false,
  isWebp: isWebp,
  isMobile: true,
}

let rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_HIDE_MOB_MENU':
      return {
        ...state,
        modal: true,
        mobileMenu: false,
      }
    case 'HIDE_MODAL':
      return {
        ...state,
        modal: false,
      }
    case 'SHOW_MOB_MENU':
      return {
        ...state,
        mobileMenu: true,
      }
    case 'HIDE_MOB_MENU':
      return {
        ...state,
        mobileMenu: false,
      }
    case 'SET_IS_MOBILE':
      return {
        ...state,
        isMobile: action.data,
      }
    default:
      return state
  }
}

const store = createStore(rootReducer, defaultState)

if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
  handleResize()
}

export default store
