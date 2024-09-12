var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        //create resume output
        var resumeOutput = "<h2 style=\"text-align:center\">-:Editable Resume:-</h2>\n<p> <fieldset> <legend> Personal Information: </legend>\n<strong>Name:</strong> &nbsp &nbsp <span contentediatable=\"true\">".concat(name_1, "</span></p>\n<p><strong>Email:</strong> &nbsp &nbsp <span contentediatable=\"true\">").concat(email, "</span></p>\n<p><strong>Contact: </strong> &nbsp &nbsp <span contentediatable=\"true\">").concat(phone, "</span> </p>\n </fieldset> \n\n <fieldset> \n <legend> Education: </legend>\n<h3>Education:</h3>\n<p contentediatable=\"true\">").concat(education, "</p>\n</fieldset> \n\n<fieldset>\n <legend> Experience: </legend>\n\n<h3>Experience:</h3>\n<p contentediatable=\"true\">").concat(experience, "</p>\n</fieldset>\n<fieldset>\n\n<h3>Skills:</h3>\n<legend>Skills: </legend>\n\n<p contentediatable=\"true\">").concat(skill, "</p>\n</fieldset>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element are missing");
        }
    }
    else {
        console.error("One or more elements output are missing");
    }
});
