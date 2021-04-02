// 5. Write a JavaScript function to add rows to a table.

function insert_Row() {
    const table = document.getElementById('sampleTable');
    const newRow = `
        <tr>
            <td>RowX cell1</td>
            <td>RowX cell2</td>
        </tr>
    `;
    table.innerHTML += newRow;
}