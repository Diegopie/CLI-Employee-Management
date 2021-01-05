const prompts = {
    case: {
        type: 'list',
        name: 'userCase',
        message: 'Select an Option',
        choices: [
            'View Employees',
            'View Roles',
            'View Departments',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Update Employee',
            'Quit',
        ],
    },

    addEmp: [
        {
            type: 'input',
            message: "Enter Employee's First Name",
            name: 'first_name'
        },
        {
            type: 'input',
            message: "Enter Employee's Last Name",
            name: 'last_name'
        },
        {
            type: 'input',
            message: "Enter Role ID Employee's Title (Select View Roles in the Main Menu to Find Role ID's",
            name: 'role_id',
            validate: (inp) => {
                check = parseInt(inp);
                console.log(typeof(check));
                // if (check !== Number) {
                //     return "Please Enter a Number"
                // }
                return true;
            }
        },
        {
            type: 'input',
            message: "Enter ID of Employee's Manager",
            name: 'manager_id',
            validate: (inp) => {
                check = parseInt(inp);
                // if (check !== Number) {
                //     return "Please Enter a Number"
                // }
                return true;
            }
        },
    ],

    addRole: [
        {
            type: 'input',
            message: "Enter New Title",
            name: 'title'
        },
        {
            type: 'input',
            message: "Enter Salary for this Role",
            name: 'salary'
        },
        {
            type: 'input',
            message: "Enter Department ID for this Role",
            name: 'department_id',
            
        },
    ],

    addDept: {
        type: 'input',
        message: "Enter New Department Name",
        name: 'name'
    },

    updateEmp: [
        {
            type: 'input',
            message: "Enter ID of Employee to Update",
            name: 'employee_id'
        },
        {
            type: 'input',
            message: "Enter ID of Their New Role",
            name: 'role_id'
        },
    ]
}

exports.prompts = prompts;