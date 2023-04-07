
function myFunc() {

  let gender;
  let gender1 = document.getElementsByName('gender');

  let food = "";
  let foods = "";
  let food1 = document.getElementsByName('food');

  for(i = 0; i<food1.length; i++){
    if(food1[i].checked === true) {
    foods += `${food1[i].value + ", "}`;
    food = foods.replace(/,\s*$/, '');
    }
  }

 if (document.getElementById('first-name').value == "" ){
  swal("Please fill your first name!");
 }else if (document.getElementById('last-name').value == ""){
  swal("Please fill your last name!");
 }else if(document.getElementById('email').value == ""){
  swal("Please fill your Email ID!");  
 }else if(document.getElementById('pincode').value == ""){
  swal("Please fill pincode!");
 }else if (gender1[0].checked === false && gender1[0].checked === false){
      swal("Please select a gender");
 }else if((food.split(" ")).length<2){
  swal("Please select at least 2 foods");
 } else if(document.getElementById('address').value == ""){
  swal("Please fill your address!");
 }else if(document.getElementById('state').value == ""){
  swal("Please select a state!");
  } else {

    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let email = document.getElementById('email').value;
    let pincode = document.getElementById('pincode').value;

    // let gender;
    // let gender1 = document.getElementsByName('gender');
    for(i=0; i<gender1.length; i++){
      if (gender1[i].checked === true){
        gender = gender1[i].value;
      }
    };

    let address = document.getElementById('address').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    let tblbody = document.getElementById('tblbody')

    let tr = document.createElement('tr');
    tr.setAttribute("class", "tr")
    tr.setAttribute("id", "tr")

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));
    let td6 = tr.appendChild(document.createElement('td'));
    let td7 = tr.appendChild(document.createElement('td'));
    let td8 = tr.appendChild(document.createElement('td'));
    let td9 = tr.appendChild(document.createElement('td'));

    td1.setAttribute("id", "td1"); 
    td2.setAttribute("id", "td2"); 
    td3.setAttribute("id", "td3"); 
    td4.setAttribute("id", "td4"); 
    td5.setAttribute("id", "td5"); 
    td6.setAttribute("id", "td6"); 
    td7.setAttribute("id", "td7"); 
    td8.setAttribute("id", "td8"); 
    td9.setAttribute("id", "td9"); 

    tblbody.appendChild(tr);
    
    td1.innerText = fname.toUpperCase();
    td2.innerText = lname.toUpperCase();
    td3.innerText = gender.toUpperCase();
    td4.innerText = food.toUpperCase();
    td5.innerText = address.toUpperCase();
    td6.innerText = pincode;
    td7.innerText = state.toUpperCase();
    td8.innerText = country.toUpperCase();
    td9.innerText = email.toUpperCase();

    swal('Your response has been saved',{
    position: 'top-end',
    icon: "success",
    buttons: false,
    timer: 4000,
    });

  document.getElementById("first-name").value = null; 
  document.getElementById("last-name").value = null;
  document.getElementById('email').value = null;
  document.getElementById('pincode').value = null;
  document.getElementById('address').value = null;
  document.getElementById('state').value = null;

  let radio = document.querySelector('input[type=radio][name=gender]:checked');
  radio.checked = false;

  let checkbox1 = document.querySelector('input[type=checkbox][name=food]:checked');
  if(checkbox1.checked ===true){
    checkbox1.checked = false;}

  let checkbox2 = document.querySelector('input[type=checkbox][name=food]:checked');
  if(checkbox2.checked ===true){
    checkbox2.checked = false;}

  let checkbox3 = document.querySelector('input[type=checkbox][name=food]:checked');
  if(checkbox3.checked ===true){
    checkbox3.checked = false;}

  let checkbox4 = document.querySelector('input[type=checkbox][name=food]:checked');
  if(checkbox4.checked ===true){
    checkbox4.checked = false;}

  let checkbox5 = document.querySelector('input[type=checkbox][name=food]:checked');
  if(checkbox5.checked ===true){
    checkbox5.checked = false;}
  }
}

function deleteData(){
  document.getElementById('tblbody').remove()
}
 
