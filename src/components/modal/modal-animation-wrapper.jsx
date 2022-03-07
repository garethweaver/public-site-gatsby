import React from 'react'
import { connect } from 'react-redux'
import { useTransition, animated } from 'react-spring'

const ModalAnimationWrapper = ({ modal, children }) => {
  const transitions = useTransition(modal, {
    from: { transform: 'translateY(-100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(-100%)' },
  })

  return transitions((styles, item) => (
    item && (
      <animated.div
        className="ModalAnimationWrapper"
        style={styles}>
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
