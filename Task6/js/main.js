/* 6. Write a JavaScript function that accept row, column, (to identify a 
particular cell) and a string to update the content of that cell.

Table + form with 3 elements: input field and 2x select fields to 
pick the row and column */

function submitForm(submitEvent) {
    submitEvent.preventDefault();
    const newInputFieldElement = document.getElementById('input');
    const inputField = newInputFieldElement.value; // grabs the value of the selected field
    // console.log(inputField); // prints the value what is inserted in input field (in browser)


    // There should be better way how to do this ;D
    const row1Col1 = `
        <tr>
            <th></td>
            <th>Column 1</td>
            <th>Column 2</td>
        </tr>
        <tr>
            <th>Row 1</th>
            <td>${inputField}</td>
            <td></td>
        </tr>
        <tr>
            <th>Row 2</th>
            <td></td>
            <td></td>
        </tr>
     `;
    const row1Col2 = `
        <tr>
            <th></td>
            <th>Column 1</td>
            <th>Column 2</td>
        </tr>
        <tr>
            <th>Row 1</th>
            <td></td>
            <td>${inputField}</td>
        </tr>
        <tr>
            <th>Row 2</th>
            <td></td>
            <td></td>
        </tr>
     `;
    const row2Col1 = `
        <tr>
            <th></td>
            <th>Column 1</td>
            <th>Column 2</td>
        </tr>
        <tr>
            <th>Row 1</th>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Row 2</th>
            <td>${inputField}</td>
            <td></td>
        </tr>
     `;
    const row2Col2 = `
        <tr>
            <th></td>
            <th>Column 1</td>
            <th>Column 2</td>
        </tr>
        <tr>
            <th>Row 1</th>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Row 2</th>
            <td></td>
            <td>${inputField}</td>
        </tr>
     `;

    const selectedRow = document.getElementById('selectRow').value;
    const selectedCol = document.getElementById('selectCol').value;
    // console.log(selectedCol);
    // console.log(selectedRow);
    const table = document.getElementById('table');

    if (selectedRow === '1' && selectedCol === '1') {
        table.innerHTML = row1Col1;
    } else if (selectedRow === '1' && selectedCol === '2') {
        table.innerHTML = row1Col2;
    } else if (selectedRow === '2' && selectedCol === '1') {
        table.innerHTML = row2Col1;
    } else if (selectedRow === '2' && selectedCol === '2') {
        table.innerHTML = row2Col2;
    }

    if (inputField === '') { // alerts user if the input field is empty
        alert('Please fill in the input field');
        return false; // stops next lines of execution to avoid the empty field beeing actually added to table
    }
    newInputFieldElement.value = ''; // removes text from input field after the input is added to the table
}