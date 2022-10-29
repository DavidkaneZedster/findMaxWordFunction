const testingArr = ["Hello world", "This is a great solution", "How are you"]
const dataFull = ['Два слова', 'Здесь три слова', 'А тут четыре слова']
const dataEmpty = []

const findMaxWord = (arr) => {
    let maxWord = ''
    if (!!arr.length) { // ? : operator
        const counter = arr.map(item => {
            maxWord.split(/\s+/).length < item.split(/\s+/).length ? maxWord = item : '' // && operator
        })
        return console.log(maxWord)
    } else console.log('Массив пуст')
}

findMaxWord(testingArr)
findMaxWord(dataFull)
findMaxWord(dataEmpty)
