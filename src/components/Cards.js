import React from 'react'
import Card from './Card'

import { getData } from './data'

export default function Cards(){

    let Data = getData();

    let lists = Data.map((data,index)=>{
        return(
            <Card 
                key={index}
                name={data.name}
                img={data.img}
                link={data.link}
                address={data.address}
                link2={data.link2}
                address2={data.address2}
            />
        )
    })

    return (
      <div className='row m-auto'>
          {lists}
      </div>
    )

}
