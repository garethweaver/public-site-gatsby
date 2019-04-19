import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
