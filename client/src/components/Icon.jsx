import React from 'react'
import PropTypes from 'prop-types'
import { cn, withNaming } from '@bem-react/classname'
// import './scss/Icon.scss'

const Icon = ({ children, className }) => {
  const classes = cn('icon')(className)

  return <span className={classes}>{children}</span>
}

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
Icon.defaultProps = {
  children: '',
  className: '',
}

export default Icon