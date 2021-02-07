import React from 'react'
import { connect } from 'react-redux'
import { useTransition, animated } from 'react-spring'

const ModalAnimationWrapper = ({ modal, children }) => {
  const transitions = useTransition(modal, null, {
    from: { transform: 'translateY(-100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(-100%)' },
  })

  return transitions.map(({ item, key, props }) => (
    item && (
      <animated.div
        className="ModalAnimationWrapper"
        key={key}
        style={props}>
        {children}
      </animated.div>
    )
  ))
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(ModalAnimationWrapper)
