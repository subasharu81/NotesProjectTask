import { Box, Icon, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import styles from './singup.module.css'

function Signup() {

    return <div>
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
                <h5>Singn Up</h5>
                <span style={{}}></span>
                <span style={{}}></span>
                <span style={{}}></span>
            </div>
            <div style={{ height: '400px', padding: '10px' }}>
                <Typography  variant="h5" sx={{textAlign:'center', color: 'brown'}}> Sign Up </Typography>

                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder=" Email" />
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="password" className="form-control" id="passwordInputEmail1"  placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" className="form-control" id="passwordInputEmail1"  placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Confirm Password</label>
                    <input type="password" className="form-control" id="passwordInputEmail1"  placeholder="Password" />
                </div>
                <div classNameName="form-group" style={{position:'relative',top:'30px',left:'200px'}}>
                    <button type="submit" className={`btn ${styles.btnbrown}`}>Register</button>
                    <button type="submit"  className={`btn ${styles.lightBlue}`}>Login</button>
                </div>
            </form>

            </div>
            




        </Box>
    </div>
}

export default Signup