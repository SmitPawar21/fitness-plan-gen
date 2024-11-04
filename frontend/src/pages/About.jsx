import React from 'react';
import { Navbar } from '../components/Navbar';

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-container">
        <div className="aboutus-image">
          
        </div>

        <div className="aboutus-content">
          <h2 className="aboutus-title">About Us</h2>
          <p className="aboutus-description">
            Welcome to our fitness plan generation app! We believe in crafting personalized fitness journeys
            that truly fit your body, lifestyle, and goals. Our platform utilizes the latest in technology
            and biometrics to understand your unique needs and create the perfect fitness plan for you.
          </p>

          <div className="aboutus-sections">
            <div className="aboutus-section">
              <h3 className="aboutus-subtitle">What We Offer</h3>
              <p className="aboutus-text">
                Our app goes beyond standard fitness plans. By storing and analyzing your biometrics,
                we create a tailored experience that includes:
              </p>
              <ul className="aboutus-list">
                <li>Personalized nutrition plans</li>
                <li>Custom exercise routines</li>
                <li>Goal-oriented weight management</li>
                <li>Specific dietary recommendations</li>
              </ul>
            </div>
          </div>

          <div className="aboutus-cta">
            <h3 className="aboutus-cta-title">Join Us on Your Journey</h3>
            <p className="aboutus-cta-text">
              Ready to start your personalized fitness journey? Our app will guide you every step of the way,
              adapting and adjusting to your progress to keep you on track toward your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

