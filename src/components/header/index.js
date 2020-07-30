import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.jpg'
const Header =(props)=>{

    return(
        <header data-test='headercomponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img data-test='logoImg' src={Logo} alt='logo'/>
                </div>

            </div>
        </header>
    )

}

export default Header;