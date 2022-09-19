import DeleteAndEditStudent from "./DeleteAndEditStudent";
import { useEffect, useState } from "react";

const studentIconSize = 20;

export default function DeleteEditStudentList(props) {
  console.log(props.students)

  if (!props.students) {
    return <></>
  }
  // const [students, setStudents] = useState([]);

  // function deleteStudentFromList(id) {
  //   const newStudents = [];
  //   students.forEach((student) => {
  //     if (student.id !== id) {
  //       newStudents.push(student);
  //     }
  //   });
  //   setStudents(newStudents);
  // }

  // function updateStudentFromList(name, id) {
  //   const studentsCopy = [...students];
  //   const objIndex = studentsCopy.findIndex((obj) => obj.id == id);
  //   studentsCopy[objIndex].name = name;
  //   setStudents(studentsCopy);
  // }

  // async function getList() {
  //   const endpoint = "https://localhost:7212/api/students";

  //   const response = await fetch(endpoint).catch((error) => {
  //     console.log(error);
  //     throw error;
  //   });

  //   if (response.ok) {
  //     return await response.json();
  //   } else {
  //     console.log(response);
  //   }
  // }

  // useEffect(() => {
  //   getList().then((students) => setStudents(students));
  // }, []);

  return (
    <div>
        List of students:
        {props.students.map((ztudents) => (
            <div key={ztudents.id}>
                <a href={`Student/${ztudents.id}`}><li key={ztudents.id}>{ztudents.name}</li></a>
            </div>
        ))}
    </div>
)

  // return (
  //   <div>
  //     <p>Elever i klassen</p>
  //     <div key={students.id}>
  //       { students.map((student) => (
  //         <p key={student.id}>

  //           <img src="/user.png"
  //             height={studentIconSize}
  //           >
  //           </img> &ensp;
  //           <a href={`Student/${ztudents.id}`}>{student.name}</a><br></br>


  //           <img src="/telephone-call.png"
  //             height={studentIconSize}
  //             text-align="center">
  //           </img> &ensp;
  //           {student.phoneNumber}<br></br>


  //           <img src="/link.png"
  //             height={studentIconSize}
  //             position="center">
  //           </img> &ensp;
  //           {student.link}
  //           <p></p>

  //           <DeleteAndEditStudent
  //             name={student.name}
  //             id={student.id}
  //             updateStudentFromList={updateStudentFromList}
  //             deleteStudentFromList={deleteStudentFromList}
  //           />
  //         </p>
  //       ))}
  //     </div>
  //   </div>
  // );
}