const Engineer = require('../lib/Engineer')

it(`Return Engineer with employee properties`, () => {
    const engineer = new Engineer(`steve`, `123`, `test@gmail.com`, `github.com/name`)

    expect(engineer.name).toEqual(`steve`)
    expect(engineer.id).toEqual(`123`)
    expect(engineer.email).toEqual(`test@gmail.com`)
    expect(engineer.gitHub).toEqual(`github.com/name`)
})

it(`Returns engineer name`, () => {
    const engineer = new Engineer(`steve`, `123`, `test@gmail.com`, `github.com/name`)
    expect(engineer.getName()).toEqual(`steve`)
})

it(`Returns engineer id`, () => {
    const engineer = new Engineer(`steve`, `123`, `test@gmail.com`, `github.com/name`)
    expect(engineer.getId()).toEqual(`123`)
})

it(`Returns engineer email`, () => {
    const engineer = new Engineer(`steve`, `123`, `test@gmail.com`, `github.com/name`)
    expect(engineer.getEmail()).toEqual(`test@gmail.com`)
})

it(`Returns engineer github account`, () => {
    const engineer = new Engineer(`steve`, `123`, `test@gmail.com`, `github.com/name`)
    expect(engineer.genGitHub()).toEqual(`github.com/name`)

})