import React from "react";

function FilterToggle({ isGreased, onFilterToggle }) {
const styles = {
container: {
display: "flex",
alignItems: "center",
justifyContent: "center", 
marginBottom: "10px",
color: "#D472A3", 
fontSize: "1.1em",
},
label: {
marginLeft: "15px",
fontWeight: "bold",
},
checkbox: {
width: "20px", 
height: "20px",
borderRadius: "4px", 
marginRight: "10px",
accentColor: "#D472A3", 
},
};

return (
<div style={styles.container}>
<label style={styles.label}>
<input
style={styles.checkbox}
type="checkbox"
checked={isGreased}
onChange={onFilterToggle}
/>
Show Greased Hogs
</label>
</div>
);
}

export default FilterToggle;
