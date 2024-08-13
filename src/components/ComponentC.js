import React from 'react'
import ComponentE from './ComponentE'


// with props drilling
// function ComponentC({name}) {
//   return (
//     <div className='bg-success text-white'>ComponentC
//     <p>Can you see the name value?</p>
//     <p>Yes I can - {name}</p>
//     <ComponentE name={name}/>
//     </div>
//   )
// }
function ComponentC() {
  return (
    <div className='bg-success text-white'>ComponentC
    <p>Can you see the name value?</p>
    <p>No I can't - </p>
    <ComponentE/>
    </div>
  )
}

export default ComponentC