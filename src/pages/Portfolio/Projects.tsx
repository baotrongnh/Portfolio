import {Badge, Button, Card, Image, Text, Tooltip} from '@mantine/core'
import {Icon} from '@iconify/react'
import coupleTimerScreen from '../../assets/photo/screen/screen-couple-timer.png'
import portfolioScreen from '../../assets/photo/screen/screen-portfolio.png'
import mentorBookingScreen from '../../assets/photo/screen/screen-mentor-booking.png'

interface Project {
    id: string,
    name: string,
    description: string,
    imageLink: string,
    projectLink: string,
    technology: string[]
}

const projectData: Project[] = [
    {
        id: '1',
        name: 'Couple Timer',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        imageLink: coupleTimerScreen,
        projectLink: 'https://coupletimer.vercel.app',
        technology: ['ReactJS', 'Tailwind CSS', 'Maintine UI', 'i18n', 'dayjs']
    },
    {
        id: '2',
        name: 'Portfolio',
        description: '',
        imageLink: mentorBookingScreen,
        projectLink: 'https://fptmentor.io.vn',
        technology: ['ReactJS', 'NodeJS', 'My SQL', 'Ant Design', 'i18n', 'SCSS']
    },
    {
        id: '3',
        name: 'Portfolio',
        description: '',
        imageLink: portfolioScreen,
        projectLink: 'https://nhbt.vercel.app',
        technology: ['ReactJS', 'Tailwind CSS', 'Mantine UI', 'i18n']
    },

]

function Projects() {
    return (
        <div className='py-20'>
            <div className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">
                {projectData.map((project: Project) => (
                    <Card key={project.id} shadow="md" padding="lg" radius="md" data-aos="zoom-in">
                        <Card.Section component="a" href={project.projectLink} target='_blank'>
                            <Image
                                src={project.imageLink}
                                alt=""
                                className='h-52'
                            />
                        </Card.Section>

                        <div className='h-40'>
                            <Text fw='bold' fz='lg' pt='20px'>{project.name}</Text>
                            <Text size="sm" lineClamp={3} className='text-justify'>{project.description}</Text>
                            <div className='flex flex-wrap items-center gap-3 py-4'>
                                <Tooltip label='Technology'>
                                    <Icon className='text-2xl' icon="mingcute:code-fill"/>
                                </Tooltip>
                                {project.technology.slice(0, 2).map((technology: string, index: number) => (
                                    <Badge key={index} variant='light' className='cursor-pointer'>{technology}</Badge>
                                ))}
                                {project.technology.length > 2 &&
                                    <Tooltip label={project.technology.slice(2).join(',  ')} withArrow={true}
                                             openDelay={400}>
                                        <Badge variant='light' className='cursor-pointer'>
                                            {project.technology.length - 2} +
                                        </Badge>
                                    </Tooltip>}
                            </div>
                        </div>

                        <a href={project.projectLink} target='_blank' className='w-full'>
                            <Button variant="light" mt="md" className='w-full'>
                                View project
                            </Button>
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects