import React from 'react';

const Register = ({onRouteChange}) => {
    return (
    <article className="br3 ba bg-blue o-60 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="email-address" >Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="First Name" >First Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="First Name"  id="First Name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="Last Name" >Last Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="Last Name"  id="Last Name" />
                </div>                
                <div className="mv3">
                    <label className="db fw6 lh-copy f5"  htmlFor="Password" >Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f5"  htmlFor="Password Confirmation" >Confirm Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="Password Confirmation"  id="Password Confirmation" />
                </div>
            </fieldset>
            <div className="mv3">
            <input className="b ph4 pv3 input-reset ba bg-red grow pointer f5 dib white shadow-5"
            onClick={ () => onRouteChange('signin') }
            type="submit" 
            value="Register" />
            </div>
        </div>
        </main>
    </article>    
    );
  }
  
export default Register;