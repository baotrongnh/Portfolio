import { ToggleTheme } from '..';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
     // const [header, setHeader] = useState(false);

     // useEffect(() => {
     //      const changeHeader = () => {
     //           if (window.scrollY > 703) {
     //                console.log(window.scrollY)
     //                setHeader(true);
     //           } else {
     //                setHeader(false);
     //           }
     //      }

     //      window.addEventListener('scroll', changeHeader);
     // }, []);


     return (
          <header className="header">
               <div className='logo-block'>
                    <Link to='/' className='logo-name'>&lt;Nhbt/&gt;</Link>
               </div>

               <ul className="navbar-block">
                    <Link className='navbar-item-link'>
                         <li className='navbar-item'>Home</li>
                    </Link>

                    <Link className='navbar-item-link'>
                         <li className='navbar-item'>About me</li>
                    </Link>

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
          </header>
     );
}

export default Header;