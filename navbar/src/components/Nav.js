import React, {Component} from 'react'
import './nav.css'

export class Nav extends Component{
    render() {
        return(
            <div>
                <h1>React Assignment: Simple Navbar</h1>

              <div className='navbar-container'>
              <div className='logo'>
                        <strong>Navbar-Logo</strong>
                </div>
                
                    <div className='navbar-list'>
                        <ul className='list'>
                            <li><a className='ayo' href="#Home">Home</a></li>
                            <li><a className='ayo' href="#About Us">About Us</a></li>
                            <li><a className='ayo' href="#Gallery">Gallery</a></li>
                            
                        </ul>
                    </div>
                
              </div>
                    

            </div>
        )
    }
}

export default Nav;