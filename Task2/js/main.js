// 2. Write a JavaScript function to get the values of First and Last 
// name of the following form. 

function getFormvalue(submitEvent) {
    submitEvent.preventDefault();
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;

    console.log(fName);
    console.log(lName);

}