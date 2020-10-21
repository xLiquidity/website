import React from 'react';
import NavBar from './navbar'
import HomeSection from './homesection'
import AboutSection from './aboutsection'
import ContactSection from './contactsection'
import Footer from './footer'
import EthData from './ethData'

function HomePage() {
return (
    <div style={{backgroundColor: '#bedae9', fontFamily:'montserrat'}}>
<NavBar />
<HomeSection />
<AboutSection />
<ContactSection />
<EthData />
<Footer />
</div>
);
}

export default HomePage;
