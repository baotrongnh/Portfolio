import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DrawerMobile, ToggleTheme } from '..';
import { AppContext } from '../../contexts/AppContext';
import './Header.scss';
import { Icon } from '@iconify/react';

function Header() {
     const [headerColor, setHeaderColor] = useState(false);
     const { setIsDrawer } = useContext(AppContext);

     useEffect(() => {
          const changeHeader = () => {
               if (window.scrollY > 703) {
                    // console.log(window.scrollY)
                    setHeaderColor(true);
               } else {
                    setHeaderColor(false);
               }
          }

          window.addEventListener('scroll', changeHeader);
     }, []);


     return (
          <header className="header">
               <div className='logo-block'>
                    <Link to='/' className='logo-name'>&lt;<span>nhbt</span> /&gt;</Link>
               </div>

               <ul className="navbar-block">
                    <a href='/#home' className='navbar-item-link'>
                         <li className='navbar-item'>Home</li>
                    </a>

                    <a href='/#about' className='navbar-item-link'>
                         <li className='navbar-item'>About me</li>
                    </a>

                    <Link className='navbar-item-link'>
                         <li className='navbar-item'>My project</li>
                    </Link>

                    <Link className='navbar-item-link'>
                         <li className='navbar-item'>Contact</li>
                    </Link>
               </ul>

               <div className="btn-block">
                    <ToggleTheme />
               </div>

               <div className="navbar-mobile">
                    <Button className='btn-menu' onClick={() => setIsDrawer(true)}>
                         <Icon className='icon' icon="mingcute:menu-fill" />
                    </Button>

               </div>

               <DrawerMobile />
          </header>


     );
}

export default Header;