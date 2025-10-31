const StyleCard = ({ label, image, height }) => (
  <div className="style-card">
    <img
      src={image}
      alt={`${label} style`}
      className="img-fluid style-img"
      style={{ height: `${height}px`, objectFit: 'contain' }}
    />
    <div className="style-label">{label}</div>
  </div>
);

export default StyleCard;