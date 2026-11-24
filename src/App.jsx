import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Heart, BookOpen, Palette, Music, Star, MapPin, 
  Phone, Mail, Instagram, Clock, GraduationCap, Users, Sparkles, Building2,
  Calendar, Camera, Images, X, ChevronLeft, ChevronRight, ZoomIn, Home, ArrowLeft
} from 'lucide-react';

const PHONE = '918750994677';
const MAPS_URL = 'https://maps.app.goo.gl/fUpGj39ZQUtdzi2a7?g_st=aw';
const whatsapp = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hello M. V. Scholars School! I would like to enquire about admissions.')}`;

const activities = [
  { icon: BookOpen, title: 'Foundational Learning', text: 'Building early literacy, numeracy, and curiosity through guided discovery and playful activities.' },
  { icon: Palette, title: 'Creative Expression', text: 'Art, craft, storytelling and hands-on activities that inspire every child’s imagination.' },
  { icon: Music, title: 'Activity & Movement', text: 'Physical play, rhythm, yoga, and interactive celebrations that keep learning active and joyful.' },
];

const foundationalClasses = ['Pre-Nursery', 'Nursery', 'LKG', 'UKG'];
const primaryClasses = ['Class 1st', 'Class 2nd', 'Class 3rd', 'Class 4th', 'Class 5th'];

const eventAlbums = [
  {
    id: 'janmashtami',
    title: 'Janmashtami Celebrations',
    date: 'August 2026',
    icon: '🌸',
    folder: 'janmashtami',
    count: 15,
    coverIndex: 1,
    description: 'Festive Bal-Gopal & Radha attire, joyful Krishna bhajans, dahi handi fun, and playful cultural celebrations.',
    fallbacks: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    ]
  },
  {
    id: 'independence-day',
    title: 'Independence Day Celebrations',
    date: '15th August 2026',
    icon: '🇮🇳',
    folder: 'independence-day',
    count: 10,
    coverIndex: 1,
    description: 'Tricolour flag hoisting ceremony, patriotic rhymes, speeches, and creative crafts celebrating national pride.',
    fallbacks: [
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
    ]
  },
  {
    id: 'pratapgarh-trip',
    title: 'School Trip to Pratapgarh Farms',
    date: 'October 2026',
    icon: '🚌',
    folder: 'pratapgarh-trip',
    count: 14,
    coverIndex: 1,
    description: 'An exciting school picnic to Pratapgarh Farms featuring pottery, camel rides, tractors, rural sports, and picnic fun.',
    fallbacks: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
    ]
  },
  {
    id: 'gk-quiz',
    title: 'Inter-Class GK Quiz Competition',
    date: 'September 2026',
    icon: '🏆',
    folder: 'gk-quiz',
    count: 10,
    coverIndex: 1,
    description: 'Brain-teasing quiz rounds, active team participation, buzzers, certificates, and knowledge discovery.',
    fallbacks: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    ]
  },
  {
    id: 'raksha-bandhan',
    title: 'Raksha Bandhan Celebrations',
    date: 'August 2026',
    icon: '✨',
    folder: 'raksha-bandhan',
    count: 6,
    coverIndex: 1,
    description: 'Creating handmade rakhis, sweet sharing, celebrating mutual care, friendship, and sibling harmony.',
    fallbacks: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=900&q=80',
    ]
  },
  {
    id: 'diwali',
    title: 'Diwali & Rangoli Celebrations',
    date: 'November 2026',
    icon: '🪔',
    folder: 'diwali',
    count: 1,
    coverIndex: 1,
    description: 'Diya decoration, vibrant rangoli craft, ethnic attire, sweet sharing, and festive school joy.',
    fallbacks: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560785496-3c6a2b7b4a0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
    ]
  }
];

function SafeImage({ src, fallback, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}

function ScrollZoomImage({ src, fallback, alt, className = '', onClick, title, overflowHidden = false }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Zooms smoothly between 0.93x and 1.06x as you scroll
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.93, 1.06, 0.93]);

  return (
    <div 
      ref={containerRef} 
      className={className} 
      onClick={onClick} 
      title={title} 
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: overflowHidden ? 'hidden' : 'visible' 
      }}
    >
      <motion.div
        style={{
          scale,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform'
        }}
      >
        <SafeImage src={src} fallback={fallback} alt={alt} />
      </motion.div>
    </div>
  );
}

