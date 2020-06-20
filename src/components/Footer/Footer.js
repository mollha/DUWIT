import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGoogle,
    faInstagram,
    faLinkedin,
    faPinterest,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

const social = {
    facebook: 'https://www.facebook.com/DUWomenInTechnology',
    twitter: 'https://twitter.com/wit_du',
    instagram: 'https://www.instagram.com/du_wit/',
}

const Footer = () => (
    <footer>
        <div className="bg-primary py-4">
            <div className="container text-center">
                <a target="_blank" href={social.facebook} className="mr-5 text-white">
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'}></FontAwesomeIcon>
                </a>
                <a target="_blank" href={social.twitter} className="mr-5 text-white">
                    <FontAwesomeIcon icon={faTwitter} size={'2x'}></FontAwesomeIcon>
                </a>
                <a target="_blank" href={social.instagram} className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size={'2x'}></FontAwesomeIcon>
                </a>
            </div>
        </div>
        <div className="bg-dark-primary text-white-50 py-3">
            <div className="container text-center">
                DUWIT
            </div>
        </div>
    </footer>
);


export default Footer;
