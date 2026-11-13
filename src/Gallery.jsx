import React, { useState } from "react";
import "./Gallery.css";
import { Image, X, ZoomIn, Sparkles, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "./slide1.jpg",
    title: "Classroom Morning Session",
    category: "classroom",
    desc: "KG to Grade 5 students engaged in structured morning lessons in Shahdara."
  },
  {
    src: "./image1.png",
    title: "Elementary School Students",
    category: "students",
    desc: "Bright young children receiving free English-medium instruction."
  },
  {
    src: "./slide2.jpg",
    title: "Dedicated Teacher Mentorship",
    category: "classroom",
    desc: "Personal attention and homework supervision for every individual student."
  },
  {
    src: "./image 2.png",
    title: "Vocational & Practical Skills",
    category: "vocational",
    desc: "Hands-on technical workshops preparing youth for market jobs."
  },
  {
    src: "./slide3.jpg",
    title: "Study Material & Books Distribution",
    category: "students",
    desc: "100% free uniforms, notebooks, and pencils distributed to all children."
  },
  {
    src: "./slide4.jpg",
    title: "Future High School Candidates",
    category: "classroom",
    desc: "Preparing our 5th-grade graduating students for upcoming high school years."
  }
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Image size={14} /> Ground Realities
          </div>
          <h2 className="section-title">Life at Selfless Humanitarian Service</h2>
          <p className="section-subtitle">
            A glimpse into the daily joy, focus, and transformation taking place 
            inside our Shahdara classrooms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filter-bar">
          <button
            className="filter-btn active"
            onClick={() => setActiveFilter("all")}
          >
            All Photos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} className="gallery-thumbnail" />
              <div className="gallery-overlay">
                <ZoomIn size={24} className="zoom-icon" />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a 
            href="#/gallery" 
            className="btn btn-outline-crimson btn-shimmer" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            View Full Campus Photo Gallery & Exhibition <ArrowRight size={16} />
          </a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close photo"
              >
                <X size={24} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
