// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'MPL 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  
  } else if (license === 'ODC BY') {
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  
  } else if (license === 'Apache 2.0') {  
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
  return '(https://opensource.org/licenses/MIT)';

} else if (license === 'MPL 2.0') {
  return '(https://opensource.org/licenses/MPL-2.0)';

} else if (license === 'ODC BY') {
  return '(https://opendatacommons.org/licenses/by/)'
} else if (license === 'ISC') {
  return '(https://opensource.org/licenses/ISC)';

} else if (license === 'Apache 2.0') {  
  return '(https://opensource.org/licenses/Apache-2.0)';
} else {
  return '';
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'This application does not have a license') {
    return 'This project does not have a license.'
  } else {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}
  
  This project is licensed under the terms of the ${license} license.`;
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 

  # ${data.name}
 
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
 
  ## Table of Contents
  
  [Description](#description)

  [Installation](#installation)
  
  [Usage](#usage)

  [Contribute](#contribute)

  [Test](#test)
  
  [Credits](#credits)
  
  [License](#license)

  [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ![alt text](./screencap1.PNG)
  ![alt text](./screencap2.PNG)
  
  ## Contribute
  ${data.contribution}

  [GitHub Repo: (https://github.com/)]

  ## Test
  ${data.test}
  
  ## Credits
  ${data.credits}

  ## License
  
  ${renderLicenseSection(data.license)}

  ## Questions?

  Contact me at:

  GitHub: https://github.com/${data.GitHub}
  
  email: ${data.email}
  
`;
}

module.exports = generateMarkdown;