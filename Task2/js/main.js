// 2. Write a JavaScript function to get the values of First and Last 
// name of the following form. 

function getFormvalue() {
    // submitEvent.preventDefault();
    const form = document.getElementById('form1').children;
    // const formChildren = form.children;
    const formValue = form.value;
    console.log(formValue);    
}