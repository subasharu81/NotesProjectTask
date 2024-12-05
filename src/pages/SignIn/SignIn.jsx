import { Box, Typography } from "@mui/material"

function SignIn(){

    return  <div>
    <Box
        sx={{
            border: '2px solid brown',
            width: '45%',
            position:'relative',
            left:'300px',
            top:'100px'
        }}
    >
        <div style={{
            display:'flex',
            border: '2px solid brown',
            color: 'brown',
            backgroundColor: '#f9d188',
            paddingLeft:'20px'

        }}>
            <h5>Singn In</h5>
            <span style={{}}></span>
            <span style={{}}></span>
            <span style={{}}></span>
        </div>
        <div style={{ height: '300px', padding: '10px' }}>
            <Typography  variant="h5" sx={{textAlign:'center', color: 'brown'}}> Sign In </Typography>

            
        </div>





    </Box>
</div>
    
}

export default SignIn