import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (!isSignedIn){
    return(
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p onClick={ () => onRouteChange('main') } className='fs f3-l  b link dim white pa4 pointer'>Home</p>
            <p onClick={ () => onRouteChange('signin') } className='fs f3-l  b link dim white pa4 pointer'>Sign In</p>
            <p onClick={ () => onRouteChange('register') } className='fs f3-l  b link dim white pa4 pointer'>Register</p>
        </nav>
    );}
    else{
        return(
            <nav style={{display: 'flex', justifyContent:'flex-end'}}>
                <p onClick={ () => onRouteChange('main') } className='fs f3-l  b link dim white pa4 pointer'>Home</p>
                <p onClick={ () => onRouteChange('home') } className='fs f3-l  b link dim white pa4 pointer'>Face Recognition</p>
                <p onClick={ () => onRouteChange('signin', false) } className='fs f3-l b link dim white pa4 pointer'>Sign Out</p>
            </nav>
        );
    }
}
export default Navigation;