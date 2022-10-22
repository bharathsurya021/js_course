document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value
    console.log(text)

    const variables = text.split('\n')
    console.log(variables)

    for (const [i, variable] of variables.entries()) {
        const [first, second] = variable.toLowerCase().trim().split('_')
        const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`
        console.log(`${output.padEnd(20, (' '))}${'☑️'.repeat(i)}`)

    }
})

