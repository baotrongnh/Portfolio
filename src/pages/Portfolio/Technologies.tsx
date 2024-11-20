import {Icon} from "@iconify/react/dist/iconify.js"
import {Tooltip} from "@mantine/core";

function Technologies() {
    interface Technologies {
        name: string,
        icon: string
    }

    const technologiesData: Array<Technologies> = [
        {
            name: 'HTML',
            icon: 'vscode-icons:file-type-html'
        },
        {
            name: 'CSS',
            icon: 'vscode-icons:file-type-css'
        },
        {
            name: 'SCSS',
            icon: 'vscode-icons:file-type-scss2'
        },
        {
            name: 'ReactJS',
            icon: 'vscode-icons:file-type-reactjs'
        },
        {
            name: 'Javascript',
            icon: 'skill-icons:javascript'
        },
        {
            name: 'Typescript',
            icon: 'skill-icons:typescript'
        },
        {
            name: 'Java',
            icon: 'devicon:java'
        },
        {
            name: 'NodeJS',
            icon: 'logos:nodejs-icon'
        },
        {
            name: 'Github',
            icon: 'logos:github-octocat'
        },
        {
            name: 'Tailwind CSS',
            icon: 'devicon:tailwindcss'
        },
        {
            name: 'Ant Design',
            icon: 'devicon:antdesign'
        },
        {
            name: 'Mantine UI',
            icon: 'logos:mantine-icon'
        }
    ]

    return (
        <div className='container'>
            <h1 className='text-center font-semibold text-base' data-aos="zoom-in-up">Some technologies I've worked with</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-7'>
                {technologiesData.map((technology, index) => (
                    <div key={index} className='flex justify-center mb-7' data-aos="zoom-in-up">
                        <Tooltip label={technology.name}>
                            <Icon className='lg:grayscale hover:grayscale-0 duration-500 text-7xl cursor-pointer'
                                  icon={technology.icon}
                            />
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technologies