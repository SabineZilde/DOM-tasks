// 4. Here is a sample html file with a submit button. Write a JavaScript 
// function to get the value of the href, hreflang, rel, target, and type 
// attributes of the specified link.

function getAttributes(submitEvent) {
    submitEvent.preventDefault();
    const w3r = document.getElementById('w3r').attributes;
    console.log(w3r);
    for (let value of w3r) {
        if (value !== 'id="w3r"') { // does not work yet
            console.log(value);
        }
    }
}