import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    
    const [valueName , setValueName] = useState('')
    const [valueEmail , setValueEmail] = useState('')
    const [valueDesc , setValueDesc] = useState('')

    const textNameValueOnchange = (event) => {
        setValueName(event.target.value)
    }
    const textEmailValueOnchange = (event) => {
        setValueEmail(event.target.value)
    }
    const textDescValueOnchange = (event) => {
        setValueDesc(event.target.value)
    }
    return (
        <div className="content-contact">
            <form>
                <input className='text' onChange={textNameValueOnchange} type='text' placeholder='نام' />
                <br />
                <input className='text' onChange={textEmailValueOnchange} type='text' placeholder='ایمیل' />
                <br />
                <textarea className='text text-area' onChange={textDescValueOnchange} placeholder='توضیحات'></textarea>
                <br />
                <button className='btn' type='submit'>ارسال</button>
                <button className='btn' type='reset'>پاک کردن</button>
            </form>
        </div>
    )
}

export default Contact