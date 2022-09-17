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
      <p>Elever i klassen</p>
      <br></br>
      <div key={students.id}>
        {students.map((student) => (
          <p key={student.id}>

            <img src="user.png"
              height="30"
              >
            </img> &ensp;
            {student.name}<br></br>


           <img src="telephone-call.png"
              height="30"
              text-align="center">
            </img> &ensp; 
            {student.phoneNumber}<br></br>


            <img src="link.png"
              height="30"
              position="center">
            </img> &ensp; 
            {student.link}
            
            <DeleteAndEditStudent
              name={student.name}
              id={student.id}
              updateStudentFromList={updateStudentFromList}
              deleteStudentFromList={deleteStudentFromList}
            />
          </p>
        ))}
      </div>
    </div>
  );
}