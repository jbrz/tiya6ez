//Input fields + turning strings into numbers 
var input1 = document.querySelector('#num_one')
var in1num = input1.value .replace ( /[^\d.]/g, '' )
var input2 = document.querySelector('#num_two')
var in2num = input2.value .replace ( /[^\d.]/g, '' )

//The Button!
var calculate = document.querySelector('#calculateBtn')
calculate.addEventListener('click',domath(in1num,in2num))

//Answer and calculation func
var answer = document.querySelector('#answer')

var domath = function(x,y) {
  answer.value = x + y
  console.log(answer.value)
  answer.innerHTML = x + y
  console.log(answer.innerHTML)
}