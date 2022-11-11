const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++",],
    answers: new Array(4).fill(0),
    registerAnswer() {
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(write option number)`));

        console.log(answer)


        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        // console.log(this.answers)


        this.displayResults()
        this.displayResults('string')
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

// poll.registerAnswer()

document.querySelector('.poll').addEventListener('click', poll.registerAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3], }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })