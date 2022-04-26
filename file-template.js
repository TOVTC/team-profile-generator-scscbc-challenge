function renderCustom(res) {
    function isCustom(item) {
        return item.role === "Custom";
    }
    custArr = res.filter(isCustom);
    if (custArr) {
        return `
        <!--Extended Team-->
        <h2 class="text-center mt-5 my-5">Extended Team</h2>
        <div class="row">
            <div class="col d-flex flex-wrap justify-content-center mb-5">
            ${custArr.map(item => {
                return `<!--New Extended Team Card-->
                <div class="card d-flex flex-column justify-content-between m-4 bg-info custom">
                    <h3 class="card.title m-4 text-white">
                        <i class="bi bi-person"></i>
                        ${item.getName()}
                    </h3>
                    <ul class="card-text list-group m-3 text-info bg-white">
                        <li class="list-group-item border-0">ID: ${item.getID()}</li>
                        <li class="list-group-item border-0">Email: ${item.getEmail()}</li>
                        <li class="list-group-item border-0">Role: ${item.getTask()}</li>
                    </ul>
                </div>`
            })}
            </div>
        </div>`
    } else {
        return "";
    }
}

function renderInterns(res) {
    function isIntern(item) {
        return item.role === "Intern";
    }
    intArr = res.filter(isIntern);
    if (intArr) {
        return `
        <!--Interns-->
        <h2 class="text-center mt-5 my-5">Interns</h2>
        <div class="row">
            <div class="col d-flex flex-wrap justify-content-center mb-5">
            ${intArr.map(item => {
                return `<!--New Intern Card-->
                <div class="card d-flex flex-column justify-content-between m-4 bg-success custom">
                    <h3 class="card.title m-4 text-white">
                        <i class="bi bi-journal-bookmark-fill"></i>
                        ${item.getName()}
                    </h3>
                    <ul class="card-text list-group m-3 text-success bg-white">
                        <li class="list-group-item border-0">ID: ${item.getID()}</li>
                        <li class="list-group-item border-0">Email: ${item.getEmail()}</li>
                        <li class="list-group-item border-0">School: ${item.getSchool()}</li>
                    </ul>
                </div>`
            })}
            </div>
        </div>`
    } else {
        return "";
    }
}

function renderEngineers(res) {
    function isEngineer(item) {
        return item.role === "Engineer";
    }
    engArr = res.filter(isEngineer);
    if (engArr) {
        return `
        <!--Engineers-->
        <h2 class="text-center mt-5 my-5">Engineers</h2>
        <div class="row">
            <div class="col d-flex flex-wrap justify-content-center mb-5">
                ${engArr.map(item => {
                    return `<!--New Engineer Card-->
                    <div class="card d-flex flex-column justify-content-between m-4 bg-primary custom">
                        <h3 class="card.title m-4 text-white">
                            <i class="bi bi-file-earmark-code"></i>
                            ${item.getName()}
                        </h3>
                        <ul class="card-text list-group m-3 text-primary bg-white">
                            <li class="list-group-item border-0">ID: ${item.getID()}</li>
                            <li class="list-group-item border-0">Email: ${item.getEmail()}</li>
                            <li class="list-group-item border-0">GitHub: ${item.getGitHub()}</li>
                        </ul>
                    </div>`
                })}
            </div>
        </div>
        `
    } else {
        return "";
    }
}

module.exports = res => {
    function isManager(item) {
        return item.role === "Manager";
    }    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css"/>
        <title>Meet Our Team</title>
    </head>
    <body>
        <header class="d-flex flex-column justify-content-around bg-warning">
            <h1 class="text-center">
                Meet Our Team
            </h1>
        </header>
        <main>
            <div class="container py-3">
                <!--Managers-->
                <h2 class="text-center mt-5 my-5">Managers</h2>
                <div class="row">
                    <div class="col d-flex flex-wrap justify-content-center mb-5">
                    ${res.filter(isManager)
                        .map(item => {
                            return `
                            <!--New Manager Card-->
                            <div class="card d-flex flex-column justify-content-between m-4 bg-danger custom">
                                <h3 class="card.title m-4 text-white">
                                    <i class="bi bi-people-fill"></i>
                                    ${item.getName()}
                                </h3>
                                <ul class="card-text list-group m-3 text-danger bg-white">
                                    <li class="list-group-item border-0">ID: ${item.getID()}</li>
                                    <li class="list-group-item border-0">Email: ${item.getEmail()}</li>
                                    <li class="list-group-item border-0">Office Number: ${item.getOffice()}</li>
                                </ul>
                            </div>`
                        })}
                    </div>
                </div>
                ${renderEngineers(res)}
                ${renderInterns(res)}
                ${renderCustom(res)}
            </div>
        </main>
    </body>
    </html>` 
}