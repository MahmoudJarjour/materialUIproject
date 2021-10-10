
import {makeStyles} from '@material-ui/core';



const useStyles = makeStyles({
    Button:{
        color:'red',
        backgroundColor:'blue',
        '&:hover':{
            backgroundColor:'purple',
        },
        marginLeft: '35%',
        
        display:'flex',
    },
    
    Typo:{
        color:'pink',
    },

    ButtonGroups:{
        backgroundColor:'red',
        marginLeft:'35%',
        padding:'10px',
        margin:'auto',
        display:'flex',
        
    },

    textfield:{
        marginTop:'20px',
        marginBottom:'20px',
        display:'block',
        
        
        
    }



    })

export default useStyles;