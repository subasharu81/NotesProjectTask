import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import styles from './modalcomp.module.css'
import { Box } from '@mui/material';

function ModalComponent() {

    const [open, setOpen] = React.useState(true);
    return <div>
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
                    backgroundColor: 'lightyellow'
                }}
            >

                <Box sx={{ display: 'flex' }}>
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
                            rows={10}
                            cols={5}

                        ></textarea>
                    </div>
                    <div classNameName="form-group" style={{ position: 'relative', top: '30px', left: '80px' }}>
                        <button type="submit" className={`btn btn-success`}>Add</button>
                        <button type="submit" className={`btn btn-danger`} style={{ position: 'relative', left: '20px' }}> Cancel</button>
                    </div>
                </form>

            </Sheet>
        </Modal>
    </div>

}
export default ModalComponent