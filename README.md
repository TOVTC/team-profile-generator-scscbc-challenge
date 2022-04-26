
  # Team Profile Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</br></br>
    
  This application uses Node.js to generate a staff profile page, categorizing team members as managers, engineers, interns, or extended team members. A card is generated for each team member, listing the member's name, ID number, email, and an additional piece of information. This project was built using Test-Driven Development and Object Oriented Programming principles.
  
  ## Table of Contents
  * [Bonus Features](#features)
  * [Installation](#installation)
  * [Usage Information](#usage)
  * [Authors & Acknowledgements](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Contact](#questions)
  
  ## Bonus Features<a name="features"></a>
  This application allows for users to additionally generate custom team member profiles, under an "Extended Members" category.</br>
  This application also includes formatting validation for Inquirer prompts.
    
  ## Installation <a name="installation"></a>
  After cloning the repository and ensuring that Node.js and npm Inquirer are installed, enter "node index.js" in the terminal to get started. After all the prompts have been answered, HTML and CSS files will be written to the "./dist" and "./dist/assets/css" directories.
  
  ## Usage Information<a name="usage"></a>
  This application has preset Manager, Engineer, and Intern categories. Custom team members will be assigned to the "Extended Members" category.</br>
  </br>![Team Profile Generator](./team-generator-cli.png "Team Profile Generator")</br>
  </br>![Team Profile Generator](./team-generator-page.png "Team Profile Generator")</br>
    
  ## Authors & Acknowledgements<a name="credits"></a>
  As with all projects, external resources were consulted, but special thanks to:</br>
  Amitabh [here](https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8) for his regex email formatting validation.</br>
  as well as Sayantini's article [here](https://www.edureka.co/blog/javascript-regex/) for the explainer on regex.</br>
  Made by [TOVTC](https://github.com/TOVTC).</br></br>
  Originally submitted 2022Apr26.
  
  ## License<a name="license"></a>
  This application uses the MIT License. For more information regarding usage, please visit [this link](https://opensource.org/licenses/MIT).
  
  ## Tests<a name="tests"></a>
  Jest tests were conducted on all employee-class-based objects (employee, manager, engineer, intern, custom).
    
  ## Questions?<a name="questions"></a>
  Contact repository author via [GitHub](https://github.com/TOVTC).</br>
  