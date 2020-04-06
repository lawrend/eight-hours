import React from 'react';


export default props => (
  <div className="flex-container-name-status">
  <div className="ingredients-name">{props.name}
  </div>
  <div className={props.name ? props.status : ""}>{props.name ?props.statusText : ""}
</div>
  </div>
)
