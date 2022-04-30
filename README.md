
  # Team Profile Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</br>
    
  This application uses Node.js to generate a staff profile page, categorizing staff as managers, engineers, interns, or extended team members. A card is generated for each team member, listing the member's name, ID number, email, and an additional piece of information. This project was built using Test-Driven Development and Object Oriented Programming principles.
  
  ## Table of Contents
  * [Bonus Features](#features)
  * [Built With](#built)
  * [Installation](#installation)
  * [Usage Information](#usage)
  * [Authors & Acknowledgements](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Contact](#questions)
  
  ## Bonus Features<a name="features"></a>
  This application allows for users to additionally generate custom team member profiles, under an "Extended Members" category.</br>
  This application also includes formatting validation for Inquirer prompts.

  ## Built With<a name="built"></a>
  * HTML
  * CSS
  * JavaScript
  * Bootstrap
  * Node.js
  * NPM Inquirer
  * Jest
    
  ## Installation <a name="installation"></a>
  After cloning the repository and ensuring that Node.js and npm Inquirer are installed, enter "node index.js" in the terminal to get started. After all the prompts have been answered, HTML and CSS files will be written to the "./dist" and "./dist/assets/css" directories.
  
  ## Usage Information<a name="usage"></a>
  This application has preset Manager, Engineer, and Intern categories. Custom team members will be assigned to the "Extended Members" category.</br></br>
  For index.html files generated with this application, the custom CSS stylesheet is linked using the standard "./assets/css/style.css" reference. For the "index-sample.html" file in this repository's root directory, this path has been manually edited to link to the "./src/style.css" path for easy preview.</br></br>
  Video walkthrough of how to use this application, [here](https://drive.google.com/drive/folders/1JYhoou6Zia4QPHW4leLDnAACOLoFw9SU?usp=sharing).</br>
  </br>![Team Profile Generator](./team-generator-cli.png "Team Profile Generator")</br>
  </br>![Team Profile Generator](./team-generator-page.png "Team Profile Generator")</br>
    
  ## Authors & Acknowledgements<a name="credits"></a>
  As with all projects, external resources were consulted, but special thanks to:</br>
  Amitabh [here](https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8) for his regex email formatting validation.</br>
  Sayantini's article [here](https://www.edureka.co/blog/javascript-regex/) for the explainer on regex.</br></br>
  And [Erik](https://github.com/CodingErik) for his office hours pointers on how to refactor the promise chain in index.js to be more streamlined (also the reminder that switch statements exist).
  Made by [TOVTC](https://github.com/TOVTC).</br>
  Originally submitted 2022Apr26.
  
  ## License<a name="license"></a>
  This application uses the MIT License. For more information regarding usage, please visit [this link](https://opensource.org/licenses/MIT).
  
  ## Tests<a name="tests"></a>
  Jest tests were conducted on all employee-class-based objects (employee, manager, engineer, intern, custom), to validate user input, object rendering, and data retrieval.
    
  ## Questions?<a name="questions"></a>
  Contact repository author via [GitHub](https://github.com/TOVTC).</br>
  
  ## Assignment Information - Object-Oriented Programming Challenge: Team Profile Generator
  ### User Story
  AS A manager</br>
  I WANT to generate a webpage that displays my team's basic info</br>
  SO THAT I have quick access to their emails and GitHub profiles

  ### Acceptance Criteria
  GIVEN a command-line application that accepts user input</br>
  WHEN I am prompted for my team members and their information</br>
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input</br>
  WHEN I click on an email address in the HTML</br>
  THEN my default email program opens and populates the TO field of the email with the address</br>
  WHEN I click on the GitHub username</br>
  THEN that GitHub profile opens in a new tab</br>
  WHEN I start the application</br>
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number</br>
  WHEN I enter the team manager’s name, employee ID, email address, and office number</br>
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team</br>
  WHEN I select the engineer option</br>
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu</br>
  WHEN I select the intern option</br>
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu</br>
  WHEN I decide to finish building my team</br>
  THEN I exit the application, and the HTML is generated</br>