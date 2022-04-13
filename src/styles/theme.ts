import { createTheme } from "@mui/system";


/**
 * Colors
 * 
 * #989788 Gruffo
 * #4C443C Dark Lava
 * #FE4E00 International Orange Aerospace
 * #E0FF4F Arctic Lime
 * #5C80BC Glaucous
 * 
 * https://coolors.co/989788-4c443c-fe4e00-e0ff4f-5c80bc
 */


// const anekodia = {
//     fontFamily: 'Anek Odia',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 400,
//     src: `
//       url(${AnekOdiaTTF}) format('truetype')
//     `,
// };

const customMaterialTheme = createTheme({
    palette: {
        primary: {
            main: '#989788',
            dark: '#4C443C',
            contrastText: "#FAFAFAEE"
        },
        secondary: {
            main: '#5c80bc',
        },
        error: {
            main: '#fe4e00',
        },
        info: {
            main: '#5c80bc',
        },
        success: {
            main: '#e0ff4f',
        },
    },
    typography: {
        fontFamily: '"Anek Odia", Arial, sans-serif'
    },
});

export default customMaterialTheme;