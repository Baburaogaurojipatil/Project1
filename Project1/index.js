// Array to store table data
let data = [];

// Open the form and hide the "Add New" button
function openForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("addNewBtn").style.display = "none";
}

// Clear the form inputs
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("joiningDate").value = "";
    document.getElementById("age").value = "";
}

// Hide the form and show the "Add New" button
function cancelForm() {
    clearForm();
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("addNewBtn").style.display = "block";
}

// Save the form data to the table
function saveData() {
    const name = document.getElementById("name").value.trim();
    const designation = document.getElementById("designation").value.trim();
    const joiningDate = document.getElementById("joiningDate").value.trim();
    const age = document.getElementById("age").value.trim();

    // Validate form fields
    if (!name || !designation || !joiningDate || !age) {
        alert("All fields are required!");
        return;
    }

    // Add new record to data array
    data.push({ name, designation, joiningDate, age });

    // Render the table
    renderTable();

    // Hide form and show "Add New" button
    cancelForm();
}

// Render the table with the data array
function renderTable() {
    const tableBody = document.getElementById("newdata");
    tableBody.innerHTML = "";

    data.forEach((row, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${row.name}</td>
                <td>${row.designation}</td>
                <td>${row.joiningDate}</td>
                <td>${row.age}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Delete a row from the table
function deleteRow(index) {
    data.splice(index, 1);
    renderTable();
}
