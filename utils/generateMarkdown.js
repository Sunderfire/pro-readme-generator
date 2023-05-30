// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    default:
      return 'none';
  };
}

function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return `This application is covered under the MIT license`
    case 'Apache':
      return `This application is covered under the Apache license`
    case 'Eclipse':
      return `This application is covered under the Eclipse license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ##Table of Contents
  
  [Installation](#installation)

  [Usage](#usage)
  
  [Tests](#tests)

  [License](#license)

  <a id=#installation></a>
  ## Installation
  ${data.installation}

  <a id=#usage></a>
  ## Usage
  ${data.usage}

  <a id=#license></a>
  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  <a id=#tests></a>
  ## Tests
  ${data.tests}

  ## Questions
  [GitHub](https://github.com/${data.question1})
  
  You can reach me at ${data.question2}
`;
}

module.exports = generateMarkdown;
