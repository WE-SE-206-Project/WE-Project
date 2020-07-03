import React from 'react';
import './css/signup.css';

const Login = () => {
	return(
		<article className="br4 ba dark-gray 
			b--black-10 center shadow-5">
		<main className="pa4 black-90 mb3">
			 <div className="measure">
			    <fieldset id="sign_up"
			    className="ba b--transparent ph0 mh0">
			    <legend 
			    className="f2 fw6 ph0 mh0 tc">Sign In</legend>
			    <div className="mt3">
			    <label className="db fw6 lh-copy f6" 
			    htmlFor="contact-number">Contact Number</label>
			    <input 
			    className="pa2 input-reset ba bg-transparent 
			   	hover-bg-black hover-white w-100" 
			    type="text" name="contact-number"  
			    id="contact-number"/>
			    </div>
			    <div className="mv3">
			    <label className="db fw6 lh-copy f6" 
			    htmlFor="password">Password</label>
			    <input className="b pa2 input-reset ba 
			    bg-transparent hover-bg-black 
			    hover-white w-100" 
			    type="password" 
			    name="password"  
			    id="password"/>
			    </div>
			    </fieldset>
			    <div>
			    <input className="b ph3 pv2 input-reset
			    ba b--black bg-transparent grow 
			    pointer f5 w-40" type="submit" 
			    value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			    <p className="f6 link 
			    dim black db pointer w3">
			    Sign Up</p>
			    </div>
		  		</div>
			</main>
		</article>
		);
}

export default Login;