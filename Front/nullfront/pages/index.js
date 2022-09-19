import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Show/Header'
import ShowStudents from '../Components/Show/ShowStudents'
import ShowAllStudents from '../Components/Show/ShowAllStudentst'


//import ShowClasses from '../Components/Show/ShowClasses'

export default function Index() {
  return (
    <>
    <Header></Header>
<ShowAllStudents></ShowAllStudents>  
    </>
  )
}