import { Typography } from "@mui/joy"
import { useEffect } from "react"


function NotesView(){

    const getNotes = JSON.parse(localStorage.getItem('notesForm'))
     
       
    return <div>
         <div style={{
                border:'2px solid brown',
                color:'brown',
                backgroundColor:'#f9d188',
                paddingLeft:'20px'

            }}> 
                <h5>{ getNotes && getNotes.title  ? getNotes.title : ''}</h5>
            </div>
            <div style={{height:'300px',backgroundColor:'white',padding:'10px' }}>
                {getNotes && getNotes.notes ?  getNotes.notes :''}
                <Typography sx ={{position:'relative',left:'220px', top:'170px'}}>
                Last Modified Sun, 08 sep 2024 
                </Typography>
            </div>
        
           

        
        
       
    </div>
}

export default NotesView