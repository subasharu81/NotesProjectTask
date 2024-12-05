import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import styles from './notes.module.css'
import { Box } from '@mui/material';



function Notes() {
  const [open, setOpen] = React.useState(true);

  return <div className={`${styles.modalDesign}`}>
    <React.Fragment>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',


        }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 800, borderRadius: 'md', p: 5, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Box >
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: 'lg', mb: 1 }}
            >
              Add Notes
            </Typography>
          </Box>
          <form>
            <div className="form-control">
              <input type='text' />
            </div>
            <div className="form-control ">
              <textarea
                row={50}
                col={50}
              ></textarea>
            </div>
            <div className={`${styles.formBtn}`}>
              <input type='submit' value='Add' className={`${styles.addBtn}`} />&nbsp;&nbsp;
              <button
                className={`${styles.cancel}`}
              > Cancel</button>
            </div>
          </form>

        </Sheet>
      </Modal>
    </React.Fragment>

  </div>
}

export default Notes