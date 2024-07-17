// ini js
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Kegemukan';
     }else if(35<=bmi){
    result = 'HARUS DIET SEKARANG!!';
     }

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

function resetForm() {
  document.getElementById("age").value = '';
  document.getElementById("height").value = '';
  document.getElementById("weight").value = '';
  document.getElementById("m").checked = false;
  document.getElementById("f").checked = false;
  document.querySelector(".comment").innerHTML = '';
  document.querySelector("#result").innerHTML = '00.00';
  resultArea.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
