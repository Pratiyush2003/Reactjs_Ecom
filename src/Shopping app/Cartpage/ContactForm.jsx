import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import { collection, addDoc , onSnapshot} from 'firebase/firestore'


const ContactForm = ({cartTotal, productId, setProductId, user}) => {
    

    const [email ,setEmail] = useState(user)
    const [address ,setAddress] = useState('')

    const collectionRef = collection(db, 'crud')
    const [order, setOrder] = useState([])

    const  handleSubmit = async (e) => {
        if(email.length === 0 && address.length === 0){
            e.preventDefault();
        }else{
        await addDoc(collectionRef, {productId, cartTotal, email, address, cartTotal})
        setEmail('')
        setAddress('')
        setProductId(null)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            onSnapshot(collectionRef, (p) => {
                setOrder(p.docs.map((doc) => ({
                    ...doc.order, id: doc.id
                })))
            })
        }
        fetchData();
    },[])
    return (
        <>
        <h1 className='text-center pt-5'>Add Details</h1>
            <div className="container p-5">
                <form className="row g-3">
                    <div className="col-md-12" >
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                  
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" 
                        placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option>COD</option>
                            <option>UPI</option>
                            <option>BANK TRANSFER</option>
                        </select>
                    </div>
                    <div className="col-md-12 text-center">
                        <h4 className=' mt-2'>Product id : {productId}</h4>
                    </div>
                    
                    <div className="d-grid gap-2 mt-5">
                         <button className="btn btn-primary" type="button" onClick={handleSubmit}>Proceed</button>
       
                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactForm
