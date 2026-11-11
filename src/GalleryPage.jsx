import React, { useState } from "react";
import PageBanner from "./PageBanner";
import "./GalleryPage.css";
import { 
  Image, 
  X, 
  ZoomIn, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  MapPin, 
  Calendar, 
  BookOpen,
  ArrowRight
} from "lucide-react";

const allPhotos = [
  {
    id: 1,
    src: "./slide1.jpg",
    title: "Morning Classroom Assembly & Focus",
    category: "classroom",
    categoryLabel: "Classroom Instruction",
    date: "Shahdara Campus",
    desc: "KG through Grade 5 students start each morning with recitation, hygiene check, and structured English phonetics."
  },
  {
    id: 2,
    src: "./image1.png",
    title: "Foundational English-Medium Learning",
    category: "students",
    categoryLabel: "Student Progress",
    date: "Shahdara Campus",
    desc: "Children of illiterate daily-wage workers reading English sentences with confidence, breaking generational communication barriers."
  },
  {
    id: 3,
    src: "./slide2.jpg",
    title: "Individualized Academic Mentorship",
    category: "classroom",
    categoryLabel: "Classroom Instruction",
    date: "Shahdara Campus",
    desc: "Principal Solomon Samuel personally tutoring elementary students on mathematical concepts and English writing syntax."
  },
  {
    id: 4,
    src: "./image 2.png",
    title: "Vocational & Practical Hands-on Workshop",
    category: "vocational",
    categoryLabel: "Technical Skills",
    date: "Technical Center",
    desc: "Demonstration of practical technical training modules designed to prepare older youths for market-ready electronics and IT jobs."
  },
  {
    id: 5,
    src: "./slide3.jpg",
    title: "Free Books & Uniform Distribution",
    category: "welfare",
    categoryLabel: "Welfare & Supplies",
    date: "Annual Term Launch",
    desc: "100% free Oxford textbooks, notebooks, geometry boxes, and clean school uniforms handed out to every enrolled student."
  },
  {
    id: 6,
    src: "./slide4.jpg",
    title: "Graduating Elementary Scholars",
    category: "students",
    categoryLabel: "Student Progress",
    date: "Shahdara Campus",
    desc: "Grade 5 students completing their elementary curriculum with flying colors, ready for the upcoming High School expansion."
  },
  {
    id: 7,
    src: "./banner.png",
    title: "Campus Facility & Learning Space",
    category: "classroom",
    categoryLabel: "Classroom Instruction",
    date: "Shahdara Campus",
    desc: "A clean, bright, and secure learning environment established in the heart of Shahdara to protect and uplift neighborhood children."
  },
  {
    id: 8,
    src: "./image 2.png",
    title: "Classroom Interactive Activity",
    category: "welfare",
    categoryLabel: "Welfare & Supplies",
    date: "Shahdara Campus",
    desc: "Engaging group reading and learning exercises that foster teamwork, emotional resilience, and mutual respect among students."
  }
];

function GalleryPage({ onNavigate, onDonateClick }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "classroom", label: "Classroom Instruction" },
    { key: "students", label: "Student Progress" },
    { key: "vocational", label: "Technical Skills" },
    { key: "welfare", label: "Welfare & Supplies" },
  ];

  const filteredPhotos = activeFilter === "all"
    ? allPhotos
    : allPhotos.filter(p => p.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="gallery-page">
      <PageBanner
        title="Campus Photo Gallery & Ground Realities"
        subtitle="Witness the daily moments of joy, focus, learning, and transformation taking place inside our school in Shahdara, Lahore."
        breadcrumb="Photo Gallery"
        onNavigate={onNavigate}
      />

      {/* Main Gallery Exhibition */}
      <section className="gallery-exhibition-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="gallery-filter-strip">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`gallery-filter-pill ${activeFilter === cat.key ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Cards Grid */}
          <div className="gallery-masonry-grid">
            {filteredPhotos.map((photo, idx) => (
              <div 
                key={photo.id} 
                className="gallery-item-card"
                onClick={() => openLightbox(idx)}
              >
                <div className="gallery-card-img-wrap">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="gallery-card-img" 
                    loading="lazy" 
                  />
                  <div className="gallery-card-overlay">
                    <span className="overlay-zoom-btn">
                      <ZoomIn size={24} /> View Full Photo
                    </span>
                  </div>
                  <span className="gallery-cat-badge">{photo.categoryLabel}</span>
                </div>

                <div className="gallery-card-body">
                  <div className="gallery-card-meta">
                    <MapPin size={13} /> {photo.date}
                  </div>
                  <h3 className="gallery-card-title">{photo.title}</h3>
                  <p className="gallery-card-desc">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Visit Invitation Section */}
      <section className="visit-invite-section">
        <div className="container">
          <div className="visit-invite-card">
            <div className="visit-text-col">
              <span className="visit-tag">Transparency in Action</span>
              <h3 className="visit-title">Come Visit Our School in Shahdara</h3>
              <p className="visit-desc">
                Photographs capture only a glimpse of what happens here daily. We warmly invite donors, community members, and volunteers to visit our campus in Lahore, sit with the children during reading time, and witness the transformative impact of your support firsthand.
              </p>
              <div className="visit-actions">
                <a 
                  href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20I%20would%20like%20to%20arrange%20a%20visit%20to%20the%20Shahdara%20school%20campus." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-accent"
                >
                  Schedule a Campus Visit via WhatsApp
                </a>
                <button className="btn btn-outline" onClick={onDonateClick}>
                  <Heart size={16} fill="currentColor" /> Sponsor a Classroom
                </button>
              </div>
            </div>

            <div className="visit-info-col">
              <div className="visit-info-box">
                <h4 className="box-title"><MapPin size={18} /> Location Address</h4>
                <p className="box-detail">Shahdara Town, Lahore, Punjab, Pakistan</p>
              </div>
              <div className="visit-info-box">
                <h4 className="box-title"><Calendar size={18} /> School Visiting Hours</h4>
                <p className="box-detail">Monday to Friday: 8:00 AM – 1:00 PM (Regular Classes)<br />3:00 PM – 5:00 PM (Evening Academy)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button 
            className="lightbox-close-btn" 
            onClick={closeLightbox}
            aria-label="Close photo"
          >
            <X size={28} />
          </button>

          <button 
            className="lightbox-nav-btn prev-btn" 
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <ChevronLeft size={36} />
          </button>

          <button 
            className="lightbox-nav-btn next-btn" 
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <ChevronRight size={36} />
          </button>

          <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredPhotos[lightboxIndex].src} 
              alt={filteredPhotos[lightboxIndex].title} 
              className="lightbox-main-img" 
            />
            <div className="lightbox-caption-bar">
              <div>
                <span className="lightbox-cat">{filteredPhotos[lightboxIndex].categoryLabel}</span>
                <h4 className="lightbox-title">{filteredPhotos[lightboxIndex].title}</h4>
                <p className="lightbox-desc">{filteredPhotos[lightboxIndex].desc}</p>
              </div>
              <span className="lightbox-counter">
                {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;