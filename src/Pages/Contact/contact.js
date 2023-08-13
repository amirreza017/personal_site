import React, { useEffect, useRef, useState } from 'react'
import validateEmail from '../../utils/validation'
import './contact.css'
import Button from 'react-bootstrap/Button';

const Contact = () => {
    
    const [valueName , setValueName] = useState('')
    const [valueEmail , setValueEmail] = useState('')
    const [valueDesc , setValueDesc] = useState('')
    const [errors , setErrors] = useState({})
    const inputNameRef = useRef(null)

    const textNameValueOnchange = (event) => {
        setValueName(event.target.value)
    }
    const textEmailValueOnchange = (event) => {
        if (validateEmail(event.target.value)) {
            setValueEmail(event.target.value)
            setErrors({
                ...errors,
                valueEmail: null
            })
        } else {
            setErrors({
                ...errors,
                valueEmail: 'ایمیل معتبر نیست'
            })
        }
    }
    const textDescValueOnchange = (event) => {
        setValueDesc(event.target.value)
    }

    useEffect(() => {
        inputNameRef.current.focus();
    },[])

    return (
        <div className="content-contact">
            <form>
                <input ref={inputNameRef} className='text' onChange={textNameValueOnchange} type='text' placeholder='نام' />
                <br />
                <input className='text' onChange={textEmailValueOnchange} type='text' placeholder='ایمیل' />
                {errors.valueEmail && <span className='email_text'>{errors.valueEmail}</span>}
                <br />
                <textarea className='text text-area' onChange={textDescValueOnchange} placeholder='توضیحات'></textarea>
                <br />
                {/* <button className='btn' type='submit'>ارسال</button>
                <button className='btn' type='reset'>پاک کردن</button> */}
                <Button type='submit' variant="primary">ارسال</Button>
                <Button type='reset' variant="primary">پاک کردن</Button>
            </form>
        </div>
    )
}

export default Contact