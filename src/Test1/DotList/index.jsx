import React from 'react'
import './index.css'

const DotList = ({itemList, changeDot}) => {
  const perDot = 5
  const count = itemList.length/perDot + (itemList.length%perDot === 0 ? 0 : 1)

  return (
    <div className='dot-wrapper'>
      {[...Array(count).keys()].map((item, index) => 
        <div key={`dot-${index}`} className='dot' onClick={() => changeDot(item)}></div>  
      )}
    </div>
  )
}

export default DotList