import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <StarsCanvas />

        <About />
        </div>
        <div className='relative z-0'>
          <StarsCanvas />
        <Tech />
        </div>
        <div className='relative z-0'>
          <StarsCanvas />
        <Experience />
        </div>
      <div className='relative z-0'>
        <StarsCanvas />
        <Works />
        </div>
     
        <div className='relative z-0'>
          <StarsCanvas />

          <Feedbacks />
  
        {/* <Feedbacks /> */}
      </div>

        {/* <Works />
        <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
