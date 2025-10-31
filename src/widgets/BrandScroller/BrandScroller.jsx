import React from 'react';
import versace from '../../assets//brands/versace.png';
import gucci from '../../assets/brands/gucci.png';
import prada from '../../assets/brands/prada.png';
import calvinKlein from '../../assets/brands/calvin-klein.png';
import puma from "../../assets/brands/puma.png"
import louis from "../../assets/brands/louis-vuitton.png"
import hermes from "../../assets/brands/hermes.png"
import './BrandScroller.css';

const brandLogos = [versace, gucci, prada, calvinKlein, puma, louis, hermes];

const BrandScroller = () => {
  const repeatedLogos = Array(10).fill(brandLogos).flat();

  return (
    <div className="brand-scroller-wrapper py-3 bg-white">
      <div className="brand-scroller-track">
        {repeatedLogos.map((logo, idx) => (
          <div key={idx} className="brand-logo">
            <img src={logo} alt={`brand-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandScroller;