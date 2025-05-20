

// Input Display
const display = document.getElementById('display');

// Clear, Delete, Percent
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const percentBtn = document.getElementById('percent');

// Operators
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const equalBtn = document.getElementById('equal');

// Dot
const dotBtn = document.getElementById('dot');

// Numbers

// Optional: Get all number buttons together (if needed)
const numberButtons = document.querySelectorAll('.number');

// Optional: Get all operator buttons
const operatorButtons = document.querySelectorAll('.operator');


numberButtons.forEach((button) => {

button.addEventListener('click',(e)=>{

display.value  += button.textContent

e.stopPropagation()

})
    
});

operatorButtons.forEach((operators)=>{

    operators.addEventListener('click',(e)=>{

 display.value += operators.textContent
e.stopPropagation()
    })

})

equalBtn.addEventListener('click',(e)=>{

    try {
        if(display.value ===''){
            display.value = 'error'
            return
        }
        display.value = eval(display.value)
    } catch (error) {
        
        display.value = 'error'
    }
 
 


})


clearBtn.addEventListener('click',(e)=>{
display.value = "";

})

deleteBtn.addEventListener('click',(e)=>{

display.value = display.value.slice(0,-1)
    



})