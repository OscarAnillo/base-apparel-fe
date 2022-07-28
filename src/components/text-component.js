import { useState, useEffect } from "react";

export default function TextComponent() {
  const [emailInput, setEmailInput] = useState({ email: ''});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setEmailInput({...emailInput, [name] : value});
  };

  const validate = (value) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email) {
        console.log('HI here~')
      error.email = "An email is required";
    } else if (!emailRegex.test(value.email)) {
        console.log('Hello there!')
      error.email = "Please provide a valid email";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(emailInput));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(emailInput).length === 0 && isSubmitted) {
      console.log(emailInput);
    }
  }, [ formErrors ]);

  return (
    <div className="text">
      <h1>
        <span>We're</span> comming soon
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay-up-to-date with announcements and our
        launch deals.
      </p>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={emailInput.email}
          onChange={changeHandler}
        />
        <button className="bg-arrow">
          <img src="images/icon-arrow.svg" alt="" />
        </button>
        {formErrors.email && <div className="bg-error">
        <img src="images/icon-error.svg" alt="" />
        </div>
        }
      </form>
      <div className="error-style">
        <span>{formErrors.email}</span>
      </div>
    </div>
  );
}
