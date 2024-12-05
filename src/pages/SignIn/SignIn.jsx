import { Box, Typography } from "@mui/material"
import styles from './signIn.module.css'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SignIn(){

    const [signInForm,setSignIn] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setSignIn({...signInForm,[name]:value})
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
       let response = await axios.post('https://reqres.in/api/login',signInForm)
       let token = await response.data

       if(token !=null){
            navigate('/notes')
       }

    }

    return  <div>
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
            <h5>Singn In</h5>
            <span style={{}}></span>
            <span style={{}}></span>
            <span style={{}}></span>
        </div>
        <div style={{ height: '300px', padding: '10px' }}>
            <Typography  variant="h5" sx={{textAlign:'center', color: 'brown'}}> Sign In </Typography>

            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder=" Email"
                        name ='email'
                    />
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" 
                        className="form-control"
                        id="passwordInputEmail1"  
                        placeholder="Password"
                        name = 'password'
                        
                        />
                </div>
                <div classNameName="form-group" style={{position:'relative',top:'30px',left:'200px'}}>
                    <button type="submit" className={`btn ${styles.btnbrown}`}>Login</button>
                    <button type="submit"  className={`btn ${styles.lightBlue}`}>Register</button>
                </div>
            </form>
        </div>





    </Box>
</div>
    
}

export default SignIn