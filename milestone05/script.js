// Get references to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('user-name').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skill').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2 style=\"text-align:center\">-:Shareable Resume:-</h2>\n<p> <fieldset> <legend> Personal Information: </legend>\n<strong>Name:</strong> &nbsp &nbsp <span contentediatable=\"true\">".concat(name, "</span></p>\n<p><strong>Email:</strong> &nbsp &nbsp <span contentediatable=\"true\">").concat(email, "</span></p>\n<p><strong>Contact: </strong> &nbsp &nbsp <span contentediatable=\"true\">").concat(phone, "</span> </p>\n </fieldset> \n\n <fieldset> \n <legend> Education: </legend>\n<h3>Education:</h3>\n<p contentediatable=\"true\">").concat(education, "</p>\n</fieldset> \n\n<fieldset>\n <legend> Experience: </legend>\n\n<h3>Experience:</h3>\n<p contentediatable=\"true\">").concat(experience, "</p>\n</fieldset>\n<fieldset>\n\n<h3>Skills:</h3>\n<legend>Skills: </legend>\n\n<p contentediatable=\"true\">").concat(skills, "</p>\n</fieldset>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?user-name=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('user-name');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('user-name').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
