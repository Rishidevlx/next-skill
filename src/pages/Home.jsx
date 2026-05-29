import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Recognized from "../components/sections/Recognized";
import Services from "../components/sections/Services";
import CoreValues from "../components/sections/CoreValues";
import Process from "../components/sections/Process";
import Technologies from "../components/sections/Technologies";
import Solutions from "../components/sections/Solutions";
import Archive from "../components/sections/Archive";
import Clients from "../components/sections/clients";
import Programs from "../components/sections/Programs";
import Course from "../components/sections/Course";
import Mentors from "../components/sections/Mentors";
import Success from "../components/sections/Success";
import Hiring from "../components/sections/Hiring";
import Blogs from "../components/sections/Blogs";
import Footer from "../components/sections/Footer";

function Home(){

    return (
    <>
     <Navbar />
     <Hero />
     <About />
    <Recognized />
    <Services />
    <CoreValues />
    <Process />
    <Technologies />
    <Solutions />
    <Archive />
    <Clients />
    <Programs />
    <Course />
    <Mentors />
    <Success />
    <Hiring />
    <Blogs />
    <Footer />

    </>
       
    ); 
}

export default Home;