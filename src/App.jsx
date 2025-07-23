import React from 'react';
import Chatbot from './components/Chatbot';
import Motivational from './sections/Motivational';
import Funny from './sections/Funny';
import paperBg from './assets/textures/squared-paper-texture.jpg';
import Romantic from './sections/Romantic';
import Epic from './sections/Epic';
import Gamery from './sections/Gamery';
import Stoic from './sections/Stoic';


function App() {
  return (
    <div className="relative flex min-h-screen overflow-y-scroll scroll-smooth">
      {/* 🌈 Background gradient layer */}
      {/* 📄 Background paper texture layer */}
<div
  className="fixed top-0 left-0 w-full h-full -z-10 bg-repeat bg-top bg-[#fefefe] opacity-90"
  style={{ backgroundImage: `url(${paperBg})`, backgroundSize: '1950px' }}
/>

<div className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-[#fff] via-[#fceff0] to-[#eaeaea] opacity-60" />



      {/* Left scrollable section */}
      <div className="w-full lg:w-[60vw] h-screen scroll-smooth">
        {/* Hero Section */}
        <section className="h-screen w-full flex items-center justify-center ">
          <h1 className="text-white font-secondquotes text-5xl md:text-6xl text-center bg-black/30 rounded-xl px-8 py-4 backdrop-blur">
            Quote Festival
          </h1>
        </section>

        <Motivational />
        <Funny />
        <Romantic/>
        <Epic/>
        <Gamery/>
        <Stoic/>

      </div>

      {/* Right fixed chatbot */}
      <div className="hidden lg:block w-[40vw] fixed right-14 top-14 h-screen flex items-center justify-center px-4 py-8">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
