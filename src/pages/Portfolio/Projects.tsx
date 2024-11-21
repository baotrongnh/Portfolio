import {Badge, Button, Card, Image, Text, Tooltip} from '@mantine/core'
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
        description: 'Love days calculator for couples, with built-in music player and friendly interface.',
        imageLink: coupleTimerScreen,
        projectLink: 'https://coupletimer.vercel.app',
        technology: ['ReactJS', 'Tailwind CSS', 'Maintine UI', 'i18n', 'dayjs']
    },
    {
        id: '2',
        name: 'FPT Mentor Booking',
        description: 'Mentor scheduling system for FPT students, supporting in finding mentors to help with SWP subjects in particular and studying at FPT University in general.',
        imageLink: mentorBookingScreen,
        projectLink: 'https://fptmentor.io.vn',
        technology: ['ReactJS', 'NodeJS', 'My SQL', 'Ant Design', 'i18n', 'SCSS']
    },
    {
        id: '3',
        name: 'Portfolio',
        description: 'Personal portfolio page, a place for my personal style and information about me.',
        imageLink: portfolioScreen,
        projectLink: 'https://nhbt.vercel.app',
        technology: ['ReactJS', 'Tailwind CSS', 'Mantine UI', 'i18n']
    },
]

function Projects() {
    return (
        <div className='py-20'>
            <h1 className='text-center font-semibold text-lg text-purple-500' data-aos="zoom-in-up">Top project</h1>
            <div className='flex justify-center py-1' data-aos="zoom-in-up">
                <div className='bg-purple-600 w-20 h-1 rounded-md'/>
            </div>
            <div className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-14 mt-7">
                {projectData.map((project, index) => (
                    <Card key={project.id} shadow="md" padding="lg" radius="md" data-aos="zoom-in" data-aos-delay={`${index}00`} withBorder={true}>
                        <Card.Section component="a" href={project.projectLink} target='_blank'>
                            <Image
                                src={project.imageLink}
                                alt=""
                                className='h-52'
                            />
                        </Card.Section>

                        <div className='min-h-44'>
                            <Text fw='bold' fz='lg' pt='20px'>{project.name}</Text>
                            <Text size="sm" lineClamp={3} className='text-justify'>{project.description}</Text>
                            <div className='flex flex-wrap items-center gap-4 py-4'>
                                {project.technology.slice(0, 2).map((technology: string, index: number) => (
                                    <Tooltip label='Technologies' key={index} >
                                        <Badge variant='light'
                                               className='cursor-pointer'>{technology}
                                        </Badge>
                                    </Tooltip>
                                ))}
                                {project.technology.length > 2 &&
                                    <Tooltip label={project.technology.slice(2).join(',  ')}
                                             withArrow={true}
                                             openDelay={400}
                                    >
                                        <Badge variant='light' className='cursor-pointer'>
                                            {project.technology.length - 2} +
                                        </Badge>
                                    </Tooltip>}
                            </div>
                        </div>

                        <a href={project.projectLink} target='_blank' className='w-full pt-2'>
                            <Button variant="light" className='w-full'>
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