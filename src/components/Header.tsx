import {Burger, Button, Drawer} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks"
import {NavLink} from 'react-router-dom'
import {Icon} from "@iconify/react/dist/iconify.js"

function Header() {
    const [opened, {close, toggle}] = useDisclosure(false)

    return (
        <header className="w-full h-20 py-3 px-4 fixed top-0 z-30">
            <div
                className='container motion-preset-focus h-full px-3 flex justify-between items-center border border-gray-600 rounded-lg transition duration-200 backdrop-blur-xl shadow-sm'>
                <div className="">
                    <Icon fontSize={34} className='text-purple-500' icon="material-symbols:code-blocks" />
                </div>

                <div className='hidden sm:flex gap-5'>
                    <NavLink
                        to='/'
                        className={({isActive}) => `${isActive ? `text-purple-500` : ''} font-semibold`}
                    >
                        About me
                    </NavLink>

                    <NavLink
                        to='/all-projects'
                        className={({ isActive }) => `${isActive ? `text-purple-500` : ''} font-semibold`}
                    >
                        Project
                    </NavLink>
                </div>

                <div className="hidden sm:flex gap-5">
                    <Button>Login</Button>
                </div>

                <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" className='sm:hidden'/>

                <Drawer
                    opened={opened}
                    onClose={close}
                    position='bottom'
                    overlayProps={{backgroundOpacity: 0.5, blur: 4}}
                    zIndex={20}
                    withCloseButton={false}
                    size='70%'
                    radius='lg'
                >
                    <div className='flex flex-col items-center gap-2'>
                        <NavLink onClick={toggle} to='/' className={'w-full p-1 rounded-lg text-2xl font-semibold text-center'}>Portfolio</NavLink>
                        <NavLink onClick={toggle} to='/' className='text-2xl font-semibold'>Resource repository</NavLink>
                    </div>
                </Drawer>
            </div>
        </header>
    )
}

export default Header