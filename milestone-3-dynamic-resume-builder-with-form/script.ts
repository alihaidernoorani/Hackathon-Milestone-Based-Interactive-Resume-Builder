// Get form and output elements
const form = document.getElementById("formSection") as HTMLFormElement;
const outputContainer = document.getElementById("resumeSection") as HTMLDivElement;

// Event listener for form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect all form data
    // Personal Information
    const profilePicture = document.getElementById("profilePicture") as HTMLInputElement;
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const tel = (document.getElementById("tel") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    // Education Information
    const school = (document.getElementById("school") as HTMLInputElement)?.value;
    const schoolLocation = (document.getElementById("schoolLocation") as HTMLInputElement)?.value;
    const degree = (document.querySelector("select") as HTMLSelectElement)?.value;
    const fieldOfStudy = (document.getElementById("study") as HTMLInputElement)?.value;
    const gradDate = (document.getElementById("grad") as HTMLInputElement)?.value;

    // Experience Information
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)?.value;
    const employer = (document.getElementById("employer") as HTMLInputElement)?.value;
    const location = (document.getElementById("location") as HTMLInputElement)?.value;
    const isRemote = (document.getElementById("remote") as HTMLInputElement)?.checked;
    const startDate = (document.getElementById("start") as HTMLInputElement)?.value;
    const endDateInput = (document.getElementById("end") as HTMLInputElement)?.value;
    const isCurrentlyWorking = (document.getElementById("work") as HTMLInputElement)?.checked;

    // Skills Information
    const skill = (document.getElementById("skill") as HTMLInputElement)?.value;

    // Profile picture processing
    const profilePictureFile = profilePicture.files?.[0];
    const profilePicHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';

    // Experience details handling
    const endDate = isCurrentlyWorking ? "Present" : endDateInput;
    const remoteStatus = isRemote ? "Remote" : location;

    // Update the output container with formatted information
    form.style.display = 'none'; // Hide the form
    outputContainer.classList.remove("hidden"); // Show the resume section

    outputContainer.innerHTML = `
        <div id="profileContainer">
            <div id="profilePic">${profilePicHTML}</div>
            <h2 id="personalInformationHeading">Personal Information</h2>
            <p id="personalInformation">
                <strong>Name:</strong> ${firstName} ${lastName}<br>
                <strong>Address:</strong> ${address}<br>
                <strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a><br>
                <strong>Phone No:</strong> ${tel}<br>
                <strong>Email:</strong> ${email}
            </p>
        </div>

        <div id="education">
            <h2 id="educationHeading">Education</h2>
            <p id="educationDetails">
                <strong>School:</strong> ${school}, ${schoolLocation}<br>
                <strong>Degree:</strong> ${degree}<br>
                <strong>Field of Study:</strong> ${fieldOfStudy}<br>
                <strong>Graduation Date:</strong> ${gradDate}
            </p>
        </div>

        <div id="experience">
            <h2 id="experienceHeading">Experience</h2>
            <p id="experienceDetails">
                <strong>Job Title:</strong> ${jobTitle}<br>
                <strong>Employer:</strong> ${employer}<br>
                <strong>Location:</strong> ${remoteStatus}<br>
                <strong>Start Date:</strong> ${startDate}<br>
                <strong>End Date:</strong> ${endDate}
            </p>
        </div>

        <div id="skills">
            <h2 id="skillsHeading">Skills</h2>
            <p id="skillsList">${skill}</p>
        </div>
    `;
})

