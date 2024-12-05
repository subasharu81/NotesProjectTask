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
          sx={{ 
              maxWidth: 800, 
              borderRadius: 'md', 
              p: 5, 
              boxShadow: 'lg',
              backgroundColor:'lightyellow'
            }}
        >
          
          <Box sx={{display:'flex'}}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
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
                  <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder=" title" />
                      
                  </div>
                  <div className="form-group">
                      
                      <textarea 
                        className="form-control" 
                        id="passwordInputEmail1"  
                        placeholder="Password" 
                        rows ={10}
                        cols = {5}
                        
                        ></textarea>
                  </div>
                  <div classNameName="form-group" style={{position:'relative',top:'30px',left:'80px'}}>
                      <button type="submit" className={`btn btn-success`}>Add</button>
                      <button type="submit"  className={`btn btn-danger`} style={{position:'relative',left:'20px'}}> Cancel</button>
                  </div>
              </form>

        </Sheet>
      </Modal>
    </React.Fragment>

      <Box
        sx ={{
           border:'2px solid brown',
           width:'45%'
        }}
      > 
          <div style={{
            border:'2px solid brown',
            color:'brown',
            backgroundColor:'#f9d188',
            paddingLeft:'20px'

          }}> 
              <h5>Test</h5>
          </div>
          <div style={{height:'300px',backgroundColor:'white',padding:'10px' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid deserunt unde corrupti aut eius aspernatur cum ut? Fuga, eos, vero praesentium vel delectus quam vitae aperiam quidem quos perspiciatis earum!
            <Typography sx ={{position:'relative',left:'220px', top:'170px'}}>
               Last Modified Sun, 08 sep 2024 
            </Typography>
          </div>

          
          
        

      </Box>

  </div>
}

export default Notes