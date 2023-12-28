let appendToDisplay =(value)=>{
   let valueinput = document.getElementById('display');
   valueinput.value += value  
   
   

}

let resetDisplay = ()=>{
    document.getElementById('display').value = '';
}

let calculate = ()=>{
    let equalValue = document.getElementById('display').value
    if (equalValue === '') {
        alert('Input Filed Is Empty')
    }else{
        try {
            document.getElementById('display').value = eval(equalValue)
        } catch (error) {
            document.getElementById('display').value = ''
            alert(`Wrong Input : ${equalValue}`)
    }
}

}

let deleteLastChar = ()=>{
    let valeSlice= document.getElementById('display').value 
    document.getElementById('display').value  = valeSlice.toString().slice(0,-1)
}

let clac = document.getElementById('clac')
let switchButtion = document.getElementById('switch')

let isColor = true; 
switchButtion.addEventListener('click', ()=>{
    
    if (isColor) {
        document.body.style.backgroundColor ='white';
        clac.style.color='black'
    } else {
        
        document.body.style.backgroundColor = '#3B4664'
        clac.style.color='white'
     
    }
    isColor =! isColor
})