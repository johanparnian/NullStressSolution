import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import React from 'react'
import Image from "next/image";

import SendMood from '../../Components/Create/CreateMood';
import CreateStudentAlert from '../../Components/Create/SendStudentAlert';

const StudentFront = () => {
  const router = useRouter()
  const { id } = router.query

  const [student, setStudent] = useState({})

  useEffect(() => {
      const endpoint = `https://localhost:7212/api/students/${id}`

      fetch(endpoint)
          .then(response => response.json())
          .then(data => setStudent(data))
          .catch(error => {
              console.log(error)
              throw error
          })
  }, [id])
  return (
<>
<div>
        <SendMood id = {student.id} ></SendMood>
        <CreateStudentAlert id = {student.id}></CreateStudentAlert>
</div>


</>
  )
}

export default StudentFront;

