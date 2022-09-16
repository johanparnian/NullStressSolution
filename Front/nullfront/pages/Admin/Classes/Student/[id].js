import { useRouter } from 'next/router'
import ShowMood from '../../../../Components/Show/ShowMood'


const StudentView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Student ID: {id}</p>    
             <ShowMood />                   
        </div>
    )
  }

  export default StudentView;