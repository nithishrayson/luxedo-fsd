import React from 'react';
import './DressStyleCard.css';
import casual from '../../assets/dress-style-card/casuals.png';
import formal from '../../assets/dress-style-card/formals.png';
import party from '../../assets/dress-style-card/party.png';
import gym from '../../assets/dress-style-card/gym.png';

const styles = [
  { label: 'Casual', image: casual, widthClass: 'w-2' }, 
  { label: 'Formal', image: formal, widthClass: 'w-3' },   
  { label: 'Party', image: party, widthClass: 'w-2' },
  { label: 'Gym', image: gym, widthClass: 'w-2' },
];

const DressStyleCard = () => (
    <div className="container my-5 d-flex flex-row justify-content-center">
        <div className="card-style-wrapper p-4">
            <h3 className="text-center mb-4">BROWSE BY DRESS STYLE</h3>
            <div className="grid-layout">
                {styles.map((style, index) => (
                    <div className={`style-card ${style.widthClass}`} key={index}>
                        <img src={style.image} alt={style.label} className="style-img" />
                        <div className="style-label">{style.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default DressStyleCard;