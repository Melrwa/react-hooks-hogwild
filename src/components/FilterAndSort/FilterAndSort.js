import React, { useState, useEffect } from "react";
import FilterToggle from "../FilterToggle/FilterToggle";
import SortOptions from "../SortOption/SortOption";

function FilterAndSort({ hogs, setFilteredHogs }) {
const [isGreased, setIsGreased] = useState(false);
const [sortOption, setSortOption] = useState("name"); // Default to sorting by name

// Update filtered hogs based on current filters and sort options
useEffect(() => {
const filteredHogs = hogs
.filter((hog) => !isGreased || hog.greased)
.sort((a, b) => {
if (sortOption === "name") {
return a.name.localeCompare(b.name);
} else {
return a.weight - b.weight;
}
});
setFilteredHogs(filteredHogs);
}, [isGreased, sortOption, hogs, setFilteredHogs]);

// Handle filter toggle
const handleFilterToggle = () => {
setIsGreased((prev) => !prev);
};

// Handle sort option change
const handleSortChange = (option) => {
setSortOption(option);
};

return (
<div style={{ display: "flex", justifyContent: "flex", alignItems: "center", gap: "15px" }}>
<SortOptions sortOption={sortOption} onSortChange={handleSortChange} />
<FilterToggle isGreased={isGreased} onFilterToggle={handleFilterToggle} />
</div>
);
}

export default FilterAndSort;
