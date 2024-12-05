import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'

function Home() {
    console.log('home page')
    return <div>
        <div role="presentation" >
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Homepage
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Your Notes</Typography>
            </Breadcrumbs> */}
        </div>
    </div>
}

export default Home