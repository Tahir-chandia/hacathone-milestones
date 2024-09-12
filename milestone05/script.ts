// Get references to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as
HTMLDivElement;

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;


const shareableLinkElement = document.getElementById('shareable-link') as

HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as

HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload

// Collect input values
const username = (document.getElementById('user-name') as HTMLInputElement).value;
const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLTextAreaElement).value;
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
const skills = (document.getElementById('skill') as HTMLTextAreaElement).value;

// Save form data in localStorage with the username as the key
const resumeData = {
name,
email,
phone,
education,
experience,
skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically

const resumeHTML = `
<h2 style="text-align:center">-:Shareable Resume:-</h2>
<p> <fieldset> <legend> Personal Information: </legend>
<strong>Name:</strong> &nbsp &nbsp <span contentediatable="true">${name}</span></p>
<p><strong>Email:</strong> &nbsp &nbsp <span contentediatable="true">${email}</span></p>
<p><strong>Contact: </strong> &nbsp &nbsp <span contentediatable="true">${phone}</span> </p>
 </fieldset> 

 <fieldset> 
 <legend> Education: </legend>
<h3>Education:</h3>
<p contentediatable="true">${education}</p>
</fieldset> 

<fieldset>
 <legend> Experience: </legend>

<h3>Experience:</h3>
<p contentediatable="true">${experience}</p>
</fieldset>
<fieldset>

<h3>Skills:</h3>
<legend>Skills: </legend>

<p contentediatable="true">${skills}</p>
</fieldset>
`

// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;

// Generate a shareable URL with the username only
const shareableURL =`${window.location.origin}?user-name=${encodeURIComponent(username)}`;

// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('user-name');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('user-name') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});