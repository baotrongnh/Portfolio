import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "@mantine/core"

export default function Hero() {

     return (
          <div className='h-dvh bg-zinc-900'>
               <div className='container h-full flex flex-col justify-center text-center' data-aos="zoom-in-up" >
                    <p className='text-xl'>
                         Hi, I'm <b className='text-purple-500'>Bao Trong</b>
                    </p>
                    <h1 className="py-5 text-4xl font-semibold">Front-end developer</h1>
                    <p className='px-4 md:px-[20%] lg:px-[25%] antialiased opacity-85'>
                         Welcome to my portfolio page, where you'll find everything about me – from my hobbies, photography, personal life, to the resources I often use, and of course, code. :))
                    </p>
                    <div className="flex justify-center gap-5 mt-7">
                         <Button size="md" rightSection={<Icon icon="fa:send-o" />}>Hire me</Button>
                         <a href='https://github.com/baotrongnh' target='_blank'>
                              <Button variant="outline" size="md" rightSection={<Icon icon="bi:github"/>}>Github</Button>
                         </a>
                    </div>

                    <div className='flex flex-col absolute right-0'>

                    </div>
               </div>
          </div>
     )
}
