import React, { useState } from "react";
import './AddHogForm.Module.css'

function AddHogForm({ onAddHog }) {
// Initialize state for each input field
const [name, setName] = useState("");
const [specialty, setSpecialty] = useState("");
const [greased, setGreased] = useState(false);
const [weight, setWeight] = useState("");
const [highestMedalAchieved, setHighestMedalAchieved] = useState("");
const [image, setImage] = useState("");

// Handle form submission
const handleSubmit = (e) => {
e.preventDefault();
// Create a new hog object based on input values
const newHog = {
name,
specialty,
greased,
weight: parseFloat(weight), // Convert weight to a number
"highest medal achieved": highestMedalAchieved,
image,
};

// Pass the new hog back to the parent component
onAddHog(newHog);

// Clear the form fields after submission
setName("");
setSpecialty("");
setGreased(false);
setWeight("");
setHighestMedalAchieved("");
setImage("");
};

return (
<form className="add-hog-form" onSubmit={handleSubmit}>
<h3>Add a New Hog</h3>
<label>
Name:
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</label>

<label>
Specialty:
<input
type="text"
value={specialty}
onChange={(e) => setSpecialty(e.target.value)}
required
/>
</label>

<label>
Greased:
<input
type="checkbox"
checked={greased}
onChange={(e) => setGreased(e.target.checked)}
/>
</label>

<label>
Weight:
<input
type="number"
value={weight}
onChange={(e) => setWeight(e.target.value)}
step="0.1"
required
/>
</label>

<label>
Highest Medal Achieved:
<input
type="text"
value={highestMedalAchieved}
onChange={(e) => setHighestMedalAchieved(e.target.value)}
required
/>
</label>

<label>
Image URL:
<input
type="url"
value={image}
onChange={(e) => setImage(e.target.value)}
required
/>
</label>

<button type="submit">Add Hog</button>
</form>
);
}

export default AddHogForm;
