import React, { useState,useEffect } from 'react'
import './Form.css'
import { Table } from 'react-bootstrap'



function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [all, setAll] = useState(localStorageItem())

    function localStorageItem(){
        const data = localStorage.getItem('loginForm')
        if(data){
            return JSON.parse(localStorage.getItem('loginForm'))
        }else{
         return   [];
        }
    }

    function ChangeEmail(event) {
        setEmail(event.target.value)
    }
    function ChangePassword(event) {
        setPassword(event.target.value)
    }
    function DeleteItem(id){
        const removed = all.filter( (item, index) =>{
            return index !== id
            console.log(removed)
        })
        setAll(removed)
    }
    function SubmitForm(event) {
        event.preventDefault()
        const newEntry = { email: email, password: password }
        setAll([newEntry, ...all])
        setEmail('')
        setPassword('')
    }
    useEffect(() => {
            localStorage.setItem('loginForm', JSON.stringify(all))
    }, [all])

    return (
        <>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={SubmitForm}>
                            <h1 color='#7875B5'>Login Form</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>

                                <input type="text" className="login__input" placeholder="User name / Email" onChange={ChangeEmail} value={email} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" onChange={ChangePassword} value={password} />
                            </div>
                            <button className="button login__submit" onSubmit={SubmitForm}>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <br />
                            <Table striped bgColor='white'>
                                <tbody>
                                    <tr>
                                        <td>Email</td>
                                        <td>Password</td>
                                        <td>Action</td>
                                    </tr>
                                    {
                                        all.map((item, id) => {
                                            return (
                                                <tr key={id}>
                                                    <td>{item.email}</td>
                                                    <td>{item.password}</td>
                                                    <button onClick={() => DeleteItem(id)}>Delete</button>
                                                </tr>
                                            )
                                        })

                                    }
                                </tbody>
                            </Table>
                        </form>

                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
            {/* <div>
            <label htmlFor='email'>Email</label>
            <input type='text' autoComplete='off' placeholder='Enter your Email here...' />
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' autoComplete='off' placeholder='Enter your Passowrd here...' />
        </div> */}
        </>
    )
}
export default Form;