import React from 'react';
import NavBar from './navbar'
import HomeSection from './homesection'
import AboutSection from './aboutsection'
import ContactSection from './contactsection'
import Footer from './footer'

function HomePage() {
return (
    <div>
<NavBar />
<HomeSection />
<AboutSection id="about"/>
<ContactSection id="about"/>
<Footer />
</div>
);
}

export default HomePage;