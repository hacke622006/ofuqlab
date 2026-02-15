import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Instagram, Facebook, Mail, Phone, MapPin, ChevronDown, Menu as MenuIcon } from 'lucide-react';
import ofuqlabLogo from "./assets/logo.png";
import ahmedPhoto from "./assets/llogo.png";
import certImage from "./assets/cert1.jpg";


const colors = {
  gold: '#F5C842',
  amber: '#E8931E',
  brown: '#C4722A',
  darkBrown: '#8B5E3C',
  cream: '#FAF7F0',
  lightSand: '#F2EBD9',
  textDark: '#1C1208',
  textMuted: '#6B4E2A',
};


const fonts = {
  heading: "'Cormorant Garamond', serif",
  body: "'Lato', sans-serif",
};

const teamMembers = [
  {
    name: "Ahmed Yaichi",
    role: "Founder & Lead Videographer",
    photo: ahmedPhoto, 
    specialty: "Drone Operator & Creative Director",
    bio: "Visionary filmmaker with a passion for aerial cinematography and storytelling. Ahmed brings a unique perspective to every project, turning ordinary scenes into cinematic experiences.",
    skills: ["Drone Piloting", "Creative Direction", "Post-Production"]
  },


];

const projects = [
  {
    id: 1,
    title: "Real estate video crafted for a client in Algiers",
    category: "Real Estate Production",
    description: "I transform listings into engaging visual stories.Cinematic editing that highlights key features.Optimized pacing for TikTok and Instagram.Turning views into real buyer inquiries.",
    tags: ["Aerial", "4K Cinema", "Real Estate"],
    gradient: "linear-gradient(135deg, #E8931E, #C4722A, #8B5E3C)",
    videoSrc: "/videos/v1.mp4",
    isVertical: false 
  },
  {
    id: 2,
    title: "Real estate marketing video",
    category: "Commercial Video",
    description: "I present properties with clarity, style, and strategy.Focused storytelling that builds trust and interest.Social media–ready with attention-grabbing flow.Content designed to attract buyers and investors.",
    tags: ["Branding", "Motion", "Color Grade"],
    gradient: "linear-gradient(135deg, #F5C842, #E8931E, #C4722A)",
    videoSrc: "/videos/v2.mp4",
    isVertical: true
  },
  {
    id: 3,
    title: "Professional real estate showcase",
    category: "Architecture Documentary",
    description: "From static content to impactful property experiences.Clean, modern editing that emphasizes value and space.Vertical format ready for social platforms.Position your property as a premium opportunity.",
    tags: ["Documentary", "Drone", "Architecture"],
    gradient: "linear-gradient(135deg, #C4722A, #8B5E3C, #5C3D2E)",
    videoSrc: "/videos/vi3.mp4",
    isVertical: true
  }
];

const certificate = {
  // title: "Certificate Title Here",
  issuedBy: "عالم كم",
  issuedTo: "ofuqlab",
  year: "2026",
  imageSrc: certImage
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.15 }
    );


    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isLoading]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const globalStyles = {
    fontFamily: fonts.body,
    color: colors.textDark,
    backgroundColor: colors.cream,
    margin: 0,
    padding: 0,
    minHeight: '100vh',
  };


  const loadingScreenStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.cream,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    animation: 'fadeOut 0.5s ease-out 1s forwards',
    pointerEvents: isLoading ? 'all' : 'none',
    opacity: isLoading ? 1 : 0,
  };


  const scrollTopButtonStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: colors.amber,
    border: 'none',
    color: '#FFFFFF',
    fontSize: '1.5rem',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: `0 4px 20px ${colors.amber}40`,
    display: showScrollTop ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    animation: showScrollTop ? 'fadeIn 0.3s ease' : 'none',
  };

  return (
    <div style={globalStyles}>
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }

        /* Scroll reveal animation */
        section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        section.reveal {
          opacity: 1;
          transform: translateY(0);
        }

        /* Loading animation */
        @keyframes fadeOut {
          to {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.1);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          section {
            padding-left: 5% !important;
            padding-right: 5% !important;
          }
        }
      `}</style>

      {/* Loading Screen */}
      {isLoading && (
        <div style={loadingScreenStyle}>
          <img 
            src={ofuqlabLogo}
            alt="ofuqlab logo"
            width="300" 
            height="300" 
            style={{ animation: 'logoFadeIn 1.5s ease-in-out', objectFit: 'contain' }}
          />
        </div>
      )}

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Team />
      <Projects />
      <Certificates />
      <Footer />

      {/* Scroll to Top Button */}
      <button
        style={scrollTopButtonStyle}
        onClick={scrollToTop}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.backgroundColor = colors.gold;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = colors.amber;
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}


// ==================== NAVBAR ====================
function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      if (window.innerWidth >= 769) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close menu first if open
      setIsMobileMenuOpen(false);
      
      // Small timeout to allow menu to close before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      }, 100);
    }
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? 'rgba(250, 247, 240, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    borderBottom: isScrolled ? `2px solid ${colors.amber}` : 'none',
    zIndex: 1000,
    padding: '1.25rem 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    overflow: 'visible', // Critical for dropdown visibility
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  };

  const logoTextStyle = {
    fontFamily: fonts.heading,
    fontSize: '1.5rem',
    fontWeight: 700,
    color: colors.textDark,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
    alignItems: 'center',
  };

  const linkStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 400,
    color: colors.textMuted,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '0.5rem',
    background: 'none',
    border: 'none',
    zIndex: 1001,
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '2px',
    backgroundColor: colors.textDark,
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '70px', // Precise height of navbar
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'rgba(250, 247, 240, 0.98)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(28, 18, 8, 0.12)',
    borderBottom: `2px solid ${colors.amber}`,
    zIndex: 999,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    // Animation properties
    maxHeight: isMobileMenuOpen ? '400px' : '0px',
    opacity: isMobileMenuOpen ? 1 : 0,
    transition: 'max-height 0.35s ease, opacity 0.25s ease',
    padding: 0, // Reset padding, move to items
  };

  const mobileLinkItemStyle = {
    display: 'block',
    padding: '16px 24px',
    fontSize: '1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: colors.textDark,
    borderBottom: `1px solid ${colors.amber}26`, // 15% opacity hex
    cursor: 'pointer',
    fontFamily: fonts.body,
    transition: 'background-color 0.2s ease',
  };

  const mobileNavItems = ['about', 'team', 'projects', 'certificates'];

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <div style={logoContainerStyle} onClick={() => scrollToSection('hero')}>
          <img src={ofuqlabLogo} alt="ofuqlab logo" width="65" height="65" style={{ objectFit: 'contain' }} />
          <span style={logoTextStyle}>ofuqlab</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={navLinksStyle}>
            {mobileNavItems.map((item) => (
              <li key={item}>
                <a
                  style={linkStyle}
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={(e) => (e.target.style.color = colors.amber)}
                  onMouseLeave={(e) => (e.target.style.color = colors.textMuted)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            style={{ ...hamburgerStyle, display: 'flex' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div style={{
              ...hamburgerLineStyle,
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <div style={{
              ...hamburgerLineStyle,
              opacity: isMobileMenuOpen ? 0 : 1,
            }} />
            <div style={{
              ...hamburgerLineStyle,
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        )}

        {/* Mobile Menu Dropdown - Rendered inside Nav but positioned absolutely */}
        <div style={mobileMenuStyle}>
          {mobileNavItems.map((item) => (
            <div
              key={item}
              style={mobileLinkItemStyle}
              onClick={() => scrollToSection(item)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(232, 147, 30, 0.05)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              {item}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 998,
            backgroundColor: 'transparent',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

// ==================== HERO ====================
function Hero() {
  const heroStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.cream,
    padding: '10rem 5% 6rem',
    position: 'relative',
    overflow: 'hidden',
  };


  const sunCircleStyle = {
    position: 'absolute',
    top: '-15%',
    right: '-10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.gold}20 0%, transparent 70%)`,
    filter: 'blur(80px)',
    opacity: 0.3,
    pointerEvents: 'none',
    zIndex: 0,
  };


  const contentContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    padding: '0 24px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 400,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '2rem',
    animation: 'fadeInUp 0.8s ease-out',
  };

  const headingContainerStyle = {
    marginBottom: '2rem',
  };

  const headingLineStyle = {
    fontFamily: fonts.heading,
    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
    fontWeight: 700,
    color: colors.textDark,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    margin: 0,
  };

  const storyWordStyle = {
    fontStyle: 'italic',
    position: 'relative',
    display: 'inline-block',
  };

  const subheadingStyle = {
    fontFamily: fonts.body,
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    fontWeight: 300,
    color: colors.textMuted,
    maxWidth: '650px',
    margin: '0 auto 3rem',
    lineHeight: 1.7,
    animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
  };

  const ctaContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
  };

  const primaryButtonStyle = {
    fontFamily: fonts.body,
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#FFFFFF',
    backgroundColor: colors.amber,
    border: 'none',
    padding: '1.1rem 2.5rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 20px ${colors.amber}30`,
  };

  const outlineButtonStyle = {
    fontFamily: fonts.body,
    fontSize: '0.95rem',
    fontWeight: 700,
    color: colors.brown,
    backgroundColor: 'transparent',
    border: `2px solid ${colors.brown}`,
    padding: '1.1rem 2.5rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: 'none',
  };

  const dividerContainerStyle = {
    position: 'absolute',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    width: '80%',
    maxWidth: '600px',
    zIndex: 1,
  };

  const dividerLineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: colors.lightSand,
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="hero" style={heroStyle}>
        {/* Decorative golden sun */}
        <div style={sunCircleStyle} />

        {/* Content */}
        <div style={contentContainerStyle}>
          {/* Label */}
          <div style={labelStyle}>Algeria, Africa · Video Production Studio</div>

          {/* Main Heading */}
          <div style={headingContainerStyle}>
            <h1 style={{ ...headingLineStyle, animation: 'fadeInUp 0.8s ease-out 0.1s backwards' }}>
              We Frame
            </h1>
            <h1 style={{ ...headingLineStyle, animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
              Your{' '}
              <span style={storyWordStyle}>
                Story.
                {/* Amber brush stroke underline SVG */}
                <svg
                  viewBox="0 0 250 20"
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '0',
                    width: '100%',
                    height: 'auto',
                    overflow: 'visible',
                  }}
                >
                  <path
                    d="M 5 15 Q 60 8, 125 12 T 245 10"
                    stroke={colors.amber}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p style={subheadingStyle}>
            ofuqlab crafts cinematic video production and visual design — telling
            stories that move, inspire, and endure.
          </p>

          {/* CTA Buttons */}
          <div style={ctaContainerStyle}>
            <button
              style={primaryButtonStyle}
              onClick={scrollToProjects}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.gold;
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = `0 8px 30px ${colors.amber}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.amber;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 4px 20px ${colors.amber}30`;
              }}
            >
              View Our Work
            </button>
            <button
              style={outlineButtonStyle}
              onClick={scrollToTeam}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.brown;
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.brown;
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Meet The Team
            </button>
          </div>
        </div>

        {/* Bottom Divider with Logo */}
        <div style={dividerContainerStyle}>
          <div style={dividerLineStyle} />
          {/* Small logo */}
          <img src={ofuqlabLogo} alt="ofuqlab logo" width="50" height="50" style={{ objectFit: 'contain', opacity: 0.8 }} />
          <div style={dividerLineStyle} />
        </div>
      </section>

      {/* CSS Keyframes for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}


// ==================== ABOUT ====================
function About() {
  const sectionStyle = {
    padding: '8rem 5%',
    backgroundColor: colors.cream,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colors.amber,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontFamily: fonts.heading,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '4rem',
    lineHeight: 1.3,
  };

  const twoColumnStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  };

  const paragraphStyle = {
    fontFamily: fonts.body,
    fontSize: '1.1rem',
    fontWeight: 300,
    color: colors.textMuted,
    lineHeight: 1.8,
    marginBottom: '2.5rem',
  };

  const statsContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const statPillStyle = {
    fontFamily: fonts.body,
    fontSize: '0.85rem',
    fontWeight: 600,
    color: colors.brown,
    backgroundColor: colors.lightSand,
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: `1px solid ${colors.brown}40`,
  };

  const decorativeCardStyle = {
    backgroundColor: colors.lightSand,
    border: `2px solid ${colors.amber}`,
    borderRadius: '16px',
    padding: '4rem 3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '400px',
  };


  const grainOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    opacity: 0.15,
    pointerEvents: 'none',
  };

  const logoContainerStyle = {
    position: 'relative',
    zIndex: 1,
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Label */}
        <div style={labelStyle}>WHO WE ARE</div>

        {/* Heading */}
        <h2 style={titleStyle}>A Creative Studio Born from the Algerian Desert</h2>

        {/* Two-Column Layout */}
        <div style={twoColumnStyle}>
          {/* LEFT: Text + Stats */}
          <div>
            <p style={paragraphStyle}>
              ofuqlab (أفق لاب) is an independent video production and design studio 
              founded in Algeria, Africa. We specialize in cinematic storytelling — from 
              real estate tours and brand films to creative visual design — blending the 
              rich visual culture of North Africa with contemporary production techniques.
            </p>

            {/* Stat Pills */}
            <div style={statsContainerStyle}>
              {/* <div style={statPillStyle}>2 Creatives</div> */}
              <div style={statPillStyle}>Algeria, Africa</div>
              <div style={statPillStyle}>Video & Design</div>
            </div>
          </div>

          {/* RIGHT: Decorative Card with Logo */}
          <div style={decorativeCardStyle}>
            {/* Grain texture overlay */}
            <div style={grainOverlayStyle} />

            {/* Large Logo */}
            <div style={logoContainerStyle}>
              <img src={ofuqlabLogo} alt="ofuqlab logo" width="300" height="300" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TEAM ====================
