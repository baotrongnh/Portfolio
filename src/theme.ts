import { createTheme, MantineColorsTuple, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core"

const purpleTheme: MantineColorsTuple = [
     '#f6eeff',
     '#e7d9f7',
     '#cab1ea',
     '#ad86dd',
     '#9462d2',
     '#854bcb',
     '#7d3fc9',
     '#6b31b2',
     '#5f2ba0',
     '#52238d'
]

const themeOverride = createTheme({
     fontFamily: 'montserrat, sans-serif',
     colors: {
          purpleTheme
     },
     primaryColor: 'purpleTheme',
     defaultRadius: 'md',
     autoContrast: true,
     defaultGradient: { from: 'violet', to: 'blue', deg: 88 },
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)