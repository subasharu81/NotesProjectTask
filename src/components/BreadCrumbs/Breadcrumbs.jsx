import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'
import { useLocation, useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'

function BreadCrumb(){

    const [crumbText,setCrumbtext] = React.useState('home')

    const location = useLocation()

    React.useEffect(()=>{
        if(location.pathname == '/register')
            setCrumbtext('Signup Page')
        else if(location.pathname == '/signIn')
            setCrumbtext('Login Page')
        else if(location.pathname == '/notes' || location.pathname == '/home' || location.pathname == '/')
            setCrumbtext('Your Notes')

    })
    return <div>
           <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/login">
                    Homepage
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{crumbText}</Typography>
            </Breadcrumbs>
    </div>
}

export default BreadCrumb