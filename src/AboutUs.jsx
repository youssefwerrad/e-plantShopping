import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple mission: to bring the beauty
            and benefits of plants into every home. We believe that plants are more
            than just decoration – they're living companions that purify the air,
            boost mood, and create a connection with nature.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Collection</h2>
          <p>
            We specialize in a diverse range of house plants, carefully selected to
            thrive in various indoor environments. Our categories include:
          </p>
          <ul>
            <li><strong>Air Purifying Plants:</strong> Improve your indoor air quality naturally</li>
            <li><strong>Aromatic Fragrant Plants:</strong> Fill your home with natural fragrances</li>
            <li><strong>Insect Repellent Plants:</strong> Natural pest control solutions</li>
            <li><strong>Medicinal Plants:</strong> Harness the healing power of nature</li>
            <li><strong>Low Maintenance Plants:</strong> Perfect for busy lifestyles</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            Every plant we offer is carefully nurtured and inspected to ensure it
            arrives at your doorstep healthy and ready to thrive. We provide
            detailed care instructions and ongoing support to help you become
            a confident plant parent.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Paradise Nursery?</h2>
          <ul>
            <li>Hand-selected, premium quality plants</li>
            <li>Expert care advice and support</li>
            <li>Sustainable and eco-friendly practices</li>
            <li>Wide variety of indoor plants</li>
            <li>Fast and secure delivery</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </section>

        <section className="about-section mission-section">
          <h2>Our Mission</h2>
          <p className="mission-text">
            "Where Green Meets Serenity" – We're dedicated to creating peaceful,
            green spaces in your home, one plant at a time. Join us in our mission
            to make the world a greener, healthier place.
          </p>
        </section>

        <div className="contact-section">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@paradisenursery.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Green Street, Plant City, PC 12345</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
