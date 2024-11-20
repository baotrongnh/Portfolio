import {Icon} from '@iconify/react/dist/iconify.js'
import {Text} from '@mantine/core'

export default function Footer() {
    return (
        <div className='h-22 bg-zinc-900'>
            <div className='flex justify-center items-center gap-4 py-5'>
                <a href='https://www.facebook.com/baotrong.nguyenhuynh.52/' target='_blank'>
                    <Icon fontSize={28} icon="fa:facebook-square"/>
                </a>
                <a href='https://github.com/baotrongnh' target='_blank'>
                    <Icon fontSize={28} icon="fa:github-square"/>
                </a>
                <a href='https://www.linkedin.com/in/b%E1%BA%A3o-tr%E1%BB%8Dng-nguy%E1%BB%85n-hu%E1%BB%B3nh-9b1712289/' target='_blank'>
                    <Icon fontSize={28} icon="fa:linkedin-square"/>
                </a>
            </div>
            <Text className='flex justify-center items-center gap-2 opacity-70'>
                Copyright <Icon icon="ic:baseline-copyright"/> 2024 nhbt.dev</Text>
        </div>
    )
}