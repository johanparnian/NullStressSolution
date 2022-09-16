import { useRouter } from 'next/router'


const StudentView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Student ID: {id}</p>                       
        </div>
    )
  }

  export default StudentView;