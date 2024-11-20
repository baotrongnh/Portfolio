import {Icon} from "@iconify/react/dist/iconify.js"
import {Button} from "@mantine/core"

export default function Hero() {

    return (
        <div className='h-dvh bg-zinc-900'>
            <div className='container h-full flex flex-col justify-center text-center'>
                <p className='text-xl' data-aos="zoom-in-up">
                    Hi, I'm <b className='text-purple-500'>Bao Trong</b>
                </p>
                <h1 className="py-5 text-3xl md:text-4xl font-semibold" data-aos="zoom-in-up"
                    data-aos-delay={350}>Front-end developer</h1>
                <p className='px-4 md:px-[20%] lg:px-[25%] antialiased opacity-85' data-aos="zoom-in-up"
                   data-aos-delay={550}>
                    Welcome to my portfolio page, where you'll find everything about me – from my hobbies, photography,
                    personal life, to the resources I often use, and of course, code. :))
                </p>
                <div className="flex justify-center gap-5 mt-7" data-aos="zoom-in-up" data-aos-delay={750}>
                    <a href='https://m.me/baotrong.nguyenhuynh.52/' target='_blank'>
                        <Button className='motion-preset-seesaw duration-200' size="md" rightSection={<Icon icon="fa:send-o"/>}>
                            Hire me
                        </Button>
                    </a>
                    <a href='https://github.com/baotrongnh' target='_blank'>
                        <Button className='duration-200' variant="outline" size="md" rightSection={<Icon icon="bi:github"/>}>Github</Button>
                    </a>
                </div>

                <div className='flex flex-col absolute right-0'>

                </div>
            </div>
        </div>
    )
}
