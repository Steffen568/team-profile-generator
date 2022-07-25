const Employee = require('../lib/Employee')

it(`Creates an Employee object with name, id, and email`, () => {
    const employee = new Employee(`stef`, `789`, `test@gmail.com`)

    expect(employee.name).toEqual(`stef`)
    expect(employee.id).toEqual(`789`)
    expect(employee.email).toEqual(`test@gmail.com`)
})

it(`Retutns employee object`, () => {
    const employee = new Employee(`stef`, `789`, `test@gmail.com`)
    expect(employee.getRole()).toEqual('Employee')
})

it(`Returns the name of an Employee`, () => {
    const employee = new Employee(`stef`, `789`, `test@gmail.com`)
    expect(employee.name).toEqual(`stef`)
})

it(`Returns id of an employee`, () => {
    const employee = new Employee(`stef`, `789`, `test@gmail.com`)
    expect(employee.id).toEqual(`789`)
})

it(`Returns email of an employee`, () => {
    const employee = new Employee(`stef`, `789`, `test@gmail.com`)
    expect(employee.email).toEqual(`test@gmail.com`)
})

