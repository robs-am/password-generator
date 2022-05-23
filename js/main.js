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

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
   }
                                  