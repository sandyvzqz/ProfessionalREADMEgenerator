//creates a badge based off user input
function makeBadge(license) {
  let badge= "";
  if (license !== "none") {
    //badge = `[Github license](https://shields.io/badge/license-${license}-blue)`;
    badge = `[Github license](https://img.shields.io/badge/license-` +license+ `-blue)`;
  }
  return badge;
}

//function for link to license description/rights
function licenseLink(license){
  let licenseLink;
  //used switch statement vs. if-else statements
  switch(license){
    case "MIT_license":
      licenseLink = "https://mit-license.org/";
      break;
    case "GNU_GPLv3":
      licenseLink= "https://www.gnu.org/licenses/gpl-3.0.en.html#license-text";
      break;
    case "Apache_License_2.0":
      licenseLink= "https://www.apache.org/licenses/LICENSE-2.0.txt";
      break;
    default:
      licenseLink= "";
      break;
  }
  return licenseLink;
}

const generateMarkdown = 
  ({title, description, installation, usage, contribution, license, testing, contactMe, github, email}) =>
`#${title} README file
-[License Badge]${makeBadge(license)}

##[Description]
${description}
---
##[Table Of Contents]
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Testing](#testing)
-[Contact Me](#contactMe)
-[License](#license)
---
##[Installation]
${installation}

##[Usage]
${usage}

##[Contribution]
${contribution}

##[Testing]
${testing}

##[Contact Me]
${contactMe}
My GitHub project repository is ${github}.
My current email address is ${email}.

##[License]
If you want to learn more about the license rights, please click this link ${licenseLink(license)}.
`

module.exports = generateMarkdown;