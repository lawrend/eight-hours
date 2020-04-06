import React  from 'react';
import { Link } from 'react-router-dom';
import '../css/eight-hours.css';

export default props => (

  <div className="bday-input-form-container">
  <form className='bday-input-form' onSubmit={props.onSubmit}>

    <label className='bday-input-label'>BIRTHDAY</label>

    <Link to={`results/${props.bday}` }>
      <button type="submit" id="results-button">
      </button>
    </Link>

    <input className='bday-input-field' placeholder="mm/dd/yyyy" onChange={props.handleChange} value={props.bday}/>

  </form>
</div>
)

// button above is hidden using the css


