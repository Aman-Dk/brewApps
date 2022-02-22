import React from 'react'

import '../Styles.css'

export default function Card(props) {
  return (
    <div className="card m-2 p-0">
        <img src={props.img} className="card-img-top" alt=""/>
        <div className="card-body p-2">
            <h6 className="card-title">{props.name}</h6>
            <ul className="card-text">
                <li className="link">{props.link}</li>
                <li className="address">{props.address}</li>
            </ul>
            {
                props.link2 ?

                <ul className="card-text">
                <li className="link">{props.link2}</li>
                <li className="address">{props.address2}</li>
            </ul>

            : null
            }

        </div>
    </div>
  )
}
