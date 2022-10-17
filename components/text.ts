export function Test() {
  type Car = {
    color: "black" | "gray" | "red" | "blue" | "green";
    model: string;
    manufacturer: string;
    productionYear: number;
  };
  type Person = {
    age: number;
    cars: Car[];
    firstName: string;
    middleName?: string;
    lastName: string;
  };

  type Student = Person & {
    numberOfCourses: number;
    studentId: string;
    studentLoanValue?: number;
  };
  type Teacher = {
    department: string;
    salary: number;
    teacherId: string;
  } & Person;

  const formatName = (user: Person) => {
    return user.firstName + " " + user.lastName;
  }

  let x: Student = {
    age: 27,
    cars: [],
    firstName: "Jade", 
    lastName: "Ghadry",
    numberOfCourses: 6,
    studentId: "201901989",
  }
}
