
import AddStudentToClass from "../Components/Admin/AddStudentToClass"
import AddGroup from "../Components/Admin/CreateGroup"
import AddStudent from "../Components/Admin/CreateStudent"
import HeaderMenu from "../Components/Admin/HeaderMenu"


export default function Klasse() {
    return (
        <div>
            <HeaderMenu />
            <AddGroup />  
        </div>
    )
}