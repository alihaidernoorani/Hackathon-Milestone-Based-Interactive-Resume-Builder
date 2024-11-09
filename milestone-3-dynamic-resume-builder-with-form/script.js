// Get form and output elements
var form = document.getElementById("formSection");
var outputContainer = document.getElementById("resumeSection");
// Event listener for form submission
form.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    event.preventDefault(); // Prevent page reload
    // Collect all form data
    var profilePicture = document.getElementById("profilePicture");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var linkedin = document.getElementById("linkedin").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var school = (_a = document.getElementById("school")) === null || _a === void 0 ? void 0 : _a.value;
    var schoolLocation = (_b = document.getElementById("schoolLocation")) === null || _b === void 0 ? void 0 : _b.value;
    var degree = (_c = document.querySelector("select")) === null || _c === void 0 ? void 0 : _c.value;
    var fieldOfStudy = (_d = document.getElementById("study")) === null || _d === void 0 ? void 0 : _d.value;
    var gradDate = (_e = document.getElementById("grad")) === null || _e === void 0 ? void 0 : _e.value;
    var jobTitle = (_f = document.getElementById("jobTitle")) === null || _f === void 0 ? void 0 : _f.value;
    var employer = (_g = document.getElementById("employer")) === null || _g === void 0 ? void 0 : _g.value;
    var location = (_h = document.getElementById("location")) === null || _h === void 0 ? void 0 : _h.value;
    var isRemote = (_j = document.getElementById("remote")) === null || _j === void 0 ? void 0 : _j.checked;
    var startDate = (_k = document.getElementById("start")) === null || _k === void 0 ? void 0 : _k.value;
    var endDateInput = (_l = document.getElementById("end")) === null || _l === void 0 ? void 0 : _l.value;
    var isCurrentlyWorking = (_m = document.getElementById("work")) === null || _m === void 0 ? void 0 : _m.checked;
    var skill = (_o = document.getElementById("skill")) === null || _o === void 0 ? void 0 : _o.value;
    // Profile picture processing
    var profilePictureFile = (_p = profilePicture.files) === null || _p === void 0 ? void 0 : _p[0];
    var profilePicHTML = profilePictureFile ? "<img src=\"".concat(URL.createObjectURL(profilePictureFile), "\" alt=\"Profile Picture\" id=\"profilePic\">") : '';
    // Experience details handling
    var endDate = isCurrentlyWorking ? "Present" : endDateInput;
    var remoteStatus = isRemote ? "Remote" : location;
    // Generate output content
    outputContainer.innerHTML = "\n        <div id=\"profileContainer\">\n            <div id=\"profilePic\">".concat(profilePicHTML, "</div>\n            <h2 id=\"personalInformationHeading\">Personal Information</h2>\n            <p id=\"personalInformation\">\n                <strong>Name:</strong> ").concat(firstName, " ").concat(lastName, "<br>\n                <strong>Address:</strong> ").concat(address, "<br>\n                <strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a><br>\n                <strong>Phone No:</strong> ").concat(tel, "<br>\n                <strong>Email:</strong> ").concat(email, "\n            </p>\n        </div>\n\n        <div id=\"education\">\n            <h2 id=\"educationHeading\">Education</h2>\n            <p id=\"educationDetails\">\n                <strong>School:</strong> ").concat(school, ", ").concat(schoolLocation, "<br>\n                <strong>Degree:</strong> ").concat(degree, "<br>\n                <strong>Field of Study:</strong> ").concat(fieldOfStudy, "<br>\n                <strong>Graduation Date:</strong> ").concat(gradDate, "\n            </p>\n        </div>\n\n        <div id=\"experience\">\n            <h2 id=\"experienceHeading\">Experience</h2>\n            <p id=\"experienceDetails\">\n                <strong>Job Title:</strong> ").concat(jobTitle, "<br>\n                <strong>Employer:</strong> ").concat(employer, "<br>\n                <strong>Location:</strong> ").concat(remoteStatus, "<br>\n                <strong>Start Date:</strong> ").concat(startDate, "<br>\n                <strong>End Date:</strong> ").concat(endDate, "\n            </p>\n        </div>\n\n        <div id=\"skills\">\n            <h2 id=\"skillsHeading\">Skills</h2>\n            <p id=\"skillsList\">").concat(skill ? "<span>".concat(skill, "</span>") : 'No skills provided', "</p>\n        </div>\n    ");
});
// // Personal Information Form
// const personalForm = document.getElementById('personalInfoForm') as HTMLFormElement;
// personalForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // Prevent page reload
//     updatePersonalInfo(); // Runs the function to update the Personal Information section of the resume
// });
// // Education Form
// const educationForm = document.getElementById('educationInfoForm') as HTMLFormElement;
// educationForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // Prevent page reload
//     updateEducation(); // Runs the function to update the Education section of the resume
// });
// // Experience Form
// const experienceForm = document.getElementById('experienceInfoForm') as HTMLFormElement;
// experienceForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // Prevent page reload
//     updateExperience(); // Runs the function to update the Experience section of the resume
// });
// // Skills Form
// const skillsForm = document.getElementById('skillsInfoForm') as HTMLFormElement;
// skillsForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // Prevent page reload
//     updateSkills(); // Runs the function to update the Skills section of the resume
// });
// // Function to Update Personal Information
// function updatePersonalInfo() {
//     // Get profile picture URL and update the profile picture if the URL exists
//     // Show the Personal Information Heading and Formatting
//     const personalInformationHeading = document.getElementById("personalInformationHeading") as HTMLElement;
//     personalInformationHeading.style.display = "block";
//     // Update Personal Information
//    const personalInformation = document.getElementById("personalInformation") as HTMLElement;
//    personalInformation.innerHTML = `
//         <strong>Name: </strong>${firstName} ${lastName}<br>
//         <strong>Address: </strong>${address}<br>
//         <strong>LinkedIn: </strong><a href="${linkedin}" target="_blank">${linkedin}</a><br>
//         <strong>Phone No: </strong>${tel}<br>
//         <strong>Email: </strong>${email}`;
// }
// // Function to Update Education Information
// function updateEducation() {
//     // Show the Education Heading and Formatting
//     const educationHeading = document.getElementById("educationHeading") as HTMLElement;
//     educationHeading.style.display = "block";
//     // Update Education information
//     const educationDetails = document.getElementById("educationDetails") as HTMLElement;
//     educationDetails.innerHTML = `
//         <strong>School: </strong>${school}, ${schoolLocation}<br>
//         <strong>Degree: </strong>${degree}<br>
//         <strong>Field of Study: </strong>${fieldOfStudy}<br>
//         <strong>Graduation Date: </strong>${gradDate}`;
// }
// // Function to Update Experience Information
// function updateExperience() {
//     // If the checkbox of I currently work here is clikcked then it puts Present in the resume otherwise uses the inputed value
//     const endDate = isCurrentlyWorking ? "Present" : endDateInput
//      // If the checkbox of Remote is clikcked then it puts Remote in the resume otherwise uses the inputed value
//     const remoteStatus = isRemote ? "Remote" : location;
//     // Show the Experience Heading and Formatting
//     const experienceHeading = document.getElementById("experienceHeading") as HTMLElement;
//     experienceHeading.style.display = "block";
//     // Update experience information
//     const experienceDetails = document.getElementById("experienceDetails") as HTMLElement;
//     experienceDetails.innerHTML = `
//         <strong>Job Title:</strong> ${jobTitle}<br>
//         <strong>Employer:</strong> ${employer}<br>
//         <strong>Location:</strong> ${remoteStatus}<br>
//         <strong>Start Date:</strong> ${startDate}<br>
//         <strong>End Date:</strong> ${endDate}`;
// }
// // Function to Update Skills Information
// function updateSkills() {
//     // Show the Skills Heading and Formatting
//     const skillsHeading = document.getElementById("skillsHeading") as HTMLElement;
//     skillsHeading.style.display = "block";
//     // Update skills information
//     skillsList.innerHTML = `<span>${skill}</span>`
// }
