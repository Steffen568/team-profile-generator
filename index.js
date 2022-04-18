const inquirer = require('inquirer')
const fs = require('fs')

const Supervisor = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { title } = require('process')
const htmlTemplate = require('./src/htmlTemp')
const employeeArray = require('./src/htmlTemp')

let teamInfo = []

const genManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your Supervisor'
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your supervisor's ID`
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your supervisor's email adress`
        },
        {
            type: 'input',
            name:'office',
            message: `Enter your supervisors office number`
        }
    ]).then(managerInfo => {
        const {name, id, email, office} = managerInfo
        const supervisor = new Supervisor(name, id, email, office)

        teamInfo.push(supervisor)
        genEmployee()
        return teamInfo
    })
}

const genEmployee = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'position',
            message: `Select employee position`,
            choices:  [`Intern`, `Engineer`]
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter the employee's ID`
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter employee's email adress`
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter engineer's github account`,
            when: (input) => input.title === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter school Inter is attending`,
            when: (input) => input.title === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmPrompt',
            message: `Would you like to add another Employee?`,
            default: false
        }
    ]).then(employeeInfo => {
        let {name, id, email, github, school}  = employeeInfo 
        let employee

        if(title === 'Engineer') {
            employee = new Engineer (name, id, email, github)
        } else if (title === 'Inter') {
            employee = new Intern (name, id, email, school)
        }

        if (confirmPrompt) {
            return genEmployee()
        } else {
            return teamInfo
        }
    })
    
}

const genFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(`HTML GEN ERROR`)
        } else {
            console.log(`Your employee roster has been genereated! check index.html`)
        }
    })
}

genManager()
    .then(teamInfo => {
        return employeeArray(teamInfo)
    })
    .then(pageHTML => {
        return genFile(pageHTML)
    })