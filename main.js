//Input fields + turning strings into numbers 
var input1 = document.querySelector('#num_one').replace ( /[^\d.]/g, '' )
var input2 = document.querySelector('#num_two').replace ( /[^\d.]/g, '' )

//The Button!
var calculate = document.querySelector('#calculateBtn')
calculate.addEventListener('click',domath(input1,input2))

//Answer and calculation func
var answer = document.querySelector('#answer')

var domath = function(x,y) {
  answer.value = x + y
  console.log(answer.value)
  alert
}