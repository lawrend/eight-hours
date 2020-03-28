import React from 'react';
import moment from 'moment';

export default props => (
  <div className='today-date'>Today: {moment().format("MM/DD/YYYY")}</div>
)

