// Personal Information Form
const personalForm = document.getElementById('personalInfoForm') as HTMLFormElement;
personalForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updatePersonalInfo(); // Runs the function to update the Personal Information section of the resume
});

// Education Form
const educationForm = document.getElementById('educationInfoForm') as HTMLFormElement;
educationForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateEducation(); // Runs the function to update the Education section of the resume
});

// Experience Form
const experienceForm = document.getElementById('experienceInfoForm') as HTMLFormElement;
experienceForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateExperience(); // Runs the function to update the Experience section of the resume
});

// Skills Form
const skillsForm = document.getElementById('skillsInfoForm') as HTMLFormElement;
skillsForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload
    updateSkills(); // Runs the function to update the Skills section of the resume
});

// Function to Update Personal Information
function updatePersonalInfo() {
    const profilePicture = document.getElementById("profilePicture") as HTMLInputElement;
    const firstName = (document.getElementById("firstName") as HTMLInputElement)?.value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement)?.value;
    const address = (document.getElementById("address") as HTMLInputElement)?.value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)?.value;
    const tel = (document.getElementById("tel") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;

    // Get profile picture URL and update the profile picture if the URL exists
    const profilePictureFile = profilePicture.files?.[0];
    const profilePic = document.getElementById("profilePic") as HTMLElement;
    profilePic.innerHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';
   
    // Show the Personal Information Heading and Formatting
    const personalInformationHeading = document.getElementById("personalInformationHeading") as HTMLElement;
    personalInformationHeading.style.display = "block";
    
    // Update Personal Information
   const personalInformation = document.getElementById("personalInformation") as HTMLElement;
   personalInformation.innerHTML = `
        <strong>Name: </strong>${firstName} ${lastName}<br>
        <strong>Address: </strong>${address}<br>
        <strong>LinkedIn: </strong><a href="${linkedin}" target="_blank">${linkedin}</a><br>
        <strong>Phone No: </strong>${tel}<br>
        <strong>Email: </strong>${email}`;
}

// Function to Update Education Information
function updateEducation() {
    const school = (document.getElementById("school") as HTMLInputElement)?.value;
    const schoolLocation = (document.getElementById("schoolLocation") as HTMLInputElement)?.value;
    const degree = (document.querySelector("select") as HTMLSelectElement)?.value;
    const fieldOfStudy = (document.getElementById("study") as HTMLInputElement)?.value;
    const gradDate = (document.getElementById("grad") as HTMLInputElement)?.value;

    // Show the Education Heading and Formatting
    const educationHeading = document.getElementById("educationHeading") as HTMLElement;
    educationHeading.style.display = "block";

    // Update Education information
    const educationDetails = document.getElementById("educationDetails") as HTMLElement;
    educationDetails.innerHTML = `
        <strong>School: </strong>${school}, ${schoolLocation}<br>
        <strong>Degree: </strong>${degree}<br>
        <strong>Field of Study: </strong>${fieldOfStudy}<br>
        <strong>Graduation Date: </strong>${gradDate}`;
}

// Function to Update Experience Information
function updateExperience() {
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)?.value;
    const employer = (document.getElementById("employer") as HTMLInputElement)?.value;
    const location = (document.getElementById("location") as HTMLInputElement)?.value;
    const isRemote = (document.getElementById("remote") as HTMLInputElement)?.checked;
    const startDate = (document.getElementById("start") as HTMLInputElement)?.value;
    const endDateInput = (document.getElementById("end") as HTMLInputElement)?.value;
    const isCurrentlyWorking = (document.getElementById("work") as HTMLInputElement)?.checked;

    // If the checkbox of I currently work here is clikcked then it puts Present in the resume otherwise uses the inputed value
    const endDate = isCurrentlyWorking ? "Present" : endDateInput

     // If the checkbox of Remote is clikcked then it puts Remote in the resume otherwise uses the inputed value
    const remoteStatus = isRemote ? "Remote" : location;

    // Show the Experience Heading and Formatting
    const experienceHeading = document.getElementById("experienceHeading") as HTMLElement;
    experienceHeading.style.display = "block";

    // Update experience information
    const experienceDetails = document.getElementById("experienceDetails") as HTMLElement;
    experienceDetails.innerHTML = `
        <strong>Job Title:</strong> ${jobTitle}<br>
        <strong>Employer:</strong> ${employer}<br>
        <strong>Location:</strong> ${remoteStatus}<br>
        <strong>Start Date:</strong> ${startDate}<br>
        <strong>End Date:</strong> ${endDate}`;
}

// Function to Update Skills Information
function updateSkills() {
    // Show the Skills Heading and Formatting
    const skillsHeading = document.getElementById("skillsHeading") as HTMLElement;
    skillsHeading.style.display = "block";

    // Update skills information
    const skill = (document.getElementById("skill") as HTMLInputElement)?.value;
    const skillsList = document.getElementById("skillsList") as HTMLElement;
    skillsList.innerHTML = `<span>${skill}</span>`
}
