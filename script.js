textEL = document.getElementById('text')
speedEL = document.getElementById('speed')

text='Ja volim da programiram :D :D :D :D'
textPosition=1
speed=500/ speedEL.value

writeText()

function writeText(){
    textEL.innerText=text.slice(0,textPosition)
    textPosition++
    if(textPosition > text.lenght){
        textPosition=1
    }
    setTimeout(writeText,speed)
}

speedEL.addEventListerner('input', (e)=>{
    speed=500/e.target.value
})