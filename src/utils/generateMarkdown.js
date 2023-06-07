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

  function generateMarkdown(data) { 
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Content 
  - [Project Description](#description)

  - [Usage](#usage)

  - [Contributing](#contributing)

  - [Tests](#tests)

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

## Tests
${data.tests}
    
## Questions
[Contact Us](mailto:${data.email})

[My GitHub Link](https://github.com/${data.github})
    
 ## License
${renderLicenseSection(data.license)}
    `
   }

module.exports = generateMarkdown;
