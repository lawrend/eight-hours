import React from 'react';
import moment from 'moment';

export default props => (
  <div className='today-time'>Now<hr /><span className="time-readout"> {moment().format("hh:mm:ss a")}</span></div>
)

