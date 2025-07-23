import React from "react";

const team = [
  {
    name: "John Smith",
    role: "Founder & Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    bio: "With over 25 years in UK construction, John founded USABUILDERS in 2005 with a vision to deliver quality British craftsmanship with exceptional service.",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Sarah oversees all projects across Leeds, ensuring timelines are met and clients are completely satisfied with our work.",
  },
  {
    name: "Michael Brown",
    role: "Lead Builder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Michael leads our skilled construction team, bringing 15 years of experience in UK construction and a keen eye for detail to every project we undertake.",
  },
  {
    name: "Emma Wilson",
    role: "Interior Designer",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Emma helps clients transform their spaces with creative interior design solutions that align with modern British aesthetics and complement our building work perfectly.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "750+", label: "Projects Completed" },
  { value: "42", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    name: "Quality Craftsmanship",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "We never compromise on the quality of materials or workmanship, ensuring every project meets our exacting standards."
  },
  {
    name: "Customer Satisfaction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    description: "Your satisfaction is our top priority. We work closely with clients to ensure their vision becomes reality."
  },
  {
    name: "Reliability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "We deliver projects on time and within budget. When we make a promise to our clients, we keep it."
  },
  {
    name: "Sustainability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    description: "We're committed to environmentally responsible building practices and sustainable solutions."
  },
];

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
          About {import.meta.env.VITE_COMPANY_NAME}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Building Leeds Since 2005</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {import.meta.env.VITE_COMPANY_NAME} is a premier construction company serving Leeds and surrounding areas. We combine traditional British craftsmanship with modern building techniques to deliver exceptional results for every client.
        </p>
      </div>
      
      {/* Company Story */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661500886480-6c97ae209ad3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="UK Construction Team" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-blue-900 font-bold py-4 px-6 rounded-lg shadow-lg hidden md:block">
              Since 2005
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h3>
          <p className="text-gray-700 mb-6">
            Founded in 2005 by John Smith, Leeds Builders began as a small renovation company with a big vision. Today, we've grown into one of Leeds' most respected building firms, known for our quality workmanship and exceptional customer service.
          </p>
          <p className="text-gray-700 mb-6">
            We specialize in home extensions, loft conversions, kitchen and bathroom renovations, and commercial construction projects. Our experienced team takes pride in delivering projects that exceed our clients' expectations, on time and within budget.
          </p>
          <p className="text-gray-700 mb-8">
            As a family-run business, we believe in forging strong relationships with our clients. Many of our projects come from repeat business and referrals – a testament to the trust our clients place in us.
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="John Smith Signature" 
              className="w-16 h-16 rounded-full border-4 border-blue-100"
            />
            <div>
              <p className="text-lg font-bold text-blue-900">John Smith</p>
              <p className="text-gray-600">Founder & Director</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-blue-900 rounded-2xl shadow-2xl p-8 md:p-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center ${
                index < stats.length - 1 ? 'md:border-r border-blue-700' : ''
              }`}
            >
              <span className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">{stat.value}</span>
              <span className="text-white text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our success is built on the expertise and dedication of our talented team members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl text-blue-900 mb-1">{member.name}</h4>
                <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="mt-6 flex space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.522-4.478-10-10-10z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Values Section */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and form the foundation of our business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 text-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">{value.name}</h4>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 text-center">
        <p className="text-xl text-gray-600 mb-8">
          Ready to start your building project with a team you can trust?
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  </section>
);

export default About;
