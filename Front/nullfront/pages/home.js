import Head from 'next/head'
import Image from 'next/image'
import AddStudent from '../Components/Admin/AddNewstudent'
import HeaderView from '../Components/Admin/HeaderView'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/CreateAdmin'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentIndex from './studentindex'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            Hello from home.js
        </div>
    )
}