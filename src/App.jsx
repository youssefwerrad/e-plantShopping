import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList && (
        <div className="landing-page">
          <div className="landing-panel">
            <div className="landing-panel-inner">
              <div className="landing-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="40" height="40">
                  <path
                    d="M24 4C24 4 8 12 8 27a16 16 0 0 0 32 0C40 12 24 4 24 4Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path d="M24 4V44" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <p className="eyebrow">Paradise Nursery &mdash; Est. Greenhouse No. 5</p>
              <h1>
                Where green
                <br />
                meets serenity.
              </h1>
              <p className="landing-copy">
                A hand-picked catalog of houseplants, sorted by what they do for
                your space &mdash; cleaner air, calmer rooms, fewer pests, and a
                little more life on the windowsill.
              </p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Browse the catalog
                <span className="button-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="landing-image">
            <div className="landing-image-frame">
              <img
                src="https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg"
                alt="A sunlit greenhouse filled with rows of green plants"
              />
            </div>
          </div>
        </div>
      )}

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;
