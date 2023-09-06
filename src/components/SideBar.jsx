import React from "react";
import {Items} from './constants'

function SideBar() {
 
  return (
    <div className="side-bar">
      {Items.map((item) => (
        <div key={item.id} className="item">
          <div className="item-number">{item.number}</div>
          <div className="item-body">
            <div className="subtitle">{item.subtitle}</div>
            <div className="title">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
