/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
  experienceTeachingReact: 0,
  experienceTeachingJava: 5,
};

cpp.setTeacher(teacher);
react.setTeacher(teacher);
java.setTeacher(teacher);

console.log("CPP:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("React:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("Java:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
