import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Home Extension",
    category: "Extensions",
    year: "2024",
    location: "Headingley, Leeds",
    description: "A stunning rear extension adding valuable living space to a family home.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=800&q=80",
        alt: "Modern UK Home Extension Front View"
      },
      {
        src: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=800&q=80",
        alt: "Modern Home Extension Interior"
      },
      {
        src: "https://images.unsplash.com/photo-1556912172-45b7a8ba0138?auto=format&fit=crop&w=800&q=80",
        alt: "British Modern Home Extension Kitchen"
      }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Luxury Loft Conversion",
    category: "Loft Conversions",
    year: "2024",
    location: "Roundhay, Leeds",
    description: "Converting unused attic space into a master bedroom with ensuite.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=800&q=80",
        alt: "UK-Style Luxury Loft Conversion Interior"
      },
      {
        src: "https://images.unsplash.com/photo-1593604572626-8c79e4bc6dc8?auto=format&fit=crop&w=800&q=80",
        alt: "UK Loft Conversion with Modern Bathroom"
      }
    ]
  },
  {
    id: 3,
    title: "Contemporary Kitchen Renovation",
    category: "Kitchen & Bathroom",
    year: "2023",
    location: "Chapel Allerton, Leeds",
    description: "Complete kitchen overhaul with custom cabinetry and island.",
    images: [
      {
        src: "https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Contemporary British Kitchen Renovation"
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        alt: "Modern UK Home Kitchen Island"
      }
    ],
    featured: true
  },
  {
    id: 4,
    title: "Office Building Renovation",
    category: "Commercial",
    year: "2023",
    location: "City Centre, Leeds",
    description: "Transforming an outdated office space into a modern work environment.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=800&q=80",
        alt: "UK Commercial Office Building Renovation"
      },
      {
        src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
        alt: "Modern British Office Interior"
      }
    ]
  },
  {
    id: 5,
    title: "Luxury Bathroom Remodel",
    category: "Kitchen & Bathroom",
    year: "2023",
    location: "Horsforth, Leeds",
    description: "High-end bathroom renovation with walk-in shower and freestanding tub.",
    images: [
      {
        src: "https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "UK Luxury Bathroom Remodel"
      }
    ]
  },
  {
    id: 6,
    title: "New Build Family Home",
    category: "New Builds",
    year: "2022",
    location: "Adel, Leeds",
    description: "Custom-designed 4-bedroom family home built from the ground up.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
        alt: "UK New Build Family Home"
      },
      {
        src: "https://images.unsplash.com/photo-1542928658-22251e208ac1?auto=format&fit=crop&w=800&q=80",
        alt: "British New Build Family Home Living Room"
      }
    ],
    featured: true
  },
  {
    id: 7,
    title: "Garden Room Addition",
    category: "Extensions",
    year: "2022",
    location: "Moortown, Leeds",
    description: "A beautiful garden room extension providing additional living space.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
        alt: "UK Garden Room Addition"
      }
    ]
  },
  {
    id: 8,
    title: "Restaurant Fit-Out",
    category: "Commercial",
    year: "2021",
    location: "Briggate, Leeds",
    description: "Complete interior fit-out for a new restaurant in Leeds city centre.",
    images: [
      {
        src: "https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "UK Restaurant Fit-Out"
      }
    ]
  }
];

const categories = ["All", "Extensions", "Loft Conversions", "Kitchen & Bathroom", "Commercial", "New Builds"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const featuredProjects = projects.filter(project => project.featured);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };
  
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of completed projects showcasing our quality craftsmanship and attention to detail.
          </p>
        </div>
        
        {/* Featured Projects Slider */}
        <div className="mb-20 relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[600px]">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <img 
                  src={project.images[0].src} 
                  alt={project.images[0].alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
                  <div className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 rounded-full font-bold text-sm mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl">{project.description}</p>
                  <button 
                    onClick={() => openModal(project)}
                    className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition flex items-center"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center mb-10 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.images[0].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="mr-4">{project.year}</span>
                    <span>{project.location}</span>
                  </div>
                  <span className="text-blue-700 font-medium flex items-center">
                    View 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
            <div className="relative bg-white rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Gallery */}
              <div className="relative h-[50vh] bg-gray-900">
                <img 
                  src={selectedProject.images[currentImageIndex].src} 
                  alt={selectedProject.images[currentImageIndex].alt} 
                  className="w-full h-full object-contain" 
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>
              
              {/* Project Details */}
              <div className="p-8 overflow-y-auto">
                <div className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 rounded-full font-bold text-sm mb-3">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{selectedProject.title}</h3>
                <div className="flex items-center mb-6 text-gray-600">
                  <div className="flex items-center mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {selectedProject.year}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1117.657 16.657z" />
                    </svg>
                    {selectedProject.location}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-8">{selectedProject.description}</p>
                
                {/* Thumbnail Gallery */}
                {selectedProject.images.length > 1 && (
                  <div className="flex space-x-3 overflow-x-auto pb-4">
                    {selectedProject.images.map((image, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`min-w-[100px] h-16 rounded-lg overflow-hidden ${
                          idx === currentImageIndex ? 'ring-2 ring-blue-600' : ''
                        }`}
                      >
                        <img 
                          src={image.src} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Looking to start your own building project? Contact us today for a free consultation.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
