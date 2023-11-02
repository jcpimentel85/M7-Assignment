// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let employees = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    
    // GET THE VALUES FROM THE TEXT BOXES
    let idvalue = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow(-1) 
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let employeeIdCell = row.insertCell(0)
    let employeeId = document.createTextNode(idvalue)
    employeeIdCell.appendChild(employeeId)
    let employeeNameCell = row.insertCell(1)
    let employeeName = document.createTextNode(name)
    employeeNameCell.appendChild(employeeName)
    let employeeExtCell = row.insertCell(2)
    let employeeExt = document.createTextNode(extension)
    employeeExtCell.appendChild(employeeExt)
    let employeeEmailCell = row.insertCell(3)
    let employeeEmail = document.createTextNode(email)
    employeeEmailCell.appendChild(employeeEmail)
    let employeeDeptCell = row.insertCell(4)
    let employeeDept = document.createTextNode(department)
    employeeDeptCell.appendChild(employeeDept)
 

    
    // CREATE THE DELETE BUTTON

    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE