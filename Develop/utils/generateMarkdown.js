class generateMarkdown {

  static renderLicenseBadge(license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnugplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    }
    return badges[license]
  };

  static renderLicenseLink(license) {
    const licenseLinks = {
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      gnugplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    }
    return licenseLinks[license]
  };

  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license`
    } else {
      return ""
    }
  }

  static generateMarkdown(data) { //function
    return `
# ${data.title}

${this.renderLicenseBadge(data.license)}
    
## Table of Content 
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)
      
## Description
${data.description}
    
## Usage
${data.usage}
    
## Installation
${data.installation}
    
## Contributing
${data.contributing}
    
## Questions
${data.email}
${data.github}
    
 ## License
${this.renderLicenseSection(data.license)}
    `
   }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string



 // // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
 
 

module.exports = generateMarkdown;
