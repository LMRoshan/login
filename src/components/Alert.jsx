/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Alert = (props) => {
    // console.log(props.alert);
    
  return (
    <div>
      { props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{`${props.alert.type}`}</strong> {`${props.alert.message}`}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
    </div>
  )
}

export default Alert
