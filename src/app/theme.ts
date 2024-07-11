/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { colors } from "../shared/ui/colors"

const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1228px',
    xl: '1440px',
    '2xl': '1650px'
};

export const theme = extendTheme({
    breakpoints,
    colors,
    fonts: {
        heading: `'Theinhardt', sans-serif`,
        body: `'Theinhardt', sans-serif`,
    },
});