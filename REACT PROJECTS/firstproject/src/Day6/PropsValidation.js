import React from 'react'
import PropTypes from 'prop-types';

export default function PropsValidation(props) {
  return (
    <div>
      <p>my name is {props.name}</p>
    </div>
  )
}
PropsValidation.propTypes={name:PropTypes.string}
