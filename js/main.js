const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')

const uppercaseElement = document.getElementById
('uppercase')

const numbersElement = document.getElementById
('numbers')

const symbolsElement = document.getElementById
('symbols')

const form = document.getElementById('passwordGeneratorForm')

/* FUNÇÃO */

function generatePassword(characterAmount, uppercase, numbers, symbols) {

}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit',e=>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const uppercase = uppercaseElement.checked
    const numbers = numbersElement.checked
    const symbols = symbolsElement.checked
    
    
    const password = generatePassword(characterAmount, uppercase, numbers, symbols)
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
                                  