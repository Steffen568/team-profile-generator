const Intern = require('../lib/Intern')

it(`Returns Intern with employee properties and school`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)

    expect(intern.name).toEqual(`sam`)
    expect(intern.id).toEqual(`159`)
    expect(intern.email).toEqual(`test@gmail.com`)
    expect(intern.school).toEqual(`UT Austin`)
})


it(`Returns Intern object`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)
    expect(intern.getRole()).toEqual('Intern')
})

it(`Returns Intern's name`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)
    expect(intern.getName()).toEqual(`sam`)
})

it(`Returns Intern's ID`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)
    expect(intern.getId()).toEqual(`159`)
})

it(`Returns Intern's email`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)
    expect(intern.getEmail()).toEqual(`test@gmail.com`)
})

it(`Returns Intern's school`, () => {
    const intern = new Intern(`sam`, `159`, `test@gmail.com`, `UT Austin`)
    expect(intern.getSchool()).toEqual(`UT Austin`)
})