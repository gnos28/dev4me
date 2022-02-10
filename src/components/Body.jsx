import React from 'react';
import LogoFull from '../img/logo-full.svg'
import "./Body.scss";

class Body extends React.Component {

    render(){
        return (
            <div className='body'><img src={LogoFull} alt="logo" className='logoBody'/></div>
        )
    }
}

export default Body