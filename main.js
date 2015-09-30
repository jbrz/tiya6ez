//Input fields
var input1 = document.querySelector('#num_one')
var input2 = document.querySelector('#num_two')
var answer = document.querySelector('#answer')
var calculate = document.querySelector('#calculateBtn')


//The Button! And its function!
calculate.addEventListener('click',function(x,y) {
  var in1num = parseInt(input1.value, 10)
  var in2num = parseInt(input2.value, 10);
  
  var result = in1num + in2num
  answer.value = result
  console.log(answer.value)
  answer.textContent = result
})

/* yep, still not showing on screen.  solid.  fml. */