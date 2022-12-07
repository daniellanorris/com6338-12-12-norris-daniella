const words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
]

let wins = 0
let losses = 0
let currentWord


class Word {
    constructor(word) {
        this.word = word
        this.displayWord = word.replaceAll(/[\w]/g, "_")
        this.remainingGuesses = 10
        this.incorrectLetters = []
        this.correctLetters = []
        console.log(word)
    }

    guessLetter(letter) {
        this.letter = letter
        const incorrectText = document.getElementById(`incorrect-Letters`);
        const remainingGuessesText = document.getElementById(`remaining-guesses`);
        const wordGuessText = document.getElementById(`word-to-guess`);

        incorrectText.textContent = ""
        remainingGuessesText.textContent = this.remainingGuesses
        wordGuessText.textContent = this.displayWord
        console.log(letter)

        for (var i = 0; i < this.word.length; i++) {
            if (this.word.includes(letter) && !this.correctLetters.includes(letter)) {
                this.correctLetters.push(letter)
                this.displayWord += this.letter
                console.log(correctLetters)
            }
            else {
                this.remainingGuesses--;
                this.incorrectLetters.push(letter)
                this.displayWord += "_"
            } 
        } 
    } 
    

    updateScreen() {
        this.wordGuessText.textContent = this.displayWord
        this.remainingGuessesText.textContent = this.remainingGuesses
        this.incorrectText.textContent = this.incorrectLetters
        console.log(word.incorrectLetters)
        
    }
    
    isGameOver() {
        if (word.remainingGuesses < 0 || word.displayWord === word.word) {
            return true
        } else {
            return false
        }
    }


    getWinOrLoss() {
            if (this.isGameOver() == false) {
                return null
            } else if (word.word == word.displayWord && word.remainingGuesses > 0) {
                result == `win`
            } else if (word.displayWord !== word && word.remainingGuesses <= 0) {
                result == `loss`
            }
        }
    }


function newGame() {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    currentWord = new Word(randomWord)
    currentWord.updateScreen()
}

document.onkeyup = function (e) {
    const pressedKey = e.key.toLowerCase()
    // early exit for non-letter key presses
    if (!/^[a-z]{1}$/g.test(pressedKey)) return

    // pass in guessed letter to word obj
    currentWord.guessLetter(pressedKey)
    // allow word obj to update screen
    currentWord.updateScreen()

    // check if game is over
    const gameOver = currentWord.isGameOver()

    // if game is over, update wins/losses and start new game
    if (gameOver) {
        const previousWord = document.getElementById('previous-word')
        const winDisplay = document.getElementById('wins')
        const lossDisplay = document.getElementById('losses')
        previousWord.textContent = displayWord
        const result = currentWord.getWinOrLoss()
        if (result === 'win') {
            wins++
            winDisplay.textContent = wins
        } else if (result === 'loss') {
            losses++
            lossDisplay.textContent = losses
        }
        newGame()
    }
}

newGame()