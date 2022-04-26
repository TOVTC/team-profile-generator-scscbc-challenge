function renderCustom(res) {
    function isCustom(item) {
        return item.role === "Custom";
    }
    custArr = res.filter(isCustom);
    if (custArr.length > 0) {
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
                        <li class="list-group-item border-0"><i class="bi bi-person-badge"></i> ID: ${item.getID()}</li>
                        <li class="list-group-item border-0"><i class="bi bi-envelope"></i> Email: <a href="mailto:${item.getEmail()}" class="text-reset link-info">${item.getEmail()}</a></li>
                        <li class="list-group-item border-0"><i class="bi bi-emoji-sunglasses"></i> Role: ${item.getTask()}</li>
                    </ul>
                </div>`
            })
            .join("")}
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
    if (intArr.length > 0) {
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
                        <li class="list-group-item border-0"><i class="bi bi-person-badge"></i> ID: ${item.getID()}</li>
                        <li class="list-group-item border-0"><i class="bi bi-envelope"></i> Email: <a href="mailto:${item.getEmail()}" class="text-reset link-success">${item.getEmail()}</a></li>
                        <li class="list-group-item border-0"><i class="bi bi-book"></i> School: ${item.getSchool()}</li>
                    </ul>
                </div>`
            })
            .join("")}
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
    if (engArr.length > 0) {
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
                            <li class="list-group-item border-0"><i class="bi bi-person-badge"></i> ID: ${item.getID()}</li>
                            <li class="list-group-item border-0"><i class="bi bi-envelope"></i> Email: <a href="mailto:${item.getEmail()}" class="text-reset link-primary">${item.getEmail()}</a></li>
                            <li class="list-group-item border-0"><i class="bi bi-github"></i> GitHub: <a href="https://github.com/${item.getGitHub()}" target="_blank" class="text-reset link-primary">${item.getGitHub()}</a></li>
                        </ul>
                    </div>`
                })
                .join("")}
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
        <link rel="stylesheet" href="./src/style.css"/>
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
                                    <li class="list-group-item border-0"><i class="bi bi-person-badge"></i> ID: ${item.getID()}</li>
                                    <li class="list-group-item border-0"><i class="bi bi-envelope"></i> Email: <a href="mailto:${item.getEmail()}" class="text-reset link-danger">${item.getEmail()}</a></li>
                                    <li class="list-group-item border-0"><i class="bi bi-building"></i> Office: ${item.getOffice()}</li>
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
        <footer class="d-flex flex-column justify-content-around text-right bg-warning">
        <p class="m-5">
            &copy; ${new Date().getFullYear()}
        </p>
    </footer>
    </body>
    </html>` 
}