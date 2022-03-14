// Задание №1

// Используя API списка всех стран выведите таблицу
// с информацией о всех странах:
// API: https://restcountries.eu/rest/v2/all

// ! answers
// API: https://restcountries.eu/rest/v2/all
// let API = "https://restcountries.com/v3.1/all";
// async function checkTask() {
//   await fetch(API)
//     .then((result) => result.json())
//     .then((data) => {
//       data.forEach((item) => {
//         let elem = `<tr>
//           <td>${item.cca2}</td>
//           <td class="img" style="background: url(${item.flags.svg})"></td>
//           <td>${item.name.official}</td>
//           <td>${item.capital}</td>
//           <td>${item.population}</td>

//           </tr>`;
//         $("tbody").append(elem);
//         $(".img").css("background-size", "contain");
//       });
//     });
// }
// checkTask();

// Задание 2

// Создайте класс Student, конструктор которого имеет
// параметры name, lastName, department, yearOfEntrance.
// Добавьте метод getStudentInfo, который возвращает имя,
// фамилию, год поступления и факультет в отформатированном виде: “Вася Иванов поступил в 2017 г. на факультет: Программирование.”

// ! answers
// class Student {
//   constructor(name, lastName, department, yearOfEntrance) {
//     this.name = name;
//     this.lastName = lastName;
//     this.department = department;
//     this.yearOfEntrance = yearOfEntrance;
//   }
//   getStudentInfo() {
//     console.log(
//       `${this.name} ${this.lastName} поступил в ${this.yearOfEntrance} г. на факультет: ${this.department}`
//     );
//   }
// }
// let student = new Student("Асан", "Усенов", "програмирование", 2018);
// student.getStudentInfo();

// Задание 3

// Реализуйте класс Student (Студент),
// который будет наследоваться от класса User.
// Этот класс должен иметь следующие свойства:
// ● name (имя, наследуется от User),
// ● surname (фамилия, наследуется от User),
// ● birthday (год рождения, наследуется от User),
// ● isAdult (совершеннолетний, по умолчанию undefined).
// Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно
// вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getAge(),
// который будет выводить возраст студента.
// Возраст вычисляется так: от текущего года отнять год рождения.
// И в случае, если студент совершеннолетний менять поле isAdult на true
// (в противном случае false)

// ! answers
// class User {
//   constructor(name, surname, birthday, isAdult) {
//     this.name = name;
//     this.surname = surname;
//     this.birthday = birthday;
//     this.isAdult = undefined;
//   }
//   getFullName() {
//     console.log(`My name is ${this.name} ${this.surname}`);
//   }
//   getAge() {
//     let age = new Date().getFullYear() - this.birthday;
//     console.log(age);
//     this.isAdult = age >= 18 ? true : false;
//   }
// }
// class Student extends User {
//   constructor(name, surname, birthday, isAdult) {
//     super(name, surname, birthday, isAdult);
//   }
// }

// let student = new Student("Azim", "Zheldenbaev", 2000);
// console.log(student);
// student.getFullName();
// student.getAge();
// console.log(student);
