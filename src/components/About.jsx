import React from 'react';

import jumboData from '../utils/about.json'
import '../assets/jumbo.css'

export default function About() {


    return (
      <>
<div className="jumbo-container">
  {jumboData.map((item) => (
    <div key={item.id} className={`jumbo ${item.direction}`}>
      <div className="jumbo-pane">
        <h1 className="jumbo-title">{item.title}</h1>
        <h2 className="jumbo-subtitle">{item.subTitle}</h2>
      </div>
      <div className="jumbo-pane">
        <img className="jumbo-image" src={item.image} alt={item.alt} />
      </div>
    </div>
  ))}
</div>


 </>
  )
  
}
