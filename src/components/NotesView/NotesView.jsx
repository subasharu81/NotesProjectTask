import * as React from 'react';

import { Typography } from "@mui/joy"
import { useEffect,useState } from "react"


function NotesView(){
    
    const [notesEditForm,setNotesEditForm] = useState(false)
    const getNotes = JSON.parse(localStorage.getItem('notesForm'))
     
    const showNoteEditform =()=>{
        setNotesEditForm(true)
    }
       
    return <div>
        { (getNotes && getNotes !=null) && 
            <React.Fragment onClick = {showNoteEditform}>
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
                { getNotes && getNotes.lastModified  ? getNotes.lastModified : ''}
                </Typography>
            </div>
            </React.Fragment>

        }
    </div>
}

export default NotesView