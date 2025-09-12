// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // permet d’ajouter d’autres props dynamiques
}

// Exemple d’utilisation
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false, // propriété en plus
};

console.log(teacher3);

// Interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // permet d’ajouter des propriétés dynamiques
}

// Interface Directors qui étend Teacher
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
