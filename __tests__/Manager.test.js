const Supervisor = require('../lib/Manager')

it(`Returns employee obeject  with Manager office number`, () => {
    const manager = new Supervisor(`stan`, `456`, `test@gmail.com`, `10`)

    expect(manager.name).toEqual(`stan`)
    expect(manager.id).toEqual(`456`)
    expect(manager.email).toEqual(`test@gmail.com`)
    expect(manager.officeNumber).toEqual(`10`)
})

it(`Returns Manager`, () => {
    const manager = new Supervisor(`stan`, `456`, `test@gmail.com`, `10`)
    expect(manager.getRole()).toEqual('Supervisor')
})

it(`Returns Manager Name`, () => {
    const manager = new Supervisor(`stan`, `456`, `test@gmail.com`, `10`)
    expect(manager.getName()).toEqual(`stan`)
})

it(`Returns ID of Manager`, () => {
    const manager = new Supervisor(`stan`, `456`, `test@gmail.com`, `10`)
    expect(manager.getId()).toEqual(`456`)
})

it(`Returns Manager Email`, () => {
    const manager = new Supervisor(`stan`, `456`, `test@gmail.com`, `10`)
    expect(manager.getEmail()).toEqual(`test@gmail.com`)
})

