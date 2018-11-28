import React from 'react';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) =>{
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data ===  'success'){
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        })
        
       
    }

    render(){
    const { onRouteChange } = this.props;
    return (
    <article className="br3 ba bg-blue o-80 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                <legend className="f2 fw6 ph0 mh0">Welcome</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f5">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    onChange={this.onEmailChange} />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f5">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}/>
                </div>
            </fieldset>
            <div className="mv3">
            <input className="b ph4 pv3 input-reset ba bg-red grow pointer f5 dib white shadow-5"
            onClick={ this.onSubmitSignIn }
            type="submit" 
            value="Sign in" />
            </div>
            <div className="lh-copy mt3">
            <a href="#0" className="f5 link dim black db pointer"
            onClick={ () => onRouteChange('register') }>Register</a>
            <a href="#0" className="f5 link dim black db pointer"
            onClick={ () => onRouteChange('resetPassword') }>Forgot your password?</a>
            </div>
            
        </div>
        </main>
    </article>    
    );
    }
  }
  
export default Signin;