import { useRouter } from 'next/router'
import ShowMoods from '../../../../Components/Show/ShowMoods'


const ClassView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Elev ID: {id}</p>
        

            <h1>Her ser vi alle moodsene til eleven?</h1>
            <ShowMoods/>
        </div>
    )
  }

  export default ClassView;