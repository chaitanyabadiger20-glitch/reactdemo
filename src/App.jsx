import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [reservationData, setReservationData] = useState({
    roomType: "",
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const attractions = [
    { name: "Tsunami Wave Pool", icon: "🌊", desc: "Experience thrilling artificial waves" },
    { name: "Aqua Slides Paradise", icon: "🎢", desc: "Multi-level speed slides for adrenaline seekers" },
    { name: "Lazy River Escape", icon: "🏖️", desc: "Relaxing float through tropical scenery" },
    { name: "Kids Aquatic Zone", icon: "🎠", desc: "Safe, fun water play for children" },
  ];

  const rooms = [
    { name: "Deluxe Room", price: "₹15,999", features: ["Pool View", "King Bed", "Spa Access"] },
    { name: "Suite Elegance", price: "₹24,999", features: ["Ocean View", "Jacuzzi", "Private Balcony"] },
    { name: "Villa Paradise", price: "₹39,999", features: ["Private Pool", "2BR", "Full Kitchen"] },
  ];

  const amenities = [
    { emoji: "🏖️", name: "Beach Club", desc: "Private sandy beaches with premium lounging" },
    { emoji: "🍽️", name: "Gourmet Dining", desc: "Multi-cuisine restaurants and bars" },
    { emoji: "💆", name: "Spa & Wellness", desc: "Luxury spa and fitness center" },
    { emoji: "🏄", name: "Water Sports", desc: "Jet skiing, paddleboarding, and more" },
  ];

  const navItems = ["Home", "Attractions", "Rooms", "Dining"];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    setBookingModalOpen(true);
  };

  const handleReserveRoom = (roomName) => {
    setSelectedRoom(roomName);
    setReservationData({ ...reservationData, roomType: roomName });
    setReservationModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Request Received!\n\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nGuests: ${bookingData.guests}\n\nWe'll contact you shortly to confirm your booking!`
    );
    setBookingModalOpen(false);
    setBookingData({ name: "", email: "", checkIn: "", checkOut: "", guests: 1 });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    alert(
      `Room Reservation Request!\n\nRoom: ${reservationData.roomType}\nName: ${reservationData.name}\nPhone: ${reservationData.phone}\nCheck-in: ${reservationData.checkIn}\nCheck-out: ${reservationData.checkOut}\n\nThank you! Confirmation details will be sent to ${reservationData.email}`
    );
    setReservationModalOpen(false);
    setReservationData({
      roomType: "",
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
    });
  };

  const handleAddressClick = () => {
    setMapModalOpen(true);
  };

  return (
    <div className="prs-app">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">🌊 PRS</div>
          <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item}
                className="nav-link"
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
            <button className="cta-button" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <svg className="water-animation" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
              <feComponentTransfer in="coloredBlur">
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
            </filter>
          </defs>
          <path d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z" fill="#00a8cc" opacity="0.6">
            <animate
              attributeName="d"
              values="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z;
                      M0,320 Q300,270 600,320 T1200,320 L1200,600 L0,600 Z;
                      M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z" fill="#0096b8" opacity="0.5">
            <animate
              attributeName="d"
              values="M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z;
                      M0,330 Q300,280 600,330 T1200,330 L1200,600 L0,600 Z;
                      M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <div className="hero-content">
          <h1 className="hero-title">PRS Waterpark & Resort</h1>
          <h2 className="hero-subtitle">Where Luxury Meets Adventure in Goa</h2>
          <p className="hero-description">
            Experience world-class water attractions combined with luxury accommodations in paradise
          </p>
          <button className="cta-button hero-cta" onClick={handleBookNow}>
            Explore Our Paradise
          </button>
          <div className="scroll-indicator">⬇️</div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="attractions-section">
        <div className="section-container">
          <h2 className="section-title">Thrilling Attractions</h2>
          <div className="attractions-grid">
            {attractions.map((attr, idx) => (
              <div key={idx} className="attraction-card">
                <div className="attraction-icon">{attr.icon}</div>
                <h3 className="attraction-name">{attr.name}</h3>
                <p className="attraction-desc">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms-section">
        <div className="section-container">
          <h2 className="section-title">Luxury Accommodations</h2>
          <div className="rooms-grid">
            {rooms.map((room, idx) => (
              <div key={idx} className="room-card">
                <div className="room-image">🏨</div>
                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-price">
                    {room.price}
                    <span className="room-period">/night</span>
                  </p>
                  <ul className="room-features">
                    {room.features.map((feat, i) => (
                      <li key={i}>✓ {feat}</li>
                    ))}
                  </ul>
                  <button
                    className="room-btn"
                    onClick={() => handleReserveRoom(room.name)}
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="dining" className="amenities-section">
        <div className="section-container">
          <h2 className="section-title">World-Class Amenities</h2>
          <div className="amenities-grid">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">{amenity.emoji}</div>
                <h3 className="amenity-name">{amenity.name}</h3>
                <p className="amenity-desc">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container cta-content">
          <h2 className="cta-title">Ready for an Unforgettable Escape?</h2>
          <p className="cta-description">
            Book your stay at PRS Waterpark & Resort and create memories that last a lifetime
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary-cta" onClick={handleBookNow}>
              Book Your Stay
            </button>
            <button className="cta-button secondary-cta" onClick={() => handleNavClick("Home")}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">PRS Waterpark & Resort</h3>
              <p className="footer-desc">
                Your ultimate destination for water-filled adventure and luxury relaxation in beautiful Goa
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item" style={{ cursor: "pointer" }} onClick={handleAddressClick}>
                  📍 <span className="clickable-link">Goa, India</span>
                </div>
                <div className="contact-item">
                  ☎️ <a href="tel:+919876543210" className="clickable-link">+91 98765 43210</a>
                </div>
                <div className="contact-item">
                  ✉️ <a href="mailto:info@prsresort.com" className="clickable-link">info@prsresort.com</a>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <button className="link-button" onClick={() => handleNavClick("Home")}>
                    About Us
                  </button>
                </li>
                <li>
                  <button className="link-button" onClick={() => handleNavClick("Attractions")}>
                    Attractions
                  </button>
                </li>
                <li>
                  <button className="link-button" onClick={() => handleNavClick("Dining")}>
                    Dining
                  </button>
                </li>
                <li>
                  <button className="link-button">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 PRS Waterpark & Resort Goa. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="modal-overlay" onClick={() => setBookingModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setBookingModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Book Your Stay</h2>
            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingData.name}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  required
                  value={bookingData.email}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Check-in Date *</label>
                  <input
                    type="date"
                    required
                    value={bookingData.checkIn}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, checkIn: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Check-out Date *</label>
                  <input
                    type="date"
                    required
                    value={bookingData.checkOut}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, checkOut: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Number of Guests *</label>
                <select
                  required
                  value={bookingData.guests}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, guests: parseInt(e.target.value) })
                  }
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="submit-btn">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {reservationModalOpen && (
        <div className="modal-overlay" onClick={() => setReservationModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setReservationModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Reserve {reservationData.roomType}</h2>
            <form onSubmit={handleReservationSubmit} className="booking-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  required
                  value={reservationData.name}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  required
                  value={reservationData.email}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={reservationData.phone}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Check-in Date *</label>
                  <input
                    type="date"
                    required
                    value={reservationData.checkIn}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, checkIn: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Check-out Date *</label>
                  <input
                    type="date"
                    required
                    value={reservationData.checkOut}
                    onChange={(e) =>
                      setReservationData({ ...reservationData, checkOut: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Number of Guests *</label>
                <select
                  required
                  value={reservationData.guests}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, guests: parseInt(e.target.value) })
                  }
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="submit-btn">
                Complete Reservation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {mapModalOpen && (
        <div className="modal-overlay" onClick={() => setMapModalOpen(false)}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setMapModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Visit Us in Goa</h2>
            <div className="map-container">
              <iframe
                title="PRS Waterpark Location"
                width="100%"
                height="400"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.6816835654687!2d73.8314!3d15.2993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb5b5b5b5b5b5%3A0x0!2sGoa%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-info">
              <h3>📍 PRS Waterpark & Resort</h3>
              <p>Goa, India</p>
              <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
              <p>Email: <a href="mailto:info@prsresort.com">info@prsresort.com</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
