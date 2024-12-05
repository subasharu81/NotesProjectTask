import { Box, Icon, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import styles from './singup.module.css'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {

    const [signUpForm,setSignUp] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setSignUp({...signUpForm,[name]:value})
    }
    const handleSubmit = async (event)=>{

       event.preventDefault()
       
       let payload = {
        email : signUpForm.email,
        password: signUpForm.password
       }

       let response = await axios.post('https://reqres.in/api/register',payload)
       let token = await response.data

       if(token !=null){
            navigate('/login')
       }

    }


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
                    <input 
                        type="email" 
                        className="form-control"
                         id="exampleInputEmail1" 
                         placeholder=" Email" 
                         name ='username'
                    />
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInputEmail1"  
                        placeholder="Password"
                        name='email'
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInputEmail1"  
                        placeholder="Password" 
                        name ='password'

                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInputEmail1" 
                        placeholder="Password" 
                         name ='confirmpassword'
                        
                        />
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