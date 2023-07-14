// const playButton = document.getElementById(`play-button`)
// const pauseButton = document.getElementById(`pause-button`)
// const stopButton = document.getElementById(`stop-button`)
// const textInput = document.getElementById(`text`)
// const speedinput = document.getElementById(`speed`)

// playButton.addEventListener(`click`,()=>{
//     playText(textInput.value)
// })

// pauseButton.addEventListener(`click`, pausetext)

// stopButton.addEventListener(`click`, stoptext)



// function playText(text){
//     if (speechSynthesis.pause && speechSynthesis.speaking){
//         return speechSynthesis.resume()
//     }
//     const utterance = new SpeechSynthesisUtterance(text)
//     utterance.rate = speedinput.value
//     utterance.addEventListener(`end`, () =>{
//         textInput.Disabled = false
//     })

//     utterance.addEventListener(`boundary`, e =>{
//        currentCharacter = e.charIndex
//     })

//     textInput.Disabled = true
//     speechSynthesis.speak (utterance)
// }


// function pauseText(){
//   if (speechSynthesis.speaking) speechSynthesis.pause()
// }

// function stopText(){
//     speechSynthesis.resume()
//     speechSynthesis.cancel()

//   }