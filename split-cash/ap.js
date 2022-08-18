// SPLITTER APP
let amtBill = document.getElementById('amtBill');
let customPerc = document.getElementById('customPerc');
let noPeople = document.getElementById('noPple');
let tipAmt = document.getElementById('tipAmount');
let totPerson = document.getElementById('totalPerson')
let paraTwo = document.getElementById('paraTwo');
let paraTwo2 = document.getElementById('paraTwo2');
customPerc.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        custom(e)
    }
});


function fPerc(){
    let num = Number(amtBill.value);
    let numPeople = Number(noPeople.value);
 

    if(numPeople > 0){
     let tipAmount = num * 5/ 100;
     let tipPerson = tipAmount / numPeople;
     let total = num/numPeople + tipPerson;
     paraTwo.textContent = '$' + tipPerson.toFixed(2);
     paraTwo2.textContent = '$' + total.toFixed(2);

    }
     else{
        let tipAmount = num * 5/100;
        let singleTotal = tipAmount + num;
        paraTwo.textContent = "$" + tipAmount.toFixed(2);
        paraTwo2.textContent ='$' + singleTotal.toFixed(2);
     }

}

function tPerc(){
    let num = Number(amtBill.value);
    let numPeople = Number(noPeople.value);
    
    if (numPeople > 0) {
      let tipAmount =num * 10 / 100;
      let tipPerson = tipAmount / numPeople;
      let total = num / numPeople + tipPerson;
       paraTwo.textContent = "$" + tipPerson.toFixed(2);
       paraTwo2.textContent = "$" + total.toFixed(2);
    } else {
      let tipAmount = num * 10/100;
      let singleTotal = tipAmount + num;
       paraTwo.textContent = "$" + tipAmount.toFixed(2);
       paraTwo2.textContent = "$" + singleTotal.toFixed(2);
    }
}

function fifPerc(){
    let num = Number(amtBill.value);
    let numPeople = Number(noPeople.value);
    
    if (numPeople > 0) {
      let tipAmount = num * 15/ 100;
      let tipPerson = tipAmount / numPeople;
      let total = num / numPeople + tipPerson;
      paraTwo.textContent = "$" + tipPerson.toFixed(2);
      paraTwo2.textContent = "$" + total.toFixed(2);
    } else {
      let tipAmount = num * 15/ 100;
      let singleTotal = tipAmount + num;
      paraTwo.textContent = "$" + tipAmount.toFixed(2);
      paraTwo2.textContent = "$" + singleTotal.toFixed(2);
    }
    
}


function tfPerc(){
    let num = Number(amtBill.value);
    let numPeople = Number(noPeople.value);
   
    if (numPeople > 0) {
      let tipAmount = num * 25/ 100;
      let tipPerson = tipAmount / numPeople;
      let total = num / numPeople + tipPerson;
     paraTwo.textContent = "$" + tipPerson.toFixed(2);
     paraTwo2.textContent = "$" + total.toFixed(2);
    } else {
      let tipAmount = num * 25/ 100;
      let singleTotal = tipAmount + num;
    paraTwo.textContent = "$" + tipAmount.toFixed(2);
    paraTwo2.textContent = "$" + singleTotal.toFixed(2);
    }

}

function fiftyPerc(){
      let num = Number(amtBill.value);
      let numPeople = Number(noPeople.value);
    
    if (numPeople > 0) {
      let tipAmount = num * 50 / 100;
      let tipPerson = tipAmount / numPeople;
      let total = num / numPeople + tipPerson;
      paraTwo.textContent = "$" + tipPerson.toFixed(2);
      paraTwo2.textContent = "$" + total.toFixed(2);
    } else {
      let tipAmount = num * 50 / 100;
      let singleTotal = tipAmount + num;
      let n = tipAmount.toFixed(2);
      let q = singleTotal.toFixed(2);
      paraTwo.textContent = "$" + n;
      paraTwo2.textContent = "$" + q;
    }

}


function custom(e){
  let customVal = Number(customPerc.value) / 100;
  let num = Number(amtBill.value);
  let numPeople = Number(noPeople.value)

    if (numPeople > 0) {
      let tipAmount = customVal * num;
      let tipPerson = tipAmount / numPeople;
      let total = num / numPeople + tipPerson;
      paraTwo.textContent = ("$" + tipPerson.toFixed(2));
      paraTwo2.textContent = ("$" + total.toFixed(2));
    } else {
      let tipAmount = customVal * num;
      let singleTotal = tipAmount + num;
      let n = tipAmount.toFixed(2);
      let q = singleTotal.toFixed(4);
       paraTwo.textContent = ("$" + n);
      paraTwo2.textContent = ("$" + q);
    }

    }



function resetBtn(){
 amtBill.value = " ";
 noPeople.value = " ";
 paraTwo.textContent =`$0.00`;
 paraTwo2.textContent =`$0.00`
 customPerc.value= " ";
 amtBill.focus(focus);




}