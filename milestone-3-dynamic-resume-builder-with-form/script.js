"use strict";
// Personal Information Form
const personalForm = document.getElementById('personalInfoForm');
personalForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updatePersonalInfo(); // Runs the function to update the Personal Information section of the resume
});
// Education Form
const educationForm = document.getElementById('educationInfoForm');
educationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateEducation(); // Runs the function to update the Education section of the resume
});
// Experience Form
const experienceForm = document.getElementById('experienceInfoForm');
experienceForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateExperience(); // Runs the function to update the Experience section of the resume
});
// Skills Form
const skillsForm = document.getElementById('skillsInfoForm');
skillsForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    updateSkills(); // Runs the function to update the Skills section of the resume
});
// Function to Update Personal Information
function updatePersonalInfo() {
    var _a, _b, _c, _d, _e, _f, _g;
    const profilePicture = document.getElementById("profilePicture");
    const firstName = (_a = document.getElementById("firstName")) === null || _a === void 0 ? void 0 : _a.value;
    const lastName = (_b = document.getElementById("lastName")) === null || _b === void 0 ? void 0 : _b.value;
    const address = (_c = document.getElementById("address")) === null || _c === void 0 ? void 0 : _c.value;
    const linkedin = (_d = document.getElementById("linkedin")) === null || _d === void 0 ? void 0 : _d.value;
    const tel = (_e = document.getElementById("tel")) === null || _e === void 0 ? void 0 : _e.value;
    const email = (_f = document.getElementById("email")) === null || _f === void 0 ? void 0 : _f.value;
    // Get profile picture URL and update the profile picture if the URL exists
    const profilePictureFile = (_g = profilePicture.files) === null || _g === void 0 ? void 0 : _g[0];
    const profilePic = document.getElementById("profilePic");
    profilePic.innerHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';
    // Show the Personal Information Heading and Formatting
    const personalInformationHeading = document.getElementById("personalInformationHeading");
    personalInformationHeading.style.display = "block";
    // Update Personal Information
    const personalInformation = document.getElementById("personalInformation");
    personalInformation.innerHTML = `
        <strong>Name: </strong>${firstName} ${lastName}<br>
        <strong>Address: </strong>${address}<br>
        <strong>LinkedIn: </strong><a href="${linkedin}" target="_blank">${linkedin}</a><br>
        <strong>Phone No: </strong>${tel}<br>
        <strong>Email: </strong>${email}`;
}
// Function to Update Education Information
function updateEducation() {
    var _a, _b, _c, _d, _e;
    const school = (_a = document.getElementById("school")) === null || _a === void 0 ? void 0 : _a.value;
    const schoolLocation = (_b = document.getElementById("schoolLocation")) === null || _b === void 0 ? void 0 : _b.value;
    const degree = (_c = document.querySelector("select")) === null || _c === void 0 ? void 0 : _c.value;
    const fieldOfStudy = (_d = document.getElementById("study")) === null || _d === void 0 ? void 0 : _d.value;
    const gradDate = (_e = document.getElementById("grad")) === null || _e === void 0 ? void 0 : _e.value;
    // Show the Education Heading and Formatting
    const educationHeading = document.getElementById("educationHeading");
    educationHeading.style.display = "block";
    // Update Education information
    const educationDetails = document.getElementById("educationDetails");
    educationDetails.innerHTML = `
        <strong>School: </strong>${school}, ${schoolLocation}<br>
        <strong>Degree: </strong>${degree}<br>
        <strong>Field of Study: </strong>${fieldOfStudy}<br>
        <strong>Graduation Date: </strong>${gradDate}`;
}
// Function to Update Experience Information
function updateExperience() {
    var _a, _b, _c, _d, _e, _f, _g;
    const jobTitle = (_a = document.getElementById("jobTitle")) === null || _a === void 0 ? void 0 : _a.value;
    const employer = (_b = document.getElementById("employer")) === null || _b === void 0 ? void 0 : _b.value;
    const location = (_c = document.getElementById("location")) === null || _c === void 0 ? void 0 : _c.value;
    const isRemote = (_d = document.getElementById("remote")) === null || _d === void 0 ? void 0 : _d.checked;
    const startDate = (_e = document.getElementById("start")) === null || _e === void 0 ? void 0 : _e.value;
    const endDateInput = (_f = document.getElementById("end")) === null || _f === void 0 ? void 0 : _f.value;
    const isCurrentlyWorking = (_g = document.getElementById("work")) === null || _g === void 0 ? void 0 : _g.checked;
    // If the checkbox of I currently work here is clikcked then it puts Present in the resume otherwise uses the inputed value
    const endDate = isCurrentlyWorking ? "Present" : endDateInput;
    // If the checkbox of Remote is clikcked then it puts Remote in the resume otherwise uses the inputed value
    const remoteStatus = isRemote ? "Remote" : location;
    // Show the Experience Heading and Formatting
    const experienceHeading = document.getElementById("experienceHeading");
    experienceHeading.style.display = "block";
    // Update experience information
    const experienceDetails = document.getElementById("experienceDetails");
    experienceDetails.innerHTML = `
        <strong>Job Title:</strong> ${jobTitle}<br>
        <strong>Employer:</strong> ${employer}<br>
        <strong>Location:</strong> ${remoteStatus}<br>
        <strong>Start Date:</strong> ${startDate}<br>
        <strong>End Date:</strong> ${endDate}`;
}
// Function to Update Skills Information
function updateSkills() {
    var _a;
    // Show the Skills Heading and Formatting
    const skillsHeading = document.getElementById("skillsHeading");
    skillsHeading.style.display = "block";
    // Update skills information
    const skill = (_a = document.getElementById("skill")) === null || _a === void 0 ? void 0 : _a.value;
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = `<span>${skill}</span>`;
}
