import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import styles from './notes.module.css'
import { Box } from '@mui/material';
import ModalComponent from '../../components/modal/ModalComponent';
import NotesView from '../../components/NotesView/NotesView';



function Notes() {
  const [open, setOpen] = React.useState(true);
 
  return <div className={`${styles.modalDesign}`}>
    <React.Fragment>

      <ModalComponent formType='addNotes' />
    </React.Fragment>

      <Box
        sx ={{
           border:'2px solid brown',
           width:'45%'
        }}
      > 
        <NotesView />

      </Box>

  </div>
}

export default Notes