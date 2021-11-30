import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Hero from '../components/Hero';


const Contacts = () => {
  return (
    <div>
    <Header />
    <Container>
    <Hero />
    <div className="flex flex-col items-center justify-center text-green-600 text-3xl font-semibold h-60">
        <h1>Пишите: letsgoodcook@gmail.com</h1>
    </div>
    </Container>

    <Footer />
    </div>
  )
}

export default Contacts;
