import { Drawer } from "antd";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ToggleTheme } from '../index';
import './DrawerMobile.scss';

function DrawerMobile() {
     const { isDrawer, setIsDrawer } = useContext(AppContext);

     return (
          <Drawer
               placement='right'
               closable={false}
               onClose={() => setIsDrawer(false)}
               open={isDrawer}
               key='right'
               width={300}
               
          >
               <div className="navbar-mobile">
                    <div className="btn-block">
                         <ToggleTheme />
                    </div>

                    <ul className="navbar-block">
                         <a href='/#home' className='navbar-item-link'>
                              <li className='navbar-item'>Home</li>
                         </a>
     
                         <a href='/#about' className='navbar-item-link'>
                              <li className='navbar-item'>About me</li>
                         </a>
     
                         <a className='navbar-item-link'>
                              <li className='navbar-item'>My project</li>
                         </a>
     
                         <a className='navbar-item-link'>
                              <li className='navbar-item'>Contact</li>
                         </a>
                    </ul>
     
               </div>

          </Drawer>
     );
}

export default DrawerMobile;