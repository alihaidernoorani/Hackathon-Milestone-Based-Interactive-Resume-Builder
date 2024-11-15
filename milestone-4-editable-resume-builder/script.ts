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
    const years = (document.getElementById("years") as HTMLInputElement)?.value;
    const isCurrentlyWorking = (document.getElementById("work") as HTMLInputElement)?.checked;
    const jobDescription = (document.getElementById("jobDescription") as HTMLInputElement)?.value;

    // Skills Information
    const skill = (document.getElementById("skill") as HTMLInputElement)?.value;

    // Profile picture processing
    const profilePictureFile = profilePicture.files?.[0];
    const profilePicHTML = profilePictureFile ? `<img src="${URL.createObjectURL(profilePictureFile)}" alt="Profile Picture" id="profilePic">` : '';

    // Experience details handling
    const remoteStatus = isRemote ? "Remote" : location;


    // Update the output container with formatted information
    form.style.display = 'none'; // Hide the form
    outputContainer.classList.remove("hidden"); // Show the resume section

    outputContainer.innerHTML = `
        <div id="profileContainer">
            <div id="profilePic">${profilePicHTML}</div>
            <h2 id="personalInformationHeading">Personal Information</h2>
            <p id="personalInformation">
                <strong>Name:</strong> <span id="editName" class="editable">${firstName} ${lastName}</span><br>
                <strong>Address:</strong> <span id="editAddress" class="editable">${address}</span><br>
                <strong>LinkedIn:</strong> <span id="editLinkedIn" class="editable"><a href="${linkedin}" target="_blank">${linkedin}</a></span><br>
                <strong>Phone No:</strong> <span id="editTel" class="editable">${tel}</span><br>
                <strong>Email:</strong> <span id="editEmail" class="editable">${email}</span>
            </p>
        </div>

        <div id="education">
            <h2 id="educationHeading">Education</h2>
            <p id="educationDetails">
                <strong><span id="editDegree" class="editable">${degree}</strong></span><br>    
                <span id="editSchool" class="editable">${school}, ${schoolLocation}, ${fieldOfStudy} </span><br>
                <span id="editGradDate" class="editable">${gradDate}</span>
            </p>
        </div>

        <div id="experience">
            <h2 id="experienceHeading">Experience</h2>
            <p id="experienceDetails">
                <strong><span id="editJobTitle" class="editable">${jobTitle}</span></strong> <br>
                <span id="editEmployer" class="editable">${employer}, ${remoteStatus}</span><br>
                <span id="editJobDate" class="editable">${years}</span><br>
                <span id="editJobDescription" class="editable">${jobDescription}</span><br>
            </p>
        </div>

        <div id="skills">
            <h2 id="skillsHeading">Skills</h2>
            <p id="skillsList"><span id="editSkill" class="editable">${skill}</span></p>
        </div>
    `;

    makeEditable(); // Enable editing functionality
});

// Function to make resume editable
function makeEditable() {
    // Select all elements with the class 'editable'
    const editableElements = document.querySelectorAll(".editable");

    // Loop through each element and add a click event listener
    editableElements.forEach(element => {
        element.addEventListener("click", () => {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Check if the current element is a <p> or <span>
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                // Create an input field
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;

                // Add blur event to save changes when the input loses focus
                inputField.addEventListener('blur', () => {
                    currentElement.textContent = inputField.value; // Save the new value
                    currentElement.style.display = "inline"; // Restore visibility
                    inputField.remove(); // Remove the input field
                });

                // Hide the current element and insert the input field
                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(inputField, currentElement);

                // Automatically focus on the input field for editing
                inputField.focus();
            }
        });
    });
}