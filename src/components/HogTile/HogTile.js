import React, { useState } from "react";
import './HogTile.Module.css';

function HogTile({ name, image, specialty, weight, highestMedalAchieved, greased, onToggleHideHog }) {
const [isExpanded, setIsExpanded] = useState(false);

const handleTileClick = () => {
setIsExpanded(prevState => !prevState);
};

return (
<div className="tile-container" onClick={handleTileClick}> 
<div className="tile">
<img src={image} alt={`${name} the hog`} />
<h2>{name}</h2>
<button style={{ backgroundColor: "#ff4d4d", color: "#fff",padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer"}} onClick={(e) => { e.stopPropagation(); onToggleHideHog(name);}}>
Hide Hog
</button>

{isExpanded && (
<div className="hog-details">
<h4>Specialty: {specialty}</h4>
<em>Weight: {weight} </em>
<p>Highest Medal Achieved: {highestMedalAchieved}</p>
<strong>{greased ? "Greased" : "Not Greased"}</strong>
</div>
)}
</div>
</div>
);
}

export default HogTile;

