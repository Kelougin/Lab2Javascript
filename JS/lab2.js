const output = document.getElementById('output');

function Applicant(name, location, role, experience, education, skills,
                   certifications, languages, url, relocate, remote, soft, internship){
    this.name= name;
    this.location = location;
    this.role = role;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
    this.certifications = certifications;
    this.languages = languages;
    this.url = url;
    this.relocate = relocate;
    this.remote = remote;
    this.soft = soft;
    this.internship = internship;
    this.desc = function(){
        return `Applicants Name: ${this.name} Location: ${this.location} Role: ${this.role} Experience: ${this.experience} Education: ${this.education} Skills: ${this.skills.join(", ")}
        Certifications: ${this.certifications.join(", ")} Languages: ${this.languages.join(", ")} Portfolio ${this.url} Willing to Relocate: ${this.relocate}
        Remote Preferred ${this.remote}, Soft Skills: ${this.soft.join(", ")} Internship: ${this.internship}`;
    }

}

let applicant1 = new Applicant("Sofia Ramires", "Calgary, AB", "Environmental Science", 1,
"Environmental Science University of Calgary", ["GIS", "Field Sampling", "Data Logging"], ["WHMIS"], ["English, Spanish"],
    null, true, false, ["Curiosity", "Organizational Skills"], true)

output.textContent = applicant1.desc()