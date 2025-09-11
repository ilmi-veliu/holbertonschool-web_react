// Interface de base Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // optionnel
}

// Directors étend Teacher et ajoute numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d’utilisation
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
