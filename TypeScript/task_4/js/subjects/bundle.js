var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements for Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return "Here is the list of requirements for React";
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var teacher = {
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
