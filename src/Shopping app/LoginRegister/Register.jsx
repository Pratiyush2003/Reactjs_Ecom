import React,{useState} from 'react'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [Email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const user = await createUserWithEmailAndPassword (
            auth,
            Email,
            password
        )
        console.log(user)
        navigate('/login')

    }
    return (
        <div>

            <div className="container p-6 text-center" style={{height: '80vh'}} >
            <form className="row pt-5 d-flex align-items-center justify-content-center">
                
                <div className="col-7 mt-5">
                    <label htmlFor="validationDefaultUsername" className="form-label">
                        <h3>Email</h3></label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2"><i className="bi bi-envelope"></i></span>
                        <input type="Email" className="form-control" id="validationDefaultUsername" value={Email} onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div className="col-7 mt-5">
                    <label htmlFor="validationDefault05" className="form-label">
                        <h3>Password</h3></label>
                    <input type="password" className="form-control" id="validationDefault05"  value={password} onChange={(e) => setPassword(e.target.value)}
                     required />
                </div>
                <div className="col-12 mt-5">
                    <button className="btn btn-primary" type="submit" onClick={submitHandler}>Register</button>
                </div>
            </form>
            </div>
            

        </div>
    )
}

export default Register
