var button = (document.getElementById("toggle-skills"));
button.addEventListener("click", function () {
    var skillsElement = (document.getElementById("skills"));
    var currentDisplay = skillsElement.style.display;
    skillsElement.style.display = currentDisplay === "none" ? "block" : "none";
});
