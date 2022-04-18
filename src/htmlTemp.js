const Supervisor = require("../lib/Manager")

const genHtmlTemplate = employeeCards => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Team Roster</title>
</head>
<body>
    <header class="w3-container  w3-teal"> 
        <h1 class="w3-center">Team Roster Generator</h1>
    </header>

    <div class="w3-container w3-border-teal">
        ${teamCard}
    </div>

    <footer class="w3-container w3-teal"></footer>
</body>
</html>
    `
}

const employeeArray = data => {
    objectArray = []

    for(let i = 0; i <data.length; i++) {
        const employee = data[i]
        const title = employee.getRole()

        if(title === 'Supervisor') {
            const supervisorCard = genSupervisor(employee)
            objectArray.push(supervisorCard)
        }
        if(title === 'Engineer') {
            const engineerCard = genEngineer(employee)
            objectArray.push(engineerCard)
        }
        if(title === 'Intern') {
            const internCard = genIntern(employee)
            objectArray.push(internCard)
        }
    }
    const teamCard = objectArray.join('')
    const genTeamHtml = genHtmlTemplate(employee)
    return genTeamHtml
}

const genSupervisor = supervisor => {
    return `
    <div class='w3-card'>
        <header class='w3-container w3-green'>
            <h3 class='w3-center'>${supervisor.name}</h3>
            <h4 class='w3-center'>Supervisor</h4>
        </header>
        <div class='w3-container'>
            <p>
                ID: ${supervisor.id}
            </p>
            <p>
                Contact Email: ${supervisor.email}
            </p>
            <p>
                Office Number: ${supervisor.office}
            </p>
        </div>
        <footer class='w3-container w3-green'></footer>
    
    </div>
    `
}

const genEngineer = engineer => {
    return `
    <div class='w3-card'>
        <header class='w3-container w3-red'>
            <h3 class='w3-center'>${engineer.name}</h3>
            <h4 class='w3-center'>Engineer</h4>
        </header>
        <div class='w3-container'>
            <p>
                ID: ${engineer.id}
            </p>
            <p>
                Contact Email: ${engineer.email}
            </p>
            <p>
                Github Account: ${engineer.github}
            </p>
        </div>
        <footer class='w3-container w3-red'></footer>
    
    </div>
    `
}

const genIntern = intern => {
    return `
    <div class='w3-card'>
        <header class='w3-container w3-purple'>
            <h3 class='w3-center'>${intern.name}</h3>
            <h4 class='w3-center'>Intern</h4>
        </header>
        <div class='w3-container'>
            <p>
                ID: ${intern.id}
            </p>
            <p>
                Contact Email: ${intern.email}
            </p>
            <p>
                School Attending: ${intern.school}
            </p>
        </div>
        <footer class='w3-container w3-purple'></footer>
    
    </div>
    `
}