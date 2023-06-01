// class generateMarkdown {

  function renderLicenseBadge(license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    }
    return badges[license]
  };

  function renderLicenseLink(license) {
    const licenseLinks = {
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      apache: '[Apache](https://choosealicense.com/licenses/apache-2.0/)',
    }
    return licenseLinks[license]
  };

  function renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${renderLicenseLink(license)} license`
    } else {
      return ""
    }
  }

  function generateMarkdown(data) { //function
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Content 
  - [Project Description](#description)

  - [Usage](#usage)

  - [Contributing](#contributing)

  - [Installation](#installation)

  - [Questions](#questions)

  - [License](#license)
      
## Description
${data.description}
    
## Usage
${data.usage}
    
## Installation
${data.installation}
    
## Contributing
${data.contributing}
    
## Questions
[Contact Us](mailto:${data.email})

[My GitHub Link](https://github.com/${data.github})
    
 ## License
${renderLicenseSection(data.license)}
    `
   }


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string



 // // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
 
 

module.exports = generateMarkdown;
