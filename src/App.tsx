import React from 'react';
import { Shield, Zap, Phone, Mail, Users, Target, Smartphone, Brain, Wifi, UserCheck, BookOpen, ChevronRight, MessageCircle } from 'lucide-react';

function App() {
  const courses = [
    {
      title: "Network Pentest",
      description: "Master network security testing, vulnerability assessment, and penetration testing techniques for enterprise networks.",
      icon: <Wifi className="h-8 w-8" />,
      duration: "6 weeks",
      level: "Intermediate"
    },
    {
      title: "Web Application Pentest",
      description: "Learn to identify and exploit web application vulnerabilities using industry-standard tools and methodologies.",
      icon: <Target className="h-8 w-8" />,
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      title: "Mobile Pentest",
      description: "Comprehensive mobile application security testing for iOS and Android platforms.",
      icon: <Smartphone className="h-8 w-8" />,
      duration: "5 weeks",
      level: "Advanced"
    },
    {
      title: "AI Security",
      description: "Explore AI/ML security threats, adversarial attacks, and defense mechanisms in modern AI systems.",
      icon: <Brain className="h-8 w-8" />,
      duration: "4 weeks",
      level: "Expert"
    },
    {
      title: "IoT Security",
      description: "Secure Internet of Things devices and networks with hands-on IoT penetration testing.",
      icon: <Wifi className="h-8 w-8" />,
      duration: "4 weeks",
      level: "Intermediate"
    },
    {
      title: "Ethical Hacking",
      description: "Comprehensive ethical hacking course covering all major security domains and certification prep.",
      icon: <UserCheck className="h-8 w-8" />,
      duration: "12 weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "Introduction to Hacking",
      description: "Perfect starting point for beginners to understand cybersecurity fundamentals and basic hacking concepts.",
      icon: <BookOpen className="h-8 w-8" />,
      duration: "3 weeks",
      level: "Beginner"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "918985707779";
    const message = "Hello RedSec";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-red-600/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
    Red
  </span>
  <Zap className="h-7 w-7 text-red-500 mx-0.5" />
  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
    ec
  </span>
</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors">Home</a>
              <a href="#courses" className="text-gray-300 hover:text-red-400 transition-colors">Courses</a>
              <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23dc2626%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-cyan-200 bg-clip-text text-transparent">
              Master Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional ethical hacking and penetration testing training programs designed for cybersecurity professionals
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <div className="flex items-center space-x-3 bg-red-600/10 border border-red-500/20 rounded-lg px-6 py-3">
              <Users className="h-6 w-6 text-red-400" />
              <span className="text-gray-200">Expert-Led Training</span>
            </div>
            <div className="flex items-center space-x-3 bg-cyan-600/10 border border-cyan-500/20 rounded-lg px-6 py-3">
              <Target className="h-6 w-6 text-cyan-400" />
              <span className="text-gray-200">Hands-On Practice</span>
            </div>
            <div className="flex items-center space-x-3 bg-green-600/10 border border-green-500/20 rounded-lg px-6 py-3">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-gray-200">Industry Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Training Syllabus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity training programs covering all aspects of ethical hacking and penetration testing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/80 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-500/20 to-cyan-500/20 rounded-lg group-hover:from-red-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <div className="text-red-400 group-hover:text-red-300 transition-colors">
                      {course.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-200 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your cybersecurity journey? Contact us for more information about our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-400/20 rounded-full mx-auto mb-6 group-hover:from-red-500/30 group-hover:to-red-400/30 transition-all duration-300">
                <Mail className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <a 
                href="mailto:info@redsec.com" 
                className="text-gray-300 hover:text-red-400 transition-colors text-lg"
              >
                info@redsec.com
              </a>
            </div>

            <div 
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-full mx-auto mb-6 group-hover:from-green-500/30 group-hover:to-green-400/30 transition-all duration-300">
                <MessageCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <div className="text-gray-300 hover:text-green-400 transition-colors text-lg">
                +91 8985707779
              </div>
              <p className="text-sm text-gray-400 mt-2">Click to chat on WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                RedSec
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 RedSec. Professional Cybersecurity Training.</p>
              <p className="text-sm mt-1">Empowering the next generation of ethical hackers.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
