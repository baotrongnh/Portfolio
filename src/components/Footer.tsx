import { Icon } from '@iconify/react/dist/iconify.js'
import { Text } from '@mantine/core'

export default function Footer() {
     return (
          <div className='h-20 border-t-2'>
               <Text className='flex justify-center items-center gap-2 opacity-70'>Copyright <Icon icon="ic:baseline-copyright" /> 2024 nhbt.dev</Text>
          </div>
     )
}
