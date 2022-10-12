import { useState } from 'react';

export default function Form() {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
d

const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		{/* <h1>User {name} successfully registered!!</h1> */}
		<h1>Thank you for filling the form {name}</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (

	<div className="form" 
    style={{
		display: submitted ? '' : 'form',
		}}>
      
	<div>
		{/* <h1>User Registration</h1> */}
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
    <div className="form-floating mb-3">
      <input onChange={handleName} type="text" className="form-control rounded-4 input" id="floatingName" placeholder="Name" value={name} />
      <label className="label" htmlFor="floatingName">Name</label>
      
    </div>

    <div className="form-floating mb-3">
        <input type="number" className="form-control rounded-4" id="floatingPhone" placeholder="Phone No." onChange={handleEmail} value={email}/>
        <label htmlFor="floatingPhone">Phone No.</label>
    </div>
    <div className="form-floating mb-3">
        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={handlePassword} value={password} />
        <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
        <input type="number" className="form-control rounded-4" id="floatingPhone" placeholder="Age"/>
        <label htmlFor="floatingPhone">Age</label>
    </div>
    <div className="form-floating mb-3">
        <input type="text" className="form-control rounded-4" placeholder="location" />
        <label htmlFor="floatingInput">Location</label>
    </div>
    <div className="form-floating mb-3">
        <input type="text" className="form-control rounded-4" placeholder="university" />
        <label htmlFor="floatingPhone">University</label>
    </div>
    

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
