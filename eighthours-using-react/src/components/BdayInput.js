import React  from 'react';
import { Link } from 'react-router-dom';

export default props => (

  <form className='bday-input-form' onSubmit={props.onSubmit}>

    <label className='bday-input-label'>BIRTHDAY:</label>

    <Link to={`results/${props.bday}` }>
      <button type="submit" id="results-button">
      </button>
    </Link>

    <input className='bday-input' placeholder="mm/dd/yyyy" onChange={props.handleChange} value={props.bday}/>

  </form>
)



