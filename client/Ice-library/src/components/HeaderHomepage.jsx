import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeaderHomepage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
        <div className='Img-header'>
        <div className='text-p' style={{display:"flex",flexDirection:"column"}}>
        <div data-aos="fade-right" className='Heading-header'>Get in touch to get the most exciting venture of your life</div>
        <p data-aos="Fade-left" className='Heading-para'>Discover and find your favourite book according to your taste</p>
        </div>
        </div>
        </>

    );
}

export default HeaderHomepage;
