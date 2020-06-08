import React  from 'react';
import {Link} from 'react-router-dom';
import '../css/ingredients-checker.css';

export default props => (
  <div className='checker-input-form-container'>
  <form className='checker-input-form' onSubmit={props.onSubmit}>

    <label className='checker-input-label'>INGREDIENTS TO CHECK</label>

      <button type="submit" id="hidden-results-button">
      </button>

    <input className='checker-input-field' placeholder="paste here" onChange={props.handleChange} />
  </form>
</div>
 )

