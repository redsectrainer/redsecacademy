import React from 'react';
import {
  Shield, Zap, Mail, Users, Target, Smartphone, Brain, Wifi, UserCheck, BookOpen, MessageCircle
} from 'lucide-react';

const Pill = ({ className = "", children }) => (
  <span
    className={`inline-flex items-center px-3 h-8 rounded-full text-xs font-medium whitespace-nowrap w-auto ${className}`}
  >
    {children}
  </span>
);

function App() {
  const courses = [
    {
      title: "Hack the Basics — Cybersecurity for Beginners",
      description:
        "Start from zero and learn the core ideas, tools, and mindset of ethical hacking. Set up your lab, grasp networking and web basics, and practice on a deliberately weak target so you can keep learning independently with confidence.",
      icon: <BookOpen className="h-8 w-8" />,
      duration: "~24 hours (Foundations + Labs)",
      level: "Beginner",
      cost: "₹5,000"
    },
    {
      title: "Ethical Hacking — Complete Guide + Certification Prep",
      description:
        "End-to-end training across major security domains: network, web, cloud, AI/ML, and IoT. Master methodology, use industry tools, and practice real-world attack/defense scenarios. Includes guided labs and structured prep for leading certs.",
      icon: <UserCheck className="h-8 w-8" />,
      duration: "~48 hours (Theory + Labs)",
      level: "Beginner to Advanced",
      cost: "₹8,000"
    },
    {
      title: "Network Penetration Testing",
      description:
        "Plan and execute full-stack network pentests: reconnaissance, scanning, enumeration, exploitation, and post-exploitation. Work with nmap, Metasploit, crack suites, and AD attack paths—mapped to real enterprise environments.",
      icon: <Wifi className="h-8 w-8" />,
      duration: "~48 hours (Labs)",
      level: "Intermediate",
      cost: "₹7,500"
    },
    {
      title: "Web Application Penetration Testing",
      description:
        "Identify and exploit web app flaws with a methodical approach: auth, access control, injection, XSS, SSRF, deserialization, and more. Use Burp Suite effectively, build PoCs, and write clear, actionable reports for dev teams.",
      icon: <Target className="h-8 w-8" />,
      duration: "~48 hours (Burp-Focused Labs)",
      level: "Intermediate",
      cost: "₹7,500"
    },
    {
      title: "Mobile Application Security (iOS & Android)",
      description:
        "Set up mobile test stacks, intercept traffic, reverse apps, and assess storage, auth, and API flows. Cover Android/iOS tooling, dynamic analysis, and common vuln classes aligned to MAS/OWASP MSTG.",
      icon: <Smartphone className="h-8 w-8" />,
      duration: "~24 hours (Device/Emulator Labs)",
      level: "Advanced",
      cost: "₹6,500"
    },
    {
      title: "AI/ML Security",
      description:
        "Explore threats to AI systems: prompt injection, model exfiltration, data poisoning, adversarial examples, and guardrail bypass. Learn risk assessment, secure deployment patterns, and red-teaming techniques for LLMs.",
      icon: <Brain className="h-8 w-8" />,
      duration: "~24 hours (Case Studies + Labs)",
      level: "Expert",
      cost: "₹6,500"
    },
    {
      title: "IoT Security & Hardware Hacking",
      description:
        "Break down IoT architectures, enumerate firmware, and assess device, network, and cloud edges. Practice UART/JTAG basics, firmware extraction, and local/network attack paths—then recommend practical mitigations.",
      icon: <Wifi className="h-8 w-8" />,
      duration: "~24 hours (Bench + Network Labs)",
      level: "Intermediate",
      cost: "₹6,000"
    }
  ];

  // One handler for both: per-course "Enroll" and general WhatsApp contact
  const handleWhatsAppClick = (maybeTitle) => {
    const phoneNumber = "918985707779";
    const courseTitle = typeof maybeTitle === "string" ? maybeTitle : undefined;

    const message = courseTitle
      ? `Hi RedSec, I'm interested in the "${courseTitle}" course.`
      : "Hello RedSec";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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
              <Zap className="h-7 w-7 text-red-500" />
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

      {/* Hero */}
      <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23dc2626%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-cyan-200 bg-clip-text text-transparent">
              Master Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From beginner to expert — master cybersecurity through hands-on ethical hacking, real-world labs, and guided preparation for industry-recognized certifications.
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
              <span className="text-gray-200">Real-World Skills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/80 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col h-full"
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

                <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>

                {/* Footer */}
                <div className="mt-auto">
                  <div className="flex items-start justify-between gap-4">
                    {/* Auto-width pill stack */}
                    <div className="flex flex-col gap-3 items-start">
                      <Pill className="bg-cyan-500/20 text-cyan-300">
                        {course.duration}
                      </Pill>
                      <Pill className="bg-red-500/20 text-red-300">
                        {course.level}
                      </Pill>
                      <Pill className="bg-emerald-500/20 text-emerald-300 font-semibold">
                        {course.cost}
                      </Pill>
                    </div>

                    <button
                      onClick={() => handleWhatsAppClick(course.title)}
                      className="self-start px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold"
                      aria-label={`Enroll in ${course.title}`}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
                href="mailto:trainer@redsec.com"
                className="text-gray-300 hover:text-red-400 transition-colors text-lg"
              >
                trainer@redsec.com
              </a>
            </div>

            <div
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleWhatsAppClick()}
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
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Red
              </span>
              <Zap className="h-7 w-7 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                ec
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
