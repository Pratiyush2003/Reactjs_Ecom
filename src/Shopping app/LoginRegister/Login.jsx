import React,{useState} from 'react'
import { auth } from '../Firebase';
import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [Email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        const user = await signInWithEmailAndPassword (
            auth,
            Email,
            password
        )
        console.log(user);
      navigate('/')
    }

    const googleClick = async () => {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      navigate('/')
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
                <Link to = {'/Register'}>
                  <label className='p-4'>New User Register</label>
                </Link>
                <div className="col-12 mt-5">
                    <button className="btn btn-primary" type="submit" onClick={googleClick}>
                        <img src="https://freepngimg.com/download/google/66912-logo-now-google-plus-search-free-transparent-image-hd.png" alt="..." 
                        height={50} />
                        <span className='lead mx-3'>Login with Google</span>
                      </button>
                </div>
                <div className="col-12 mt-5">
                    <button className="btn btn-primary" type="submit" onClick={submitHandler}>Login</button>
                </div>
            </form>
            </div>
            

        </div>
    )
}

export default Login
