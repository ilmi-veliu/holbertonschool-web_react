interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  const student1: Student = {
    firstName: "Ali",
    lastName: "Khan",
    age: 22,
    location: "Paris",
  };
  
  const student2: Student = {
    firstName: "Fatima",
    lastName: "Zahra",
    age: 21,
    location: "Casablanca",
  };
    const studentsList: Student[] = [student1, student2];
    const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// parcourir la liste des étudiants
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// ajouter le tableau au body de la page
document.body.appendChild(table);
  