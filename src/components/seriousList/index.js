import React from 'react';
import { Link } from "react-router-dom";

const SeriousList = props => {
  console.log(props);
  return (
    <div>
      <ul className="serious-list">
        {props.list.map(item => { return (
          <li key={item.show.id}>
            <Link to={`/serious/${item.show.id}`}>{item.show.name}</Link>
          </li>
        )})}
      </ul>
    </div>
  )
};

export default SeriousList;