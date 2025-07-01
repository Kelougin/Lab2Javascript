/*
Nathan Page
Jeremy Rocha
Beatrice Duffield
 */
const output = document.getElementById('output'); //Target Element

//Function for creating an applicant using the following parameters
function Applicant(name, location, role, experience, education, skills,
                   certifications, languages, url, relocate, remote, soft, internship){
    this.name= name; //Variable for name
    this.location = location; //Variable for location
    this.role = role; //Variable for role
    this.experience = experience; //Variable for experience
    this.education = education; //Variable for education
    this.skills = skills; //Variable for skills
    this.certifications = certifications; //Variable for certifications
    this.languages = languages; //Variable for languages
    this.url = url; //Variable for url
    this.relocate = relocate; //Variable for relocation
    this.remote = remote; //Variable for remote
    this.soft = soft; //Variable for soft skills
    this.internship = internship; //Variable for internship
    this.desc = function(){
        return `Applicants Name: ${this.name} Location: ${this.location} Role: ${this.role} Experience: ${this.experience} Education: ${this.education} Skills: ${this.skills.join(", ")}
        Certifications: ${this.certifications.join(", ")} Languages: ${this.languages.join(", ")} Portfolio ${this.url} Willing to Relocate: ${this.relocate}
        Remote Preferred ${this.remote}, Soft Skills: ${this.soft.join(", ")} Internship: ${this.internship}`;
        //Returns the value of the applicant
    }

}

//Creates an applicant
let applicant1 = new Applicant("Sofia Ramires", "Calgary, AB", "Environmental Science", 1,
"Environmental Science University of Calgary", ["GIS", "Field Sampling", "Data Logging"], ["WHMIS"], ["English, Spanish"],
    null, true, false, ["Curiosity", "Organizational Skills"], true)

output.textContent = applicant1.desc() //Outputs the applicants information