import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Made By Chris")}</p>
                    
                </div>

            </div>
        </footer>
    );
}
export default Footer;