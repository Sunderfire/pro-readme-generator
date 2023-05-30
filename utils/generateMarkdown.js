//License Badge/Link Function
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
//License Section function
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

//Generate Markdown Function
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ##Table of Contents
  
  [Installation](#installation)

  [Usage](#usage)
  
  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)
  
  [Questions](#questions)

  <a id=#installation></a>
  ## Installation
  ${data.installation}

  <a id=#usage></a>
  ## Usage
  ${data.usage}

  <a id=#license></a>
  ## License
  ${renderLicenseSection(data.license)}

  <a id=#contributing></a>
  ## Contributing
  ${data.contributing}

  <a id=#tests></a>
  ## Tests
  ${data.tests}

  <a id=#questions></a>
  ## Questions
  [GitHub](https://github.com/${data.question1})
  
  You can reach me at ${data.question2}
`;
}

//Function Export
module.exports = generateMarkdown;
