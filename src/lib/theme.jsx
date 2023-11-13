// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        primary: "#E50914",
        secondary: "#17161B",
    },
    components: {
        Button: {
            variants: {
                chip: {
                    bg: "primary",
                    color: "white",
                    borderRadius: "500px",
                    px: "30px",
                    py: "10px",
                    fontWeight: "500"
                },
            },
            // 6. We can overwrite defaultProps
            defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid
                colorScheme: 'green', // default is gray
            },
        },
    },
})

