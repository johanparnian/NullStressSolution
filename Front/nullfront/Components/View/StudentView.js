import { useRouter } from 'next/router'
import ShowMoods from '../../../../Components/Show/ShowMoods'


const StudentView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Student ID: {id}</p>    
             <ShowMoods />                   
        </div>
    )
  }

  export default StudentView;