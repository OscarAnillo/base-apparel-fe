import { useState } from "react"

export default function TextComponent(){
    const [ emailInput, setEmailInput ] = useState('');

    const changeHandler = (e) => {
        setEmailInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!emailInput){
            alert('Please provide an email');
            return;
        }
    }

    return (
        <div className="text">
            <h1><span>We're</span> comming soon</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay-up-to-date with announcements and our launch deals.</p>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email address" value={emailInput} onChange={changeHandler} />
                <button className="bg-arrow">
                    <img src="images/icon-arrow.svg" alt="" />
                </button>
            </form>
            {emailInput === '' ? <p>Please provide a valid email</p> : ''}
        </div>
    )
}   