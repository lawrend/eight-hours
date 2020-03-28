import React from 'react';
import moment from 'moment';

export default props => (
  <div className='today-time'>Now: {moment().format("hh:mm:ss a")}</div>
)

