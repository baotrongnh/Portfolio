import './Header.scss'
import {Button} from "@mantine/core";

function Header() {
    return (
        <header className='header'>
            <div className="header-block">
                <div className="logo-block">
                    <h1 className='logo-text'>{'<nhbt/>'}</h1>
                </div>

                <div className='navbar-list'>
                    <a href="" className='navbar-item active'>Home</a>
                    <a href="" className='navbar-item'>About</a>
                    <a href="" className='navbar-item'>Project</a>
                    <a href="" className='navbar-item'>Skill</a>
                </div>

                <div className="button-block">
                    <Button radius="md">Login</Button>
                </div>
            </div>
        </header>
    )
}

export default Header