import React from "react";

function SortOptions({ sortOption, onSortChange }) {
const styles = {
container: {
display: "flex",
alignItems: "center",
justifyContent: "flex-start", 
marginBottom: "10px", 
marginLeft: "20%", 
color: "#D472A3", 
fontSize: "1.1em",
},
label: {
marginRight: "10px",
fontWeight: "bold",
},
select: {
padding: "5px",
borderRadius: "4px",
border: "1px solid #D472A3",
color: "#D472A3",
},
};

return (
<div style={styles.container}>
<label style={styles.label}>Sort by:</label>
<select
style={styles.select}
value={sortOption}
onChange={(e) => onSortChange(e.target.value)}
>
<option value="name">Name</option>
<option value="weight">Weight</option>
</select>
</div>
);
}

export default SortOptions;