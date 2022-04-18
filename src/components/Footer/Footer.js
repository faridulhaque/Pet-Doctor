import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-foot bg-primary mt-5'>
            <p className='text-center'>©copyright{' '}{new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;