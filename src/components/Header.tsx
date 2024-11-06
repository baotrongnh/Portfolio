import { Button, useMantineTheme } from "@mantine/core"
import { NavLink } from 'react-router-dom'

function Header() {
    const theme = useMantineTheme()

    return (
        <header className="w-full h-20 px-8 py-3 fixed top-0">
            <div className='container h-full px-3 flex justify-between items-center border border-gray-600 rounded-lg transition duration-200 backdrop-blur-[7px] shadow-sm hover:backdrop-blur-lg'>
                <div className="">
                    <h2 className=''>{'<nhbt/>'}</h2>
                </div>

                <div className='hidden md:flex gap-5'>
                    <NavLink to='/' className={({ isActive }) => isActive ? `text-[${theme.colors.purpleTheme[5]}]` : ''}>About me</NavLink>
                    <NavLink to='/all-projects' className={({ isActive }) => isActive ? `text-[${theme.colors.purpleTheme[5]}]` : ''}>Project</NavLink>
                </div>

                <div className="button-block">
                    <Button>Login</Button>
                </div>
            </div>
        </header>
    )
}

export default Header