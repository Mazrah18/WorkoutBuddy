
// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer" style={{  padding: '20px', textAlign: 'center', position: 'relative' }}>
                {/* Aesthetic border */}
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '65%', height: '100%', borderTop: '2px solid #232C3B', zIndex: 1 }}></div>

                <div style={{ marginBottom: '10px', position: 'relative', zIndex: 2 }}>
                    <p style={{ fontSize: '25px' }}>
                        Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" style={{ color: 'red' }} /> <span style={{ paddingLeft: '2px' }}>Using</span>
                        <FontAwesomeIcon icon={faReact} className="rotate-icon" style={{ marginLeft: "10px" }} />
                    </p>
                </div>

                <div style={{ marginBottom: '10px', position: 'relative', zIndex: 2 }}>
                    <p style={{ fontSize: '12px' }}>
                        
                        <a className='footer-links' href="https://github.com/Mazrah18" target="_blank" style={{  textDecoration: 'none', marginRight: '10px' }}><FontAwesomeIcon icon={faGithub } size='2x' style={{ marginRight: '5px' }} /></a>
                        <a className='footer-links' href="https://parth-bhatt.netlify.app/" target="_blank" style={{  textDecoration: 'none' }}><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' style={{ marginLeft: '5px' }} /></a>
                        
                    
                    </p>
                    
                </div>
            </footer>
        </>
    );
};

export default Footer;
