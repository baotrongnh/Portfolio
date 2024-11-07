import {Badge, Button, Card, Image, Text, Tooltip} from '@mantine/core'
import {IconCode} from "@tabler/icons-react";

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
        name: 'Heally Chat',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        imageLink: 'https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v1663316058/upload/Web_Chat_Best_Practices_for_Avoiding_Confusion_2x_rvqski.png',
        projectLink: 'http://heally.com',
        technology: ['ReactJS', 'NodeJS', 'MongoDB', 'Ant Design', 'Typescript']
    },
    {
        id: '2',
        name: 'Heally Chat',
        description: '',
        imageLink: 'https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v1663316058/upload/Web_Chat_Best_Practices_for_Avoiding_Confusion_2x_rvqski.png',
        projectLink: 'http://heally.com',
        technology: ['ReactJS', 'NodeJS']
    },
    {
        id: '3',
        name: 'Heally Chat',
        description: '',
        imageLink: 'https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v1663316058/upload/Web_Chat_Best_Practices_for_Avoiding_Confusion_2x_rvqski.png',
        projectLink: 'http://heally.com',
        technology: ['ReactJS', 'NodeJS']
    }
]

function Projects() {
    return (
        <div className='py-20'>
            <div className="container px-6 flex flex-wrap justify-center gap-14">
                {projectData.map((project: Project) => (
                    <Card key={project.id} shadow="md" padding="lg" radius="md" w='30%' data-aos="zoom-in">
                        <Card.Section component="a" href={project.projectLink}>
                            <Image
                                src={project.imageLink}
                                height={160}
                                alt=""
                            />
                        </Card.Section>

                        <Text fw='bold' fz='lg' pt='20px'>{project.name}</Text>
                        <Text size="sm" lineClamp={3} className='text-justify min-h-20'>{project.description}</Text>
                        <div className='flex flex-wrap items-center gap-3 py-4'>
                            <Tooltip label='Technology'><IconCode stroke={2}/></Tooltip>
                            {project.technology.slice(0, 2).map((technology: string, index: number) => (
                                <Badge key={index} variant='light' className='cursor-pointer'>{technology}</Badge>
                            ))}
                            {project.technology.length > 2 &&
                                <Tooltip label={project.technology.slice(2).join(',  ')} withArrow={true} openDelay={400}>
                                    <Badge variant='light' className='cursor-pointer'>
                                        {project.technology.length - 2} +
                                    </Badge>
                                </Tooltip>}
                        </div>

                        <Button variant="light" mt="md">
                            View project
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects