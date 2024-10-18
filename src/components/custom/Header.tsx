import { ModeToggle } from "../mode-toggle"

export default function Header() {

     return (
          <header className="h-20 w-full flex justify-between items-center ali px-5">
               <h1 className="text-3xl w-36 font-bold">{'<nhbt/>'}</h1>
               <div className="flex gap-7 text-xl">
                    <a className="cursor-pointer hover:text-violet-600 hover:opacity-80 duration-200">Home</a>
                    <a>About me</a>
                    <a>Project</a>
               </div>
               <div className="w-36 flex justify-end">
                    <ModeToggle />
               </div>
          </header>
     )
}
