//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){

event.preventDefault()


//type assertion


const nameElement =document.getElementById('name') as HTMLInputElement;
const emailElement =document.getElementById('email') as HTMLInputElement;
const phoneElement =document.getElementById('phone') as HTMLInputElement;
const educationElement =document.getElementById('education') as HTMLInputElement;
const experienceElement =document.getElementById('experience') as HTMLInputElement;
const skillElement =document.getElementById('skill') as HTMLInputElement;



if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
const name = nameElement.value
const email = emailElement.value
const phone = phoneElement.value
const education = educationElement.value
const experience=  experienceElement.value
const skill = skillElement.value



//create resume output


const resumeOutput = `<h2 style="text-align:center">-:Dynamic Resume:-</h2>
<p> <fieldset> <legend> Personal Information: </legend>
<strong>Name:</strong> &nbsp &nbsp ${name}</p>
<p><strong>Email:</strong> &nbsp &nbsp ${email}</p>
<p><strong>Contact: </strong> &nbsp &nbsp ${phone} </p>
 </fieldset> 

 <fieldset> 
 <legend> Education: </legend>
<h3>Education:</h3>
<p>${education}</p>
</fieldset> 

<fieldset>
 <legend> Experience: </legend>

<h3>Experience:</h3>
<p>${experience}</p>
</fieldset>
<fieldset>

<h3>Skills:</h3>
<legend> Skills: </legend>

<p>${skill}</p>
</fieldset>
`




const resumeOutputElement = document.getElementById('resumeOutput')

if(resumeOutputElement){
    resumeOutputElement.innerHTML=resumeOutput
}else{
    console.error("The resume output element are missing")
}

}else{
    console.error("One or more elements output are missing")
}
})