function Team() {
  const sectionStyle = {
    padding: '8rem 5%',
    backgroundColor: colors.lightSand,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colors.amber,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontFamily: fonts.heading,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '4rem',
    lineHeight: 1.3,
  };

  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '3rem 2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    borderTop: `4px solid ${colors.amber}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const photoStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    marginBottom: '1.5rem',
    border: `3px solid ${colors.lightSand}`,
    
  };

  const nameStyle = {
    fontFamily: fonts.heading,
    fontSize: '1.75rem',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '0.5rem',
  };

  const roleStyle = {
    fontFamily: fonts.body,
    fontSize: '1rem',
    fontWeight: 400,
    color: colors.textMuted,
    marginBottom: '1rem',
  };

  const specialtyTagStyle = {
    display: 'inline-block',
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: colors.amber,
    backgroundColor: `${colors.amber}15`,
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    marginBottom: '1.5rem',
  };

  const bioStyle = {
    fontFamily: fonts.body,
    fontSize: '0.95rem',
    fontWeight: 300,
    color: colors.textMuted,
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const skillChipStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 500,
    color: colors.brown,
    backgroundColor: colors.lightSand,
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: `1px solid ${colors.brown}30`,
  };



  return (
    <section id="team" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={labelStyle}>THE TEAM</div>

        <h2 style={titleStyle}>One Creative, One Vision</h2>

        <div style={cardsContainerStyle}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <img 
                src={member.photo} 
                alt={member.name} 
                style={photoStyle}
              />

              <h3 style={nameStyle}>{member.name}</h3>

              <p style={roleStyle}>{member.role}</p>

              <div style={specialtyTagStyle}>{member.specialty}</div>

              <p style={bioStyle}>{member.bio}</p>

              <div style={skillsContainerStyle}>
                {member.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={skillChipStyle}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PROJECTS ====================
function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const sectionStyle = {
    padding: '8rem 5%',
    backgroundColor: colors.cream,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colors.amber,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: fonts.heading,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '4rem',
    textAlign: 'center',
    lineHeight: 1.3,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start', 
  };

  const cardStyleBase = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '100%', // Uniform height structure
    display: 'flex',
    flexDirection: 'column',
  };

  const thumbnailContainerStyle = {
    width: '100%',
    height: '220px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px 12px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const thumbnailVideoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  const playButtonValidationStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '1rem',
    fontFamily: fonts.body,
    fontSize: '0.65rem',
    fontWeight: 700,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    zIndex: 2,
  };

  const categoryBadgeStyle = {
    ...badgeStyle,
    left: '1rem',
  };

  const yearBadgeStyle = {
    ...badgeStyle,
    right: '1rem',
  };

  const infoAreaStyle = {
    padding: '2rem 1.75rem',
    backgroundColor: '#FFFFFF',
    flex: 1, // Fill remaining space
    display: 'flex',
    flexDirection: 'column',
  };

  const projectTitleStyle = {
    fontFamily: fonts.heading,
    fontSize: '1.5rem',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '0.75rem',
    lineHeight: 1.3,
  };

  const descriptionStyle = {
    fontFamily: fonts.body,
    fontSize: '0.9rem',
    fontWeight: 300,
    color: colors.textMuted,
    lineHeight: 1.7,
    marginBottom: '1.25rem',
    flex: 1,
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: 'auto',
  };

  const tagStyle = {
    fontFamily: fonts.body,
    fontSize: '0.7rem',
    fontWeight: 600,
    color: colors.amber,
    border: `1px solid ${colors.amber}`,
    padding: '0.4rem 0.9rem',
    borderRadius: '50px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  // Modal Styles
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    animation: 'fadeIn 0.3s ease',
  };

  const modalContentStyle = (isVertical) => ({
    position: 'relative',
    width: isVertical ? 'auto' : 'min(90vw, 960px)',
    height: isVertical ? 'min(90vh, 840px)' : 'auto',
    aspectRatio: isVertical ? '9/16' : '16/9',
    backgroundColor: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const closeButtonStyle = {
    position: 'absolute',
    top: '-44px', // Position outside the video container
    right: '0',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '32px',
    cursor: 'pointer',
    padding: '0 10px',
    lineHeight: 1,
    zIndex: 10001,
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={labelStyle}>OUR WORK</div>
        <h2 style={titleStyle}>Selected Projects</h2>

        <div style={gridStyle}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={cardStyleBase}
              onClick={() => setActiveVideo(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                const btn = e.currentTarget.querySelector('.play-btn');
                if (btn) {
                  btn.style.transform = 'scale(1.1)';
                  btn.style.backgroundColor = '#FFFFFF';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                const btn = e.currentTarget.querySelector('.play-btn');
                if (btn) {
                  btn.style.transform = 'scale(1)';
                  btn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              {/* Conditional Thumbnail Rendering */}
              {project.videoSrc ? (
                // VIDEO EXISTS -> Clean video with NO gradient
                <div style={{ ...thumbnailContainerStyle, background: '#000' }}>
                  <video
                    src={project.videoSrc}
                    style={thumbnailVideoStyle}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                  {/* Play Button Overlay */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="play-btn" style={playButtonValidationStyle}>
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3L19 12L5 21V3Z" fill={colors.amber} stroke={colors.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                // NO VIDEO -> Gradient Placeholder
                <div style={{ ...thumbnailContainerStyle, background: project.gradient }}>
                  <div style={categoryBadgeStyle}>{project.category}</div>
                  <div style={yearBadgeStyle}>{project.year}</div>

                  {/* Play Button & Text */}
                  <div className="play-btn" style={playButtonValidationStyle}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                       <path d="M5 3L19 12L5 21V3Z" fill={colors.amber} stroke={colors.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{
                    fontFamily: fonts.body,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    position: 'absolute',
                    bottom: '2rem',
                    zIndex: 1,
                  }}>Video Coming Soon</div>
                </div>
              )}

              {/* Info Area */}
              <div style={infoAreaStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={descriptionStyle}>{project.description}</p>
                <div style={tagsContainerStyle}>
                  {project.tags.map((tag, index) => (
                    <span key={index} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          style={modalOverlayStyle} 
          onClick={() => setActiveVideo(null)}
        >
          {/* Content Wrapper to position relative close button */}
          <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={closeButtonStyle}
              onClick={() => setActiveVideo(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div style={modalContentStyle(activeVideo.isVertical)}>
              <video
                src={activeVideo.videoSrc}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ==================== CERTIFICATES ====================
function Certificates() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);





  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isLightboxOpen]);

  const sectionStyle = {
    padding: '100px 5%',
    backgroundColor: colors.cream,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colors.amber,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontFamily: fonts.heading,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '1rem',
    lineHeight: 1.3,
  };

  const decorativeLineStyle = {
    width: '40px',
    height: '3px',
    backgroundColor: colors.amber,
    margin: '0 auto 1.5rem',
  };

  const subheadingStyle = {
    fontFamily: fonts.body,
    fontSize: '1.1rem',
    fontWeight: 300,
    color: colors.textMuted,
    maxWidth: '600px',
    margin: '0 auto 4rem',
    lineHeight: 1.7,
  };

  const cardContainerStyle = {
    maxWidth: '720px',
    margin: '0 auto',
  };

  const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: certificate.imageSrc ? 'pointer' : 'default',
  };

  const placeholderStyle = {
    backgroundColor: colors.lightSand,
    border: `2px dashed ${colors.brown}`,
    borderRadius: '16px',
    height: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  };

  const ribbonIconStyle = {
    width: '64px',
    height: '64px',
    marginBottom: '1.5rem',
  };

  const placeholderTextStyle = {
    fontFamily: fonts.heading,
    fontSize: '1.5rem',
    fontWeight: 600,
    color: colors.textDark,
    marginBottom: '0.75rem',
  };

  const placeholderSubtextStyle = {
    fontFamily: fonts.body,
    fontSize: '1rem',
    fontWeight: 300,
    color: colors.textMuted,
    lineHeight: 1.6,
    maxWidth: '400px',
  };

  const certificateImageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '16px',
    boxShadow: '0 8px 40px rgba(196, 114, 42, 0.2)',
  };

  const infoStripStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  };

  const infoItemStyle = {
    fontFamily: fonts.body,
    fontSize: '0.85rem',
    color: colors.textMuted,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const dividerStyle = {
    width: '1px',
    height: '16px',
    backgroundColor: colors.textMuted,
    opacity: 0.3,
  };


  const lightboxOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: isLightboxOpen ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '2rem',
  };

  const lightboxImageStyle = {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '8px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid white',
    borderRadius: '50%',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  const handleCardClick = () => {
    if (certificate.imageSrc) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <section id="certificates" style={sectionStyle}>
        <div style={containerStyle}>
          {/* Label */}
          <div style={labelStyle}>CREDENTIALS</div>

          {/* Heading */}
          <h2 style={titleStyle}>Our Certifications</h2>

          {/* Decorative Amber Line */}
          <div style={decorativeLineStyle} />

          {/* Subheading */}
          <p style={subheadingStyle}>
            Recognized expertise in video production and visual design.
          </p>

          {/* Certificate Card Container */}
          <div style={cardContainerStyle}>
            <div
              style={cardStyle}
              onClick={handleCardClick}
              onMouseEnter={(e) => {
                if (certificate.imageSrc) {
                  e.currentTarget.style.transform = 'scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 12px 50px rgba(196, 114, 42, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (certificate.imageSrc) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {certificate.imageSrc ? (
                <img
                  src={certificate.imageSrc}
                  alt={certificate.title}
                  style={certificateImageStyle}
                />
              ) : (
                <div style={placeholderStyle}>
                  {/* Ribbon/Medal SVG Icon */}
                  <svg
                    style={ribbonIconStyle}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="24" r="16" fill={colors.amber} />
                    <path
                      d="M32 36L24 60L32 54L40 60L32 36Z"
                      fill={colors.brown}
                    />
                    <circle cx="32" cy="24" r="10" fill={colors.gold} />
                  </svg>

                  {/* Placeholder Text */}
                  <div style={placeholderTextStyle}>Certificate Coming Soon</div>
                  <div style={placeholderSubtextStyle}>
                    This section will display an official certification.
                  </div>
                </div>
              )}
            </div>

            {/* Info Strip - only show when certificate exists */}
            {certificate.imageSrc && (
              <div style={infoStripStyle}>
                <div style={infoItemStyle}>
                  <strong>Issued to:</strong> {certificate.issuedTo}
                </div>
                <div style={dividerStyle} />
                <div style={infoItemStyle}>
                  <strong>By:</strong> {certificate.issuedBy}
                </div>
                <div style={dividerStyle} />
                <div style={infoItemStyle}>
                  <strong>Year:</strong> {certificate.year}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <div
        style={lightboxOverlayStyle}
        onClick={() => setIsLightboxOpen(false)}
      >
        {/* Close Button */}
        <button
          style={closeButtonStyle}
          onClick={() => setIsLightboxOpen(false)}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'scale(1)';
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Certificate Image in Lightbox */}
        {certificate.imageSrc && (
          <img
            src={certificate.imageSrc}
            alt={certificate.title}
            style={lightboxImageStyle}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  );
}


function Footer() {
  const footerStyle = {
    backgroundColor: colors.textDark,
    padding: '5rem 5% 3rem',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const logoContainerStyle = {
    marginBottom: '2rem',
  };

  const taglineStyle = {
    fontFamily: fonts.heading,
    fontSize: '1.35rem',
    fontWeight: 400,
    fontStyle: 'italic',
    color: colors.cream,
    marginBottom: '3rem',
    lineHeight: 1.6,
    maxWidth: '500px',
    margin: '0 auto 3rem',
  };

  const socialIconsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const iconLinkStyle = {
    color: colors.brown,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  };

  const dividerStyle = {
    width: '60px',
    height: '1px',
    backgroundColor: colors.amber,
    margin: '0 auto 2.5rem',
  };

  const copyrightStyle = {
    fontFamily: fonts.body,
    fontSize: '0.9rem',
    fontWeight: 300,
    color: colors.lightSand,
    marginBottom: '0.75rem',
    lineHeight: 1.6,
  };

  const saharaNoteStyle = {
    fontFamily: fonts.body,
    fontSize: '0.85rem',
    fontWeight: 300,
    color: colors.brown,
    fontStyle: 'italic',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Large Logo */}
        <div style={logoContainerStyle}>
          <img src={ofuqlabLogo} alt="ofuqlab logo" width="220" height="220" style={{ objectFit: 'contain' }} />
        </div>

        <p style={taglineStyle}>
          Cinematic stories from the heart of Algeria.
        </p>

        <div style={socialIconsContainerStyle}>
          <a
            href="https://www.instagram.com/ofuq.lab?igsh=MTFkbW02OWtxa3gzMw=="
            style={iconLinkStyle}
            target='_blank'
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.amber)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.brown)}
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@ofuq.lab?_r=1&_t=ZS-93uTH73gU7g"
            style={iconLinkStyle}
            target='_blank'

            onMouseEnter={(e) => (e.currentTarget.style.color = colors.amber)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.brown)}
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>


          <a
            href="https://youtube.com/@ofuqlab?si=8ya7nuhsYx8_6hLK"
            style={iconLinkStyle}
            target='_blank'
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.amber)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.brown)}
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>


          <a
            href="ofuqlab@gmail.com"
            style={iconLinkStyle}
            target='_blank'
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.amber)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.brown)}
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <div style={dividerStyle} />

        <p style={copyrightStyle}>
          © 2026 ofuqlab — Algeria, Africa. All rights reserved.
        </p>


        <p style={saharaNoteStyle}>
          Built with passion in the Sahara 
        </p>
      </div>
    </footer>
  );
}

export default App;
