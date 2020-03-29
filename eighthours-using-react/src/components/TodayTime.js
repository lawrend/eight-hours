import React from 'react';
import moment from 'moment';

export default props => (
  <div className='today-time'>Now <hr /> {moment().format("hh:mm:ss a")}</div>
)

