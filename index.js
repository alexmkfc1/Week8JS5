// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// *Use at least one array.
// *Use at least two classes.
// *Your menu should have the options to create, view, and delete elements.

//Menu Motorcycle 



// Create a class for the students 
// name, lastname, age, grade

class Students {
    constructor(name, lastname, age, grade) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.grade = grade;
    }
};    

// class Menu
// This class will show the menu and handle the options selected by the user
// It will also handle the array of students

class Menu {
    constructor() {
        this.Students = [];
    }
// This method shows the menu and returns the option selected by the user
    showMenu() {
      return prompt
        (`
        Menu 
        -------------------------------
            1) Add Student
            2) Delete Student
            3) Show Students
            4) Exit

            select an option:
        -------------------------------
        `);
    }

// This method Start the menu  and handle the options selected by the user
    StartMenu() {
        let option = this.showMenu();
        while (option != 4) {
            switch (option) {
                case "1":
                    this.addStudents();
                    break;
                case "2":
                    this.deleteStudents();
                    break;
                case "3":
                    this.showStudents();
                    break;
                default:
                    alert("Invalid option");
            }
            option = this.showMenu();
        }
        alert("Goodbye");
    }
    // Add Student
    // ask for the name, lastname, age and grade of the student
    // and add it to the array of students
    addStudents() {
        let studentName = prompt("Enter Student Name : ");
        let studentLastname = prompt("Enter Student Last Name : ");
        let studentAge = prompt("Enter Age : ");
        let studentGrade = prompt("Enter Grade : ");
        this.Students.push(new Students(studentName, studentLastname, studentAge, studentGrade));
    }

    //Delete Student
    // show in the screen the list of students and ask for the index to delete
    deleteStudents() {
        let studentIndex = prompt("Enter Student Index to delete : ");
        this.Students.splice(studentIndex, 1);
}

    // Show Students
    // show in the screen the list of students
    showStudents() {
        let showStudents= "";
        for (let i = 0; i < this.Students.length; i++) {
            showStudents += `${i + 1})
            Name: ${this.Students[i].name} 
            Last Name: ${this.Students[i].lastname} 
            Age: ${this.Students[i].age} 
            Grade: ${this.Students[i].grade}
            `;
        }
        alert (`
        Students
        -------------------------------
        ${showStudents}
            `)
    }


}
// Create a new instance of the Menu class
// Show the menu
let menu = new Menu();

menu.StartMenu();

  


