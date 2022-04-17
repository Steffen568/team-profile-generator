class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    genName() {
        return this.name
    }

    genId() {
        return this.id
    }

    genEmail() {
        return this.email
    }

    genPosition() {
        return Employee
    }
}

module.exports = Employee