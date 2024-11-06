import { Box, Button, Center, Grid, Image, Text, useMantineTheme } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import avatar2 from './../../assets/photo/avatar-2.jpg'

export default function About() {
     const theme = useMantineTheme()

     return (
          <div className="">
               <div className='container' data-aos="fade-up">
                    <Grid gutter={0}>
                         <Grid.Col span={{ xs: 12, md: 6 }}>
                              <Center px={20}>
                                   <Image
                                        radius="md"
                                        src={avatar2}
                                   />
                              </Center>
                         </Grid.Col>

                         <Grid.Col span={{ xs: 12, md: 6 }}>
                              <Box px={20}>
                                   <Text
                                        c={theme.colors.purpleTheme[5]}
                                        fw={700}
                                        size='20px'
                                        className='pt-8 lg:pt-0'
                                   >
                                        Who am i?
                                   </Text>
                                   <Text
                                        fw={700}
                                        size='30px'
                                        p='20px 0'
                                   >
                                        I'm Bao Trong, a Front-end developer
                                   </Text>
                                   <Text className='leading-relaxed text-justify'>
                                        " I'm a frontend developer who loves working with fonts, colors, and making sure websites feel welcoming. I enjoy creating simple, clean designs that are easy to use and help people have a smooth experience. It's all about making things look nice without overcomplicating them! "
                                   </Text>

                                   <div className='mt-5'>
                                        <Button leftSection={<IconDownload stroke={2} size={14} />}>
                                             Download CV
                                        </Button>
                                   </div>
                              </Box>
                         </Grid.Col>
                    </Grid>
               </div>
          </div>
     )
}
