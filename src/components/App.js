
import React, { useState } from "react";
import Nav from "./Nav";
import AddHogForm from "./AddHogForm/AddHogForm";
import HogList from "./HogList/HogList";
import FilterAndSort from "./FilterAndSort/FilterAndSort";
import porkerData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(porkerData); // Initialize hogs state with data
  const [filteredHogs, setFilteredHogs] = useState(hogs); // State for filtered hogs
  const [isDark, setIsDark] = useState(false); // Dark mode state

  // Function to toggle visibility of a hog
  const handleToggleHideHog = (hogName) => {
    const updatedHogs = hogs.map((hog) =>
      hog.name === hogName ? { ...hog, isHidden: !hog.isHidden } : hog
    );
    setHogs(updatedHogs); // Update hogs state
    setFilteredHogs(updatedHogs); // Also update filtered hogs to reflect changes
  };

  // Function to add a new hog
  const handleAddHog = (newHog) => {
    const hogWithVisibility = { ...newHog, isHidden: false }; // Set isHidden to false
    setHogs((prevHogs) => [...prevHogs, hogWithVisibility]);
    setFilteredHogs((prevHogs) => [...prevHogs, hogWithVisibility]); // Ensure new hog appears in filtered list
  };

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const appClass = isDark ? "App dark" : "App light"; // Determine class based on dark mode

  return (
    <div className={appClass}>
    <button
  style={{
    backgroundColor: isDark ?  "#ddd " : " #333", 
    color: isDark ? "#000" : "#fff",           
    padding: "8px 16px",                      
    border: "none",                            
    borderRadius: "5px",                       
    cursor: "pointer"                          
  }}
  onClick={handleDarkModeToggle}
>
  {isDark ? "Light Mode" : "Dark Mode"}
</button>
      <Nav />
      <AddHogForm onAddHog={handleAddHog} />
      <FilterAndSort hogs={hogs} setFilteredHogs={setFilteredHogs} />
      <HogList hogs={filteredHogs} onToggleHideHog={handleToggleHideHog} />
    </div>
  );
}

export default App;
