import React from "react";
import "./DressStyleCard.css";
import casual from "../../assets/dress-style-card/casuals.png";
import formal from "../../assets/dress-style-card/formals.png";
import party from "../../assets/dress-style-card/party.png";
import gym from "../../assets/dress-style-card/gym.png";

const styles = [
  { label: "Casual", image: casual },
  { label: "Formal", image: formal },
  { label: "Party", image: party },
  { label: "Gym", image: gym },
];

const DressStyleCard = () => {
  return (
    <section className="dress-style-section py-5 px-3">
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-uppercase mb-0">BROWSE BY DRESS STYLES</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {styles.map((style, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="style-card shadow-sm border-0 rounded-4 overflow-hidden position-relative">
                <img
                  src={style.image}
                  alt={style.label}
                  className="img-fluid style-img w-100"
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <span className="fw-bold text-white fs-5">{style.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressStyleCard;
