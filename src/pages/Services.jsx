import React, { useState } from "react";

const services = [
  {
    name: "Home Extensions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    img: "https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Expand your living space with seamless home extensions tailored to your needs. Our expert team handles everything from design to final touches.",
    features: ["Custom Design", "Planning Permission Support", "Structural Engineering", "Full Project Management"],
  },
  {
    name: "Loft Conversions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    img: "https://images.unsplash.com/photo-1543423924-b9f161af87e4?auto=format&fit=crop&w=800&q=80",
    desc: "Transform unused loft space into beautiful, functional rooms that add value to your property. From simple storage to luxury master suites.",
    features: ["Dormer Conversions", "Hip-to-Gable", "Mansard Conversions", "Skylight Installation"],
  },
  {
    name: "Kitchen & Bathroom",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    img: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=800&q=80",
    desc: "Upgrade your kitchen and bathroom with modern designs and quality finishes. From concept to completion, we'll create your perfect space.",
    features: ["Custom Cabinetry", "Luxury Fixtures", "Tiling & Flooring", "Smart Home Integration"],
  },
  {
    name: "Commercial Construction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    desc: "Professional construction services for commercial properties in Leeds. We deliver on time and within budget for businesses of all sizes.",
    features: ["Office Fit-Outs", "Retail Spaces", "Restaurant Renovations", "Industrial Buildings"],
  },
  {
    name: "General Maintenance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    desc: "Reliable maintenance services to keep your property in top condition. From minor repairs to regular scheduled maintenance.",
    features: ["Property Inspections", "Emergency Repairs", "Painting & Decorating", "Garden & Exterior Work"],
  },
  {
    name: "New Builds",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    desc: "Complete design and build services for your dream home. We handle the entire process from foundations to finishing touches.",
    features: ["Architectural Design", "Foundation Work", "Eco-friendly Options", "Interior Design"],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Construction & Renovation Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From small renovations to complete new builds, we provide comprehensive building services throughout Leeds and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 ${
                activeService === index ? 'ring-4 ring-blue-500 scale-105' : 'hover:shadow-2xl hover:scale-105'
              }`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="bg-yellow-500 p-2 rounded-lg mr-3 text-blue-900">{service.icon}</span>
                    {service.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-2">Key Features</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial section */}
        <div className="mt-24 bg-blue-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-white italic mb-6">
                "Leeds Builders transformed our outdated kitchen into a stunning modern space that's now the heart of our home. Their team was professional, tidy, and completed everything on schedule and within budget."
              </blockquote>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Client" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="text-white font-bold">Sarah Thompson</p>
                  <p className="text-blue-200">Leeds, UK</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80" 
                alt="Completed Kitchen Project" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
