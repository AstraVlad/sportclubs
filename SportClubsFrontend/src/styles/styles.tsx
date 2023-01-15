import { createTheme } from '@mui/material/styles';

const Colors = {
    primary: '#4741DE',
       
}


const theme = createTheme({
    palette:{
        primary: {
            main: Colors.primary
        }

    },
    // shape:{
    //     borderRadius: 20

    // },
})

export default theme