const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')

const uppercaseElement = document.getElementById
('uppercase')

const numbersElement = document.getElementById
('number')

const symbolsElement = document.getElementById
('symbol')

const form = document.getElementById('passwordGeneratorForm')

/* FUNÇÃO */

function generatePassword(characterAmount, uppercase, number, symbol) {
    console.log(LOWERCASE_CHAR_CODES)
}



const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES= arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES= arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123,126)
  )

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const uppercase = uppercaseElement.checked
    const numbers = numbersElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(characterAmount, uppercase, numbers, symbols)
    passwordDisplay.innerText = password
  })

  
  function arrayFromLowToHigh(low, high) {
      const array = []
      for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

 function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
   }
                                  