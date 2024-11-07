import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "@mantine/core"

export default function Hero() {

     return (
          <div className='h-screen'>
               <div className='container h-full flex flex-col justify-center text-center' >
                    <p className='text-4xl font-semibold'>Hi, I'm Bao Trong</p>
                    <h1 className="">Front-end developer</h1>
                    <div className="flex justify-center gap-5 mt-7">
                         <Button size="md" rightSection={<Icon icon="fa:send-o" />}>Hire me</Button>
                         <Button variant="outline" size="md" rightSection={<Icon icon="bi:github" />}>Github</Button>
                    </div>
               </div>
          </div>
     )
}
