const inquirer = require('inquirer')
const fs = require('fs')

const Supervisor = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { title } = require('process')
const htmlTemplate = require('./src/htmlTemp')
const employeeArray = require('./src/htmlTemp')
const ConfirmPrompt = require('inquirer/lib/prompts/confirm')

let teamInfo = []

const genManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of Supervisor'
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your ID`
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your email adress`
        },
        {
            type: 'input',
            name:'office',
            message: `Enter your office number`
        }
    ]).then(managerInfo => {
        const {name, id, email, office} = managerInfo
        const supervisor = new Supervisor(name, id, email, office)

        teamInfo.push(supervisor)
        // genEmployee()
        return teamInfo
    })
}

const genEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
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
            when: (input) => input.position === 'Engineer',
            type: 'input',
            name: 'github',
            message: `Enter engineer's github account`,
            
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter school Inter is attending`,
            when: (input) => input.position === 'Intern',
            
        },
        {
            type: 'confirm',
            name: 'nextEmp',
            message: `Would you like to add another Employee?`,
            default: false
        }
    ]).then(employeeInfo => {
        let {name, id, email, github, school, nextEmp, position}  = employeeInfo 
        let employee

        if(position === 'Engineer') {
            employee = new Engineer (name, id, email, github)
        
        } else if (position === 'Intern') {
            employee = new Intern (name, id, email, school)
        }
        
        teamInfo.push(employee)

        if (nextEmp) {
            return genEmployee(teamInfo)
        } else {
            return teamInfo
        }
        
    })
}

const genFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(`HTML GEN ERROR`)
        } else {
            console.log(`Your employee roster has been genereated! check index.html`)
        }
    })
}

// genManager()
//     .then(teamInfo => {
//         return employeeArray(teamInfo)
//     })
//     .then(pageHTML => {
//         return genFile(pageHTML)
//     })

genManager()
    .then(genEmployee)
    .then((teamInfo) => {
        return employeeArray(teamInfo)
    })
    .then((pageHTML) => {
        return genFile(pageHTML)
    })
    .catch((err) => {
        console.log(err)
    })
