import React from "react";
import HogTile from "../HogTile/HogTile";

function HogList({ hogs, onToggleHideHog }) {
return (
<div className="ui grid container">
{hogs
.filter((hog) => !hog.isHidden) // Only show hogs that are not hidden
.map((hog) => (
<HogTile
key={hog.name}
name={hog.name}
image={hog.image}
specialty={hog.specialty}
weight={hog.weight}
greased={hog.greased}
highestMedalAchieved={hog["highest medal achieved"]}
onToggleHideHog={onToggleHideHog}
/>
))}
</div>
);
}

export default HogList;
