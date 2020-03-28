import React from 'react';

export default props => (
  <form className='bday-input-form' onSubmit={props.onSubmit}>
    <label className='bday-input-label'>BIRTHDAY:
    <input className='bday-input' placeholder={props.bday} onChange={props.handleChange} value={props.bday}/>
  </label>
  </form>
  )

