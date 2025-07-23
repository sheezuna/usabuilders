import React from "react";

const Home = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center pt-24"
  >
    {/* Hero Background Slider Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1800&q=80)',
          animation: 'zoom 20s infinite alternate'
        }}
      ></div>
    </div>

    <div className="container mx-auto px-4 z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white animate-fade-in">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mb-6">
          Leeds' Premier Building Specialists
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bringing Your <span className="text-yellow-400">Vision</span> To Life With Quality British Craftsmanship
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
          For over 20 years, {import.meta.env.VITE_COMPANY_NAME} has been Leeds' trusted builder for home extensions, loft conversions, renovations, and new builds. Quality British workmanship and customer satisfaction guaranteed.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-lg transform transition hover:scale-105 flex items-center">
            Get Free Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#gallery" className="bg-transparent border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-8 py-4 rounded-lg transition">
            View Our Work
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex items-center space-x-8">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-sm text-blue-100">Fully Insured</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-sm text-blue-100">20+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Content - Project Showcase */}
      <div className="w-full lg:w-1/2 hidden md:block">
        <div className="relative">
          {/* Large image - UK House Extension */}
          <img 
            src="https://plus.unsplash.com/premium_photo-1663133721947-c0f8201fbc75?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="UK home extension project in Leeds" 
            className="w-full h-96 object-cover rounded-xl shadow-2xl animate-fade-in-right"
          />
          
          {/* Floating card elements */}
          <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80" 
              alt="UK construction worker in Leeds" 
              className="w-40 h-40 object-cover rounded-lg"
            />
          </div>
          
          <div className="absolute top-20 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float-delayed">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="UK construction site with scaffolding" 
              className="w-48 h-32 object-cover rounded-lg"
            />
          </div>
          
          {/* Rating badge */}
          <div className="absolute -top-8 -left-8 bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Rating
          </div>
        </div>
      </div>
    </div>
    
    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path fill="#f9fafb" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    
    <style jsx>{`
      @keyframes zoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }
      .animate-fade-in {
        animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
      }
      .animate-fade-in-right {
        animation: fadeInRight 1.2s cubic-bezier(.4,0,.2,1) both;
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-float-delayed {
        animation: float 5s ease-in-out 1s infinite;
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInRight {
        0% { opacity: 0; transform: translateX(40px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
    `}</style>
  </section>
);

export default Home;
