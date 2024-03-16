import { useState } from 'react'
import CarousselItem from './CarousselItem'

function Caroussel() {

    const [isActive, setIsActive] = useState(0)

    const updateIndex = (i) => {
        if(i < 0){
            i = 0;
        }else if (i >= items.length){
            i = items.length - 1;
        }
        setIsActive(i)
    }

    const items = [
        {img : '#', title : 'john'},
        {img : '#', title : 'Doe'},
        {img : '#', title : 'Smith'},
    ]
  return (
    <div className=' ' style={{transform: `translate(-${isActive * 100}%)`}}>
        {
            items.map((item, idx) => {
                return(
                    <CarousselItem key={idx}  data={item} />
                )
            })
        }
        <div>
            <button onClick={()=>{updateIndex(isActive - 1)}}>nextl</button>
            <button onClick={()=>{updateIndex(isActive + 1)}}>nextr</button>
        </div>
    </div>
  )
}

export default Caroussel