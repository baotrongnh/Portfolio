import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DrawerMobile, ToggleTheme } from '..';
import { AppContext } from '../../contexts/AppContext';
import './Header.scss';
import { Icon } from '@iconify/react';

function Header() {
     const [headerScroll, setHeaderScroll] = useState(false);
     const { setIsDrawer } = useContext(AppContext);
     const [activeSection, setActiveSection] = useState('');

     useEffect(() => {
          const changeHeader = () => {
               if (window.scrollY > 60) {
                    setHeaderScroll(true);
               } else {
                    setHeaderScroll(false);
               }
          }

          window.addEventListener('scroll', changeHeader);
     }, []);

     useEffect(() => {
          const sections = document.querySelectorAll('section');
          const handleScroll = () => {
               let current = '';
               sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (window.scrollY >= sectionTop - sectionHeight / 3) {
                         current = section.getAttribute('id');
                    }
               })
               setActiveSection(current);
          }

          window.addEventListener('scroll', handleScroll);

          return () => window.addEventListener('scroll', handleScroll);

     }, []);

     return (
          <header className={`header ${headerScroll ? 'scroll-change' : ''}`}>
               <div className='logo-block'>
                    <Link to='/' className='logo-name'>&lt;<span>nhbt</span> /&gt;</Link>
               </div>

               <ul className="navbar-block">
                    <a href='/#home' className={`navbar-item-link ${activeSection === 'home' ? 'active' : ''}`}>
                         <li className='navbar-item'>Home</li>
                    </a>

                    <a href='/#about' className={`navbar-item-link ${activeSection === 'about' ? 'active' : ''}`}>
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