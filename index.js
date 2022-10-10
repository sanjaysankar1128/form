var list=[];
let valuarry=[];




function validateInput() {


  const names = document.getElementById("names").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;
    const textarea = document.getElementById("textarea").value;
   const radio = document.querySelector('input[type="radio"]:checked')
   
   
    var selected = new Array();
     var tblFruits = document.getElementById("tbl");
        var chks = tblFruits.getElementsByTagName("INPUT");


    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    


    if (names == "") {
        document.getElementById("error1").innerHTML = "You must enter your name";
    }
    else {
        document.getElementById("error1").innerHTML = "";
    }

    if (number.match(phoneNum)) {
        document.getElementById("error2").innerHTML = "";
    } else {
        document.getElementById("error2").innerHTML = "You must enter valid number";
    }

    if (email === "") {
        document.getElementById("error3").innerHTML = "You must enter your email";
    }
    else if (isValidEmail(email)) {
        document.getElementById("error3").innerHTML = "";
    }
    else {
        document.getElementById("error3").innerHTML = "You must enter valid email";

    }

    if (radio) {
        document.getElementById("error4").innerHTML = "";
    }
    else {
        document.getElementById("error4").innerHTML = "You must select your gender";
    }

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }

    
    if (selected.length > 0) {
        document.getElementById("error5").innerHTML = "";
    
    }
    else{
        document.getElementById("error5").innerHTML = "You must select your Language";
    }
    if (status == "") {
        document.getElementById("error6").innerHTML = "You must select your status";
    }
    else {
        document.getElementById("error6").innerHTML = "";
    }

    if (textarea === "") {
        document.getElementById("error7").innerHTML = "You must enter your address";
    } else {
        document.getElementById("error7").innerHTML = "";
    }

    let result = { "Name": names, "Number": number, "Email": email, "status": status,"Gender": radio.value,"Language":selected,"Address": textarea }
   
    if(names&&number&&email&&status&&radio.value&&selected&&textarea){
        list.push(result);
        console.log(valuarry);
        localStorage.setItem("resultvalue",JSON.stringify(list))
        buildTable()
    }else{
        console.log("");
    }
}

   
function buildTable() {
    let row ="";
    list = JSON.parse(localStorage.getItem("resultvalue"));

    for (var i = 0; i < list.length; i++) {

        row += `<tr>
                      <td>${list[i].Name}</td>
                      <td>${list[i].Number}</td>
                      <td>${list[i].Email}</td>
                      <td>${list[i].status}</td>
                      <td>${list[i].Gender}</td>
                      <td>${list[i].Language}</td>
                      <td>${list[i].Address}</td>
                </tr>`
       
              
    }
    document.getElementById("myTable").innerHTML = row

}

    
           
    
    
    

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();




    })

function myfunction() {
    document.getElementById("form").reset();
}