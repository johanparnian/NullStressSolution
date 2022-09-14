
import AddStudentToClass from "../Components/Admin/AddStudentToClass"
import AddGroup from "../Components/Admin/CreateGroup"
import HeaderMenu from "../Components/Admin/HeaderMenu"
import ShowStudents from "../Components/Admin/ShowStudents"


export default function Klasse() {
    return (
        <div>
            <HeaderMenu />
            <AddGroup />   
            <ShowStudents />      
        </div>
    )
}