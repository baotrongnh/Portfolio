import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"
import { Icon } from '@iconify-icon/react'

export default function Header() {

     return (
          <header className="h-16 w-full sticky top-0">
               <div className="container h-full mx-auto flex justify-between items-center px-5">
                    <div className="cursor-pointer">
                         <h1 className="text-2xl w-36 font-bold">{'<nhbt/>'}</h1>
                    </div>
                    <div className="hidden md:flex gap-11 text-xl">
                         <a className="cursor-pointer hover:text-violet-600 hover:opacity-80 duration-200">
                              Home
                         </a>
                         <a className="cursor-pointer hover:text-violet-600 hover:opacity-80 duration-200">
                              About me
                         </a>
                         <a className="cursor-pointer hover:text-violet-600 hover:opacity-80 duration-200">
                              Skills
                         </a>
                         <a className="cursor-pointer hover:text-violet-600 hover:opacity-80 duration-200">
                              Project
                         </a>
                    </div>
                    <div className="hidden md:flex w-36 justify-end">
                         <ModeToggle />
                    </div>

                    <div className="md:hidden">
                         <Button>
                              <Icon icon="ic:round-menu" />
                         </Button>
                    </div>
               </div>
          </header>
     )
}