function EventPhotoTile({ folder, index, fallback, alt, onClick }) {
  const [step, setStep] = useState(0); // 0: .jpeg, 1: .jpg, 2: .png, 3: fallback

  const sources = [
    `/images/events/${folder}/${index}.jpeg`,
    `/images/events/${folder}/${index}.jpg`,
    `/images/events/${folder}/${index}.png`,
    fallback
  ];

  const currentSrc = sources[step];

  const handleError = () => {
    if (step < sources.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="event-photo-tile" onClick={() => onClick(currentSrc)}>
      <img src={currentSrc} alt={alt} onError={handleError} loading="lazy" />
      <div className="album-zoom-overlay">
        <ZoomIn size={26} />
      </div>
    </div>
  );
}

function EventLightboxImage({ folder, index, fallback, alt }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [folder, index]);

  const sources = [
    `/images/events/${folder}/${index}.jpeg`,
    `/images/events/${folder}/${index}.jpg`,
    `/images/events/${folder}/${index}.png`,
    fallback
  ];

  const currentSrc = sources[step];

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (step < sources.length - 1) {
          setStep((prev) => prev + 1);
        }
      }}
    />
  );
}

function EventCoverImage({ folder, coverIndex = 1, fallback, alt }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [folder, coverIndex]);

  const sources = [
    `/images/events/${folder}/cover.png`,
    `/images/events/${folder}/cover.jpg`,
    `/images/events/${folder}/cover.jpeg`,
    `/images/events/${folder}/${coverIndex}.jpeg`,
    `/images/events/${folder}/${coverIndex}.jpg`,
    `/images/events/${folder}/${coverIndex}.png`,
    `/images/events/${folder}/1.jpeg`,
    `/images/events/${folder}/1.jpg`,
    fallback
  ];

  const currentSrc = sources[step];

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (step < sources.length - 1) {
          setStep((prev) => prev + 1);
        }
      }}
    />
  );
}

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [activeNav, setActiveNav] = useState('home');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [aboutZoomed, setAboutZoomed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      if (hash.startsWith('#gallery')) {
        setActiveNav('gallery');
      } else if (hash === '#about') {
        setActiveNav('about');
      } else if (hash === '#classes') {
        setActiveNav('classes');
      } else if (hash === '#admissions') {
        setActiveNav('admissions');
      } else if (hash === '#contact') {
        setActiveNav('contact');
      } else {
        setActiveNav('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const isGalleryPage = currentHash === '#gallery';
  const isEventDetailPage = currentHash.startsWith('#gallery/');
  const isAboutPage = currentHash === '#about' || currentHash === '#about-us';
  const currentEventId = isEventDetailPage ? currentHash.replace('#gallery/', '') : null;
  const activeEvent = eventAlbums.find((a) => a.id === currentEventId) || eventAlbums[0];
  const isHomePage = !isGalleryPage && !isEventDetailPage && !isAboutPage;

  const navigateTo = (hash) => {
    window.location.hash = hash;
  };

  const handleNavClick = (navKey, hash) => {
    setActiveNav(navKey);
    if (hash === '#gallery' || hash === '#about' || hash === '#home') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (isGalleryPage || isEventDetailPage || isAboutPage) {
        window.location.hash = '#home';
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? activeEvent.count - 1 : prev - 1));
    }
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === activeEvent.count - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={() => handleNavClick('home', '#home')}>
          {!logoFailed ? (
            <img 
              src="/images/logo/logo.png" 
              alt="M. V. Scholars School" 
              className="brand-logo-img" 
              onError={() => setLogoFailed(true)} 
            />
          ) : (
            <span className="brand-mark">MV<span>✦</span></span>
          )}
          <span>
            <strong>M. V. Scholars</strong>
            <small>PRE-NURSERY TO 5TH</small>
          </span>
        </a>

        <nav className="header-nav-box">
          <a 
            href="#home" 
            onClick={() => handleNavClick('home', '#home')}
            className={activeNav === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => handleNavClick('about', '#about')}
            className={activeNav === 'about' ? 'active' : ''}
          >
            About Us
          </a>
          <a 
            href="#classes" 
            onClick={() => handleNavClick('classes', '#classes')}
            className={activeNav === 'classes' ? 'active' : ''}
          >
            Programmes
          </a>
          <a 
            href="#gallery" 
            onClick={() => handleNavClick('gallery', '#gallery')}
            className={activeNav === 'gallery' ? 'active' : ''}
          >
            Photo Gallery
          </a>
          <a 
            href="#admissions"
            onClick={() => handleNavClick('admissions', '#admissions')}
            className={activeNav === 'admissions' ? 'active' : ''}
          >
            Admissions
          </a>
          <a 
            href="#contact" 
            onClick={() => handleNavClick('contact', '#contact')}
            className={activeNav === 'contact' ? 'active' : ''}
          >
            Locate Us
          </a>
        </nav>

        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Enquire Now <ArrowRight size={16} />
        </a>
      </header>

      {/* 1. SEPARATE PAGE: PHOTO GALLERY LIST PAGE (#gallery) */}
      {isGalleryPage && (
        <main>
          {/* Banner matching user's reference */}
          <section className="gallery-hero-banner">
            <h1 className="gallery-hero-title">Photo Gallery</h1>
            <div className="gallery-breadcrumbs">
              <a href="#home" onClick={() => navigateTo('#home')}>
                <Home size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                Home
              </a>
              <span>/</span>
              <span>Photo Gallery</span>
            </div>
          </section>

          {/* Cards Grid matching Birla Vidya Niketan in the user's screenshot */}
          <section className="gallery-container">
            <div className="bvn-cards-grid">
              {eventAlbums.map((evt) => (
                <div 
                  className="bvn-card" 
                  key={evt.id}
                  onClick={() => navigateTo(`#gallery/${evt.id}`)}
                >
                  <div className="bvn-card-header">
                    {evt.title}
                  </div>
                  <div className="bvn-card-img-box">
                    <EventCoverImage
                      folder={evt.folder}
                      coverIndex={evt.coverIndex || 1}
                      fallback={evt.fallbacks[0]}
                      alt={evt.title}
                    />
                  </div>
                  <div className="bvn-card-footer">
                    <span className="bvn-date-badge">
                      <Calendar size={13} color="var(--orange)" />
                      Posted Date : {evt.date}
                    </span>
                    <div className="bvn-btn-arrow">→</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* 2. SEPARATE PAGE: INDIVIDUAL EVENT ALBUM PAGE (#gallery/{eventId}) */}
      {isEventDetailPage && (
        <main>
          {/* Banner */}
          <section 
            className="gallery-hero-banner"
            style={{
              backgroundImage: `linear-gradient(rgba(35, 10, 42, 0.82), rgba(35, 10, 42, 0.88)), url(/images/events/${activeEvent.folder}/${activeEvent.coverIndex || 1}.jpeg)`
            }}
          >
            <h1 className="gallery-hero-title">{activeEvent.title}</h1>
            <div className="gallery-breadcrumbs">
              <a href="#home" onClick={() => navigateTo('#home')}>Home</a>
              <span>/</span>
              <a href="#gallery" onClick={() => navigateTo('#gallery')}>Photo Gallery</a>
              <span>/</span>
              <span>{activeEvent.title}</span>
            </div>
          </section>

          <section className="gallery-container">
            {/* Header with back button */}
            <div className="event-detail-header">
              <div>
                <h2 style={{ fontFamily: 'Fredoka', fontSize: '28px', color: 'var(--purple)', margin: '0 0 6px 0' }}>
                  {activeEvent.icon} {activeEvent.title}
                </h2>
                <p style={{ color: 'var(--muted)', margin: 0, fontSize: '15px' }}>
                  {activeEvent.description}
                </p>
              </div>
              <button 
                type="button" 
                className="back-to-gallery-btn"
                onClick={() => navigateTo('#gallery')}
              >
                <ArrowLeft size={16} /> Back to Photo Gallery
              </button>
            </div>

            {/* Photos of this event */}
            <div className="event-photos-grid">
              {Array.from({ length: activeEvent.count }).map((_, idx) => (
                <EventPhotoTile
                  key={`${activeEvent.id}-${idx + 1}`}
                  folder={activeEvent.folder}
                  index={idx + 1}
                  fallback={activeEvent.fallbacks[idx % activeEvent.fallbacks.length]}
                  alt={`${activeEvent.title} Photo ${idx + 1}`}
                  onClick={() => setLightboxIndex(idx)}
                />
              ))}
            </div>
          </section>
        </main>
      )}

      {/* 3. SEPARATE PAGE: ABOUT US PAGE (#about) */}
      {isAboutPage && (
        <main>
          <section className="gallery-hero-banner">
            <h1 className="gallery-hero-title">About Our School</h1>
            <div className="gallery-breadcrumbs">
              <a href="#home" onClick={() => handleNavClick('home', '#home')}>
                <Home size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                Home
              </a>
              <span>/</span>
              <span>About Us</span>
            </div>
          </section>

          <section className="about-page-container">
            {/* Story & Image */}
            <div className="about-page-hero-grid">
              <div className="about-page-image-col">
                <div 
                  className="about-page-photo"
                  onClick={() => setAboutZoomed('/images/about/about-page.png')}
                  style={{ margin: '0 auto' }}
                >
                  <SafeImage
                    src="/images/about/about-page.png"
                    fallback="/images/about/about-page.jpg"
                    alt="Students reading at M. V. Scholars School"
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
                    Little scholars reading together at M. V. Scholars School
                  </span>
                </div>
              </div>

              <div className="about-page-text-col">
                <div className="trust-badge">
                  <Building2 size={14} /> Run by Manju Vijay Charitable Trust
                </div>
                <h2 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(32px, 3.8vw, 44px)', color: 'var(--purple)', margin: '12px 0 16px 0', lineHeight: 1.15 }}>
                  A Nurturing Haven for <em>Curious Minds.</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted)', margin: '0 0 14px 0' }}>
                  Established under the aegis of the <strong>Manju Vijay Charitable Trust</strong>, 
                  <strong> M. V. Scholars School</strong> provides a compassionate, holistic, and joyful learning 
                  environment for children aged <strong>3 to 10 years</strong> (Pre-Nursery through 5th Grade).
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted)', margin: '0 0 24px 0' }}>
                  We believe early childhood and primary education shape a child's character for life. 
                  Our experienced teachers provide personal attention, fostering curiosity, creativity, strong moral values, and foundational academic confidence.
                </p>

                <div className="about-quick-specs">
                  <div className="spec-card">
                    <span className="spec-icon">🕒</span>
                    <div>
                      <strong>School Timings</strong>
                      <small>8:00 AM to 1:00 PM</small>
                    </div>
                  </div>
                  <div className="spec-card">
                    <span className="spec-icon">🎓</span>
                    <div>
                      <strong>Classes Offered</strong>
                      <small>Pre-Nursery to 5th Grade</small>
                    </div>
                  </div>
                  <div className="spec-card">
                    <span className="spec-icon">👶</span>
                    <div>
                      <strong>Age Criteria</strong>
                      <small>3 Years to 10 Years</small>
                    </div>
                  </div>
                  <div className="spec-card">
                    <span className="spec-icon">📍</span>
                    <div>
                      <strong>Campus Location</strong>
                      <small>Tikri Kalan, New Delhi</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision, Mission, and Values */}
            <div style={{ marginTop: '55px' }}>
              <div className="center-heading" style={{ marginBottom: '35px' }}>
                <div className="eyebrow">Our Guiding Light</div>
                <h2 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(30px, 3.5vw, 40px)', color: 'var(--purple)' }}>
                  Vision, Mission & Core Values
                </h2>
              </div>

              <div className="activity-grid">
                <div className="activity activity-1">
                  <div className="activity-icon">🌟</div>
                  <h3>Our Vision</h3>
                  <p>
                    To cultivate a joyful, inclusive learning environment where every young learner discovers their strengths, develops resilient character, and blossoms into a confident student.
                  </p>
                </div>

                <div className="activity activity-2">
                  <div className="activity-icon">🎯</div>
                  <h3>Our Mission</h3>
                  <p>
                    Providing holistic, value-based education that balances academic excellence with experiential play, emotional intelligence, moral clarity, and creative expression.
                  </p>
                </div>

                <div className="activity activity-3">
                  <div className="activity-icon">🤝</div>
                  <h3>Our Core Values</h3>
                  <p>
                    Compassion, Integrity, Respect, Curiosity, and Joy form the bedrock of everything we teach and practice every single day.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership: Principal & Founder Profile */}
            <div className="principal-section" style={{ marginTop: '65px' }}>
              <div className="center-heading" style={{ marginBottom: '35px' }}>
                <div className="eyebrow">Leadership & Inspiration</div>
                <h2 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(30px, 3.5vw, 42px)', color: 'var(--purple)' }}>
                  From the Principal & Founder’s Desk
                </h2>
              </div>

              <div className="principal-card">
                <div className="principal-photo-col">
                  <div className="principal-photo-box">
                    <img 
                      src="/images/leadership/principal.jpg" 
                      alt="Kulvijay Singh Bhadauriya (Ravi Singh) - Principal & Founder"
                      className="principal-img"
                    />
                  </div>
                  <div className="principal-nameplate">
                    <h3>Kulvijay Singh Bhadauriya</h3>
                    <div className="alias-name">(Ravi Singh)</div>
                    <p className="principal-title">Principal & Founder, M. V. Scholars School</p>
                    <p className="trust-title">Managing Trustee, Manju Vijay Charitable Trust</p>
                  </div>
                </div>

                <div className="principal-message-col">
                  <div className="quote-mark">“</div>
                  <blockquote className="principal-quote">
                    At M. V. Scholars School, our mission is to create a joyful, compassionate, and empowering environment where children don't just study—they thrive with wonder, respect, and boundless curiosity.
                  </blockquote>
                  
                  <div className="principal-bio">
                    <p>
                      Welcome to <strong>M. V. Scholars School</strong>. Founded under the aegis of the 
                      <strong> Manju Vijay Charitable Trust</strong>, our institution was born out of a profound commitment 
                      to provide accessible, high-standard foundational and primary education to every child.
                    </p>
                    <p>
                      We believe that a child’s early formative years from <strong>Pre-Nursery to 5th Grade</strong> (Ages 3 to 10) are the most crucial. 
                      During these years, character is shaped, habits are formed, and the joy of lifelong learning is sparked. 
                      Our dedicated team focuses on blending structured academics with playful discovery, sports, moral ethics, 
                      and creative arts.
                    </p>
                    <p>
                      Every child walks through our gates with distinct talents and dreams. It is our honor and duty to guide them with warmth, discipline, and personal attention so they step forward with confidence, kindness, and pride.
                    </p>
                  </div>

                  <div className="principal-highlights">
                    <div className="p-pill">✦ Child-Centric Pedagogy</div>
                    <div className="p-pill">✦ Moral & Ethical Values</div>
                    <div className="p-pill">✦ Individualized Care</div>
                    <div className="p-pill">✦ Holistic Early Education</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus & Location Box */}
            <div className="about-trust-card">
              <h3 style={{ fontFamily: 'Fredoka', fontSize: '24px', color: 'var(--purple)', margin: '0 0 8px 0' }}>
                🏛️ Manju Vijay Charitable Trust
              </h3>
              <p style={{ color: 'var(--muted)', margin: '0 0 20px 0', fontSize: '15px' }}>
                Plot No. 95/4, Baba Haridass Colony, Tikri Kalan, New Delhi – 110041
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a className="secondary" href={MAPS_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} /> Open on Google Maps
                </a>
                <a className="primary" href={whatsapp} target="_blank" rel="noreferrer">
                  Enquire via WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 4. HOME PAGE (When on #home, #classes, etc.) */}
      {isHomePage && (
        <main>
          {/* HERO */}
          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="trust-badge">
                <Building2 size={14} /> Run by Manju Vijay Charitable Trust
              </div>
              <div className="eyebrow">
                <Sparkles size={15} /> Little steps. Big dreams.
              </div>
              <h1>
                A bright beginning<br />
                for <em>beautiful</em> minds.
              </h1>
              <p>
                Empowering young learners from Pre-Nursery to 5th Grade. A nurturing environment filled with curiosity, friendship, values, and academic excellence.
              </p>
              <div className="hero-actions">
                <a className="primary" href={whatsapp} target="_blank" rel="noreferrer">
                  Explore Admissions <ArrowRight size={17} />
                </a>
                <a className="secondary" href="#classes">
                  View Classes & Timings
                </a>
              </div>
              <div className="trust">
                <span className="stars">★★★★★</span>
                <span>Welcoming children ages 3 to 10 years</span>
              </div>
            </div>

            <div className="hero-art">
              <div className="sun"></div>
              <div className="cloud cloud1"></div>
              <div className="cloud cloud2"></div>
              <div className="hero-photo">
                <ScrollZoomImage
                  src="/images/hero/hero.png"
                  fallback="https://images.unsplash.com/photo-1503459439306-3d9b5f6b4a4b?auto=format&fit=crop&w=1000&q=90"
                  alt="M. V. Scholars student enjoying learning"
                  overflowHidden={true}
                />
              </div>
              <div className="float-note note1">✏️ Learn</div>
              <div className="float-note note2">💛 Grow</div>
              <div className="flower">✿</div>
              <div className="rainbow">🌈</div>
            </div>
          </section>

          {/* TICKER (SMOOTH CONTINUOUS MOVING MARQUEE) */}
          <section className="ticker" aria-label="School Highlights">
            <div className="ticker-marquee">
              <div className="ticker-track">
                <span>PRE-NURSERY TO 5TH</span>
                <i>✦</i>
                <span>AGES 3 TO 10</span>
                <i>✦</i>
                <span>8:00 AM – 1:00 PM</span>
                <i>✦</i>
                <span>JOYFUL LEARNING</span>
                <i>✦</i>
                <span>MANJU VIJAY CHARITABLE TRUST</span>
                <i>✦</i>
                <span>ADMISSIONS OPEN 2026</span>
                <i>✦</i>
                <span>TIKRI KALAN, NEW DELHI</span>
                <i>✦</i>
              </div>
              <div className="ticker-track" aria-hidden="true">
                <span>PRE-NURSERY TO 5TH</span>
                <i>✦</i>
                <span>AGES 3 TO 10</span>
                <i>✦</i>
                <span>8:00 AM – 1:00 PM</span>
                <i>✦</i>
                <span>JOYFUL LEARNING</span>
                <i>✦</i>
                <span>MANJU VIJAY CHARITABLE TRUST</span>
                <i>✦</i>
                <span>ADMISSIONS OPEN 2026</span>
                <i>✦</i>
                <span>TIKRI KALAN, NEW DELHI</span>
                <i>✦</i>
              </div>
            </div>
          </section>

          {/* ABOUT (WITH USER's UPLOADED ABOUT IMAGE - NO BOX, SCROLL ZOOM IN & OUT) */}
          <section className="about section" id="about">
            <div className="about-image-wrapper">
              <div 
                className="about-photo"
                onClick={() => setAboutZoomed('/images/about/about.png')}
              >
                <ScrollZoomImage
                  src="/images/about/about.png"
                  fallback="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                  alt="Students learning at M. V. Scholars School"
                  overflowHidden={false}
                />
              </div>
            </div>

            <div className="about-text">
              <div className="eyebrow">Welcome to M. V. Scholars</div>
              <h2>Where strong foundations<br />build <em>bright futures.</em></h2>
              <p>
                Managed under the aegis of the <strong>Manju Vijay Charitable Trust</strong>, M. V. Scholars School provides a compassionate, holistic, and joyful learning environment for children aged 3 to 10 years.
              </p>
              <p>
                From early preschool discovery in Pre-Nursery and Kindergarten to structured academic foundations in Classes 1st through 5th, we ensure every child receives personal attention, moral values, and creative encouragement.
              </p>
              <div className="about-highlights">
                <div className="about-highlight-item">
                  <span className="about-highlight-icon">✦</span> Safe, vibrant & activity-oriented learning
                </div>
                <div className="about-highlight-item">
                  <span className="about-highlight-icon">✦</span> Personalized care with experienced educators
                </div>
                <div className="about-highlight-item">
                  <span className="about-highlight-icon">✦</span> Strong academics, moral values, arts & sports
                </div>
              </div>
              <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">
                Connect with our Admissions Team <ArrowRight size={16} />
              </a>
            </div>
          </section>

          {/* CLASSES & PROGRAMS */}
          <section className="classes-section" id="classes">
            <div className="center-heading">
              <div className="eyebrow">Academic Curriculum</div>
              <h2>Classes from <em>Pre-Nursery to 5th</em></h2>
              <p>Thoughtfully planned stages of learning tailored for children aged 3 to 10 years.</p>
            </div>

            <div className="classes-grid">
              <div className="class-group-card foundational">
                <div className="class-group-header">
                  <div>
                    <h3 style={{ fontFamily: 'Fredoka', fontSize: '24px', color: 'var(--purple)', margin: '0 0 4px 0' }}>
                      Kindergarten & Foundational Wing
                    </h3>
                    <small style={{ color: 'var(--muted)' }}>Activity-based joyful early learning</small>
                  </div>
                  <span className="class-badge-age">Ages 3 – 5 Years</span>
                </div>
                <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.7' }}>
                  Sensory play, communication skills, phonics, numbers, art, and motor development to nurture natural curiosity.
                </p>
                <div className="class-pills">
                  {foundationalClasses.map((cls) => (
                    <span className="class-pill" key={cls}>✦ {cls}</span>
                  ))}
                </div>
              </div>

              <div className="class-group-card primary-wing">
                <div className="class-group-header">
                  <div>
                    <h3 style={{ fontFamily: 'Fredoka', fontSize: '24px', color: 'var(--purple)', margin: '0 0 4px 0' }}>
                      Primary School Wing
                    </h3>
                    <small style={{ color: 'var(--muted)' }}>Strong academic & personality growth</small>
                  </div>
                  <span className="class-badge-age">Ages 6 – 10 Years</span>
                </div>
                <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.7' }}>
                  Comprehensive primary curriculum focusing on mathematics, language, environmental studies, moral science, and physical education.
                </p>
                <div className="class-pills">
                  {primaryClasses.map((cls) => (
                    <span className="class-pill" key={cls}>✦ {cls}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* LEARNING APPROACH */}
          <section className="learning section" id="learning">
            <div className="center-heading">
              <div className="eyebrow">Our Philosophy</div>
              <h2>Learning that feels like <em>play.</em></h2>
              <p>Encouraging young minds to explore, question, and grow with confidence.</p>
            </div>
            <div className="activity-grid">
              {activities.map((a, i) => (
                <motion.article 
                  className={`activity activity-${i + 1}`} 
                  key={a.title} 
                  whileHover={{ y: -6 }}
                >
                  <div className="activity-icon">
                    <a.icon size={28} />
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <span className="card-star">✦</span>
                </motion.article>
              ))}
            </div>
          </section>

          {/* PRINCIPAL & FOUNDER SPOTLIGHT (HOMEPAGE) */}
          <section className="section" style={{ background: '#fff', borderTop: '1px solid #ebd9c8', borderBottom: '1px solid #ebd9c8' }}>
            <div className="center-heading" style={{ marginBottom: '35px' }}>
              <div className="eyebrow">Visionary Leadership</div>
              <h2>Message from the <em>Principal & Founder</em></h2>
            </div>
            <div className="principal-card" style={{ maxWidth: '1050px', margin: '0 auto' }}>
              <div className="principal-photo-col">
                <div className="principal-photo-box">
                  <img 
                    src="/images/leadership/principal.jpg" 
                    alt="Kulvijay Singh Bhadauriya (Ravi Singh) - Principal & Founder"
                    className="principal-img"
                  />
                </div>
                <div className="principal-nameplate">
                  <h3>Kulvijay Singh Bhadauriya</h3>
                  <div className="alias-name">(Ravi Singh)</div>
                  <p className="principal-title">Principal & Founder, M. V. Scholars School</p>
                  <p className="trust-title">Managing Trustee, Manju Vijay Charitable Trust</p>
                </div>
              </div>

              <div className="principal-message-col">
                <div className="quote-mark">“</div>
                <blockquote className="principal-quote">
                  "At M. V. Scholars School, our mission is to create a joyful, compassionate, and empowering environment where children don't just study—they thrive with wonder, respect, and boundless curiosity."
                </blockquote>
                
                <div className="principal-bio">
                  <p>
                    Established under the <strong>Manju Vijay Charitable Trust</strong>, M. V. Scholars School is driven by a deep commitment to high-standard foundational education for children aged <strong>3 to 10 years</strong> (Pre-Nursery to 5th Grade).
                  </p>
                  <p>
                    We provide personalized mentorship, moral values, and an interactive curriculum that helps every young scholar blossom into a confident, empathetic leader of tomorrow.
                  </p>
                </div>

                <div style={{ marginTop: '22px' }}>
                  <button 
                    type="button" 
                    className="nav-cta"
                    onClick={() => handleNavClick('about', '#about')}
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    Read Full Story on About Us Page <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* HOMEPAGE GALLERY TEASER */}
          <section className="moments section" id="gallery-teaser">
            <div className="gallery-heading">
              <div>
                <div className="eyebrow">Memories in the Making</div>
                <h2>Life at M. V. Scholars <em>Photo Albums.</em></h2>
              </div>
              <button 
                type="button" 
                className="nav-cta" 
                onClick={() => navigateTo('#gallery')}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                View Full Photo Gallery <ArrowRight size={16} />
              </button>
            </div>

            <div className="bvn-cards-grid" style={{ marginTop: '28px' }}>
              {eventAlbums.slice(0, 4).map((evt) => (
                <div 
                  className="bvn-card" 
                  key={evt.id}
                  onClick={() => navigateTo(`#gallery/${evt.id}`)}
                >
                  <div className="bvn-card-header">
                    {evt.title}
                  </div>
                  <div className="bvn-card-img-box">
                    <EventCoverImage
                      folder={evt.folder}
                      coverIndex={evt.coverIndex || 1}
                      fallback={evt.fallbacks[0]}
                      alt={evt.title}
                    />
                  </div>
                  <div className="bvn-card-footer">
                    <span className="bvn-date-badge">
                      <Calendar size={13} color="var(--orange)" />
                      Posted Date : {evt.date}
                    </span>
                    <div className="bvn-btn-arrow">→</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ADMISSIONS CTA */}
          <section className="admissions">
            <div className="admission-doodle">✿</div>
            <div className="eyebrow">Admissions Open (Pre-Nursery to 5th)</div>
            <h2>
              Give your child a<br />
              warm & <em>inspiring</em> education.
            </h2>
            <p>
              School Timings: <strong>8:00 AM to 1:00 PM</strong> | Age Criteria: <strong>3 to 10 Years</strong><br />
              Run under Manju Vijay Charitable Trust. We welcome you to visit our campus.
            </p>
            <a className="primary primary-light" href={whatsapp} target="_blank" rel="noreferrer">
              Enquire on WhatsApp <ArrowRight size={17} />
            </a>
          </section>

          {/* CONTACT */}
          <section className="contact section" id="contact">
            <div>
              <div className="eyebrow">Visit & Connect</div>
              <h2>Come visit<br /><em>our school.</em></h2>
              <p>
                We would love to welcome you and your child. Reach out for admission queries, campus walkthroughs, and syllabus details.
              </p>
            </div>
            <div className="contact-card">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                <MapPin />
                <span>
                  <strong>School Location (Google Maps)</strong>
                  <small>Plot No. 95/4, Baba Haridass Colony, near CNC Hospital, Tikri Kalan, New Delhi – 110041 (Click to open map)</small>
                </span>
              </a>
              <div style={{ display: 'flex', gap: '15px', padding: '16px 10px', borderBottom: '1px solid #f1e9e2', color: 'var(--purple)' }}>
                <Clock />
                <span style={{ display: 'grid', gap: '5px', color: 'var(--ink)' }}>
                  <strong>School Timings</strong>
                  <small style={{ fontSize: '13px', color: 'var(--muted)' }}>8:00 AM – 1:00 PM (Monday to Saturday)</small>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '15px', padding: '16px 10px', borderBottom: '1px solid #f1e9e2', color: 'var(--purple)' }}>
                <Building2 />
                <span style={{ display: 'grid', gap: '5px', color: 'var(--ink)' }}>
                  <strong>Managed By</strong>
                  <small style={{ fontSize: '13px', color: 'var(--muted)' }}>Manju Vijay Charitable Trust</small>
                </span>
              </div>
              <a href="tel:+918750994677">
                <Phone />
                <span>
                  <strong>Call Us</strong>
                  <small>+91 87509 94677</small>
                </span>
              </a>
              <a href="mailto:rudrathakurravi7@gmail.com">
                <Mail />
                <span>
                  <strong>Email</strong>
                  <small>rudrathakurravi7@gmail.com</small>
                </span>
              </a>
              <a href="https://www.instagram.com/mvscholarspreschool_/" target="_blank" rel="noreferrer">
                <Instagram />
                <span>
                  <strong>Instagram</strong>
                  <small>@mvscholarspreschool_</small>
                </span>
              </a>
            </div>
          </section>
        </main>
      )}

      {/* FULLSCREEN LIGHTBOX FOR HIGH-RES VIEWING */}
      <AnimatePresence>
        {lightboxIndex !== null && activeEvent && (
          <div 
            className="lightbox-modal"
            onClick={() => setLightboxIndex(null)}
          >
            <div 
              className="lightbox-box"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo"
              >
                <X size={32} />
              </button>

              <button 
                type="button" 
                className="lightbox-nav-btn lightbox-prev"
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>

              <EventLightboxImage
                folder={activeEvent.folder}
                index={lightboxIndex + 1}
                fallback={activeEvent.fallbacks[lightboxIndex % activeEvent.fallbacks.length]}
                alt={`${activeEvent.title} Photo ${lightboxIndex + 1}`}
              />

              <div className="lightbox-caption">
                {activeEvent.title} — Photo {lightboxIndex + 1}
              </div>

              <button 
                type="button" 
                className="lightbox-nav-btn lightbox-next"
                onClick={handleNextPhoto}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}

        {aboutZoomed && (
          <div 
            className="lightbox-modal"
            onClick={() => setAboutZoomed(null)}
          >
            <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close-btn"
                onClick={() => setAboutZoomed(null)}
                aria-label="Close zoomed image"
              >
                <X size={32} />
              </button>

              <SafeImage
                src={typeof aboutZoomed === 'string' ? aboutZoomed : '/images/about/about-page.png'}
                fallback="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                alt="Students at M. V. Scholars School"
              />

              <div className="lightbox-caption">
                M. V. Scholars School — Click anywhere or ✕ to close
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <footer>
        <a className="brand" href="#home" onClick={() => navigateTo('#home')}>
          {!logoFailed ? (
            <img 
              src="/images/logo/logo.png" 
              alt="M. V. Scholars School" 
              className="brand-logo-img" 
              onError={() => setLogoFailed(true)} 
            />
          ) : (
            <span className="brand-mark">MV<span>✦</span></span>
          )}
          <span>
            <strong>M. V. Scholars School</strong>
            <small>RUN BY MANJU VIJAY CHARITABLE TRUST</small>
          </span>
        </a>
        <span>
          © {new Date().getFullYear()} M. V. Scholars School. Run by Manju Vijay Charitable Trust.
        </span>
        <a href="#gallery" onClick={() => navigateTo('#gallery')}>Photo Gallery 📸</a>
      </footer>

      <a 
        className="whatsapp-float" 
        href={whatsapp} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="WhatsApp admission enquiry"
      >
        💬
      </a>
    </>
  );
}

export default App;
