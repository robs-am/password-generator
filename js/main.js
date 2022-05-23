const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')

const form = document.getElementById('passwordGeneratorForm')


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit',e=>{
    e.preventDefault()
  })

function syncCharacterAmount(e){
    const value=e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
   }
                                  