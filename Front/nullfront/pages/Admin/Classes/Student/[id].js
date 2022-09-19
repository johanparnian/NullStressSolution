// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'




// const ClassView = () => {
//     const router = useRouter()
//     const { id } = router.query

//     const [students, setStudents] = useState({})

//     useEffect(() => {
//         const endpoint = `https://localhost:7212/api/schoolclasses/${id}`

//         fetch(endpoint)
//         .then(response => response.json())
//         .then(data => setSchoolClasses(data))
//         .catch(error => {
//             console.log(error)
//             throw error
//         })
//     }, [id])

//     return (
//         <div>
//             <p>SchoolClass ID: {id}</p>
//             <h1>Adminen sin oversikt over studenter</h1>
//             <ShowStudents students={schoolClasses.students}/>
//             <h1>Her legger Admin til nye studenter</h1>
//             <AddStudentToClass id={id} />
//         </div>

//     )
// }

// export default ClassView;