var x = document.getElementById('form');
var createForm = document.createElement('form');
createForm.setAttribute('name','login');
createForm.setAttribute('action', 'google.com');
createForm.setAttribute('method','post');
createForm.setAttribute('onsubmit','event.preventDefault(); return validateForm();')
x.appendChild(createForm);

var inputAge = document.createElement('input',);
inputAge.setAttribute('type','text');
inputAge.setAttribute('name','age');
inputAge.setAttribute('placeholder','Your Age');
inputAge.setAttribute('id','age1')
createForm.appendChild(inputAge);

var line = document.createElement('br');
createForm.appendChild(line);

var inputMail = document.createElement('input');
inputMail.setAttribute('type','text');
inputMail.setAttribute('name','username');
inputMail.setAttribute('placeholder','Your Email')
inputMail.setAttribute('id','mail1')
createForm.appendChild(inputMail);

var linebreak=document.createElement('br');
createForm.appendChild(linebreak);

var inputDate = document.createElement('input');
inputDate.setAttribute('type','text');
inputDate.setAttribute('name','date');
inputDate.setAttribute('placeholder','Input current date in format like 19.08.2014');
inputDate.setAttribute('id','date1');
createForm.appendChild(inputDate);

var dateBreak = document.createElement('br');
createForm.appendChild(dateBreak);

var sub = document.createElement('input');
sub.setAttribute('type','submit');
sub.setAttribute('value','Validate Me');
createForm.appendChild(sub);

function validateForm() {
    var age1 = document.getElementById('age1').value;
    var mail1 = document.getElementById('mail1').value;
    var date1 = document.getElementById('date1').value;
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    var currentDate =(curr_date + "." + '0' + curr_month + "." + curr_year);
    var mailValue = /^user_[^;:#*%S]/;
    var digits = /^[0-9]+$/;
    if(!age1.match(digits)){
        alert("The age must contain only digits");
        return false;
    }
    if(!mail1.match(mailValue)){
        alert('Email must start only with user_');
        return false;
    }
    if(date1 !== currentDate){
        alert("Sorry,you have entered an incorrect date");
    }
}