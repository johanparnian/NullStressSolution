import DeleteAndEditStudent from "./DeleteAndEditStudent";
import { useEffect, useState } from "react";

export default function DeleteEditStudentList() {
  const [students, setStudents] = useState([]);

  function deleteStudentFromList(id) {
    const newStudents = [];
    students.forEach((student) => {
      if (student.id !== id) {
        newStudents.push(student);
      } 
    });
    setStudents(newStudents);
  }

  function updateStudentFromList(name, id) {
    const studentsCopy = [...students];
    const objIndex = studentsCopy.findIndex((obj) => obj.id == id);
    studentsCopy[objIndex].name = name;
    setStudents(studentsCopy);
  }

  async function getList() {
    const endpoint = "https://localhost:7212/api/students";

    const response = await fetch(endpoint).catch((error) => {
      console.log(error);
      throw error;
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.log(response);
    }
  }

  useEffect(() => {
    getList().then((students) => setStudents(students));
  }, []);

  return (
    <div>
      <p>Here are the students in your class:</p>
      <div key={students.id}>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}<br></br>
            {student.phoneNumber}<br></br>
            {student.link}
            <DeleteAndEditStudent
              name={student.name}
              id={student.id}
              updateStudentFromList={updateStudentFromList}
              deleteStudentFromList={deleteStudentFromList}
            />
          </li>
        ))}
      </div>
    </div>
  );
}