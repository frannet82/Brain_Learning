import React from 'react';

const ResetPassword = ({onRouteChange}) => {
    return (
    <article className="br3 ba bg-blue o-60 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                <legend className="f2 fw6 ph0 mh0">Forgot Your Password?</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f7">
                    Enter and submit your username. An email containing instructions and a link to reset your password will be sent to your email address.
                    </label>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f5">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
            </fieldset>
            <div className="mv3">
            <input className="b ph4 pv3 input-reset ba bg-red grow pointer f5 dib white shadow-5"
            onClick={ () => onRouteChange('signin') }
            type="submit" 
            value="Send" />
            </div>
        </div>
        </main>
    </article>    
    );
  }
  
export default ResetPassword;