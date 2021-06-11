import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css'


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <Link className="SidebarLink" to={item.path} onClick={item.subNav && showSubnav}>
          <div className="menu-item">
            {item.icon}
            <li className="SidebarLabel">{item.title}</li>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Link>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link class="DropdownLink" to={item.path} key={index}>
                {item.icon}
                <li class="SidebarLabel">{item.title}</li>
              </Link>
            );
          })}
      </>
    );
  };
  
  export default SubMenu;