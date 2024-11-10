"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Get form and output elements
const form = document.getElementById("formSection");
const outputContainer = document.getElementById("resumeSection");
// Event listener for form submission
form.addEventListener("submit", (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    event.preventDefault(); // Prevent page reload
    // Collect all form data
    // Personal Information
    const profilePicture = document.getElementById("profilePicture");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    // Education Information
    const school = (_a = document.getElementById("school")) === null || _a === void 0 ? void 0 : _a.value;
    const schoolLocation = (_b = document.getElementById("schoolLocation")) === null || _b === void 0 ? void 0 : _b.value;
    const degree = (_c = document.querySelector("select")) === null || _c === void 0 ? void 0 : _c.value;
    const fieldOfStudy = (_d = document.getElementById("study")) === null || _d === void 0 ? void 0 : _d.value;
    const gradDate = (_e = document.getElementById("grad")) === null || _e === void 0 ? void 0 : _e.value;
    // Experience Information
    const jobTitle = (_f = document.getElementById("jobTitle")) === null || _f === void 0 ? void 0 : _f.value;
    const employer = (_g = document.getElementById("employer")) === null || _g === void 0 ? void 0 : _g.value;
    const location = (_h = document.getElementById("location")) === null || _h === void 0 ? void 0 : _h.value;
    const isRemote = (_j = document.getElementById("remote")) === null || _j === void 0 ? void 0 : _j.checked;
    const years = (_k = document.getElementById("years")) === null || _k === void 0 ? void 0 : _k.value;
    const isCurrentlyWorking = (_l = document.getElementById("work")) === null || _l === void 0 ? void 0 : _l.checked;
    const jobDescription = (_m = document.getElementById("jobDescription")) === null || _m === void 0 ? void 0 : _m.value;
    // Skills Information
    const skill = (_o = document.getElementById("skill")) === null || _o === void 0 ? void 0 : _o.value;
    // Profile picture processing
    const profilePictureFile = (_p = profilePicture.files) === null || _p === void 0 ? void 0 : _p[0];
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
            var _a;
            const currentElement = element;
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
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(inputField, currentElement);
                // Automatically focus on the input field for editing
                inputField.focus();
            }
        });
    });
}
// Create container for the buttons
const buttonsContainer = document.getElementById("buttonsContainer");
// Add Download PDF button
const downloadButton = document.createElement('button');
downloadButton.textContent = "Download PDF";
downloadButton.addEventListener("click", () => {
    window.print();
});
buttonsContainer.appendChild(downloadButton);
// Create a shareable link button
const shareableLinkButton = document.createElement('button');
shareableLinkButton.textContent = "Shareable Link";
// Add click event listener to generate the link and copy it
shareableLinkButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Get the username dynamically when the button is clicked
    const username = (_a = document.getElementById("username")) === null || _a === void 0 ? void 0 : _a.value;
    if (username) {
        const uniqueName = username.replace(/\s+/g, '-').toLowerCase();
        const shareableLink = `https://${uniqueName}.vercel.app/resume`;
        try {
            yield navigator.clipboard.writeText(shareableLink);
            alert("Link copied to clipboard!");
        }
        catch (error) {
            console.error("Failed to copy link:", error);
        }
    }
    else {
        alert("Username is required to generate a shareable link.");
    }
}));
buttonsContainer.appendChild(shareableLinkButton);
