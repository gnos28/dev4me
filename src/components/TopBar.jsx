import React from 'react';
import Logo from '../img/logo.svg'
import "./TopBar.scss";

class Path extends React.Component {
    render(){
        return ( <div><span className='path-link'>DEV4ME</span> &gt; <span className='path-link'>home</span></div>
        )
    }
}


class TopBar extends React.Component {

    render(){
        return (
            <div className='topbar'>
                <img src={Logo} alt="logo" className='logo'/>
                <Path/>
                </div>
        )
    }
}

export default TopBar