const Employee = require('./Employee')

class Supervisor extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return `Supervisor`
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Supervisor