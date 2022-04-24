// identify the logic and components that need go into each type of employee
// write logic to test for whether these employees contain the correct information using dummy variables/hard-coded examples
// create classes and methods for each of the employee types
// once it is confirmed that all types of employees can be constructed without error
// write a node generator function that uses inquirer to ask the user for required information
// then, output the collected information to generate employee objects
// transfer the employee objects to an array to make an HTML file
// do a mockup of the final HTML
// add a style.css file and/or implement boostrap for final page styling
// add validation (time permitting)

// requirements for each type of employee
// base employee constructor
    // name > expect any string
    // id > expect any number
    // email > expect any string (containing @)
    // getName() > returns name property
    // getID() > returns id property
    // getEmail
    // getRole() - returns "Employee" > returns staff role property, here is placeholder "employee" value
// extend for Manager
    // office number > expect any string
    // getRole() - returns "Manager" > returns staff role property
// extend for Engineer
    // github - github username > expect any string
    // getGitHub() > returns github.com/${github}
    //getRole() - returns "Engineer" > returns staff role property
// extend for Intern
    // school > expect any string
    // getSchool() > returns school property
    // getRole() - returns "Intern" > returns staff role property


    // return this.role || "employee" (or use the same logic as getInventory)