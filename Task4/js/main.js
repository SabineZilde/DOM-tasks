// 4. Here is a sample html file with a submit button. Write a JavaScript 
// function to get the value of the href, hreflang, rel, target, and type 
// attributes of the specified link.

function getAttributes(submitEvent) {
    submitEvent.preventDefault();
    const attributesOfA = document.getElementById('w3r').attributes;

    for (let attribute of attributesOfA) {
        if (attribute.value !== 'w3r') {
            console.log(attribute.value);
        }
    }
}

// This works as well

// function getAttributes(submitEvent) {
//     submitEvent.preventDefault();
//     const attributesOfA = document.getElementById('w3r').attributes;

//     console.log(attributesOfA.href.value);
//     console.log(attributesOfA.hreflang.value);
//     console.log(attributesOfA.rel.value);
//     console.log(attributesOfA.target.value);
//     console.log(attributesOfA.type.value);
// }