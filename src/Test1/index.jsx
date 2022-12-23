import React, { useRef, useState } from 'react'
import './index.css'
import { itemList } from './data'
import DotList from './DotList'

const Test1 = () => {
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const slider = useRef()

  const end = () => {
    setIsDown(false)
    slider.current.classList.remove('active');
  }

  const start = (e) => {
    setIsDown(true)
    slider.current.classList.add('active');
    setStartX(e.pageX || e.touches[0].pageX - slider.current.offsetLeft)
    setScrollLeft(slider.current.scrollLeft)
  }

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.current.offsetLeft;
    const dist = (x - startX);
    slider.current.scrollLeft = scrollLeft - dist;
  }

  const handleChangeDot = (item) => {
    const x = item*196*5
    slider.current.scrollLeft = x;
  }

  return (
    <div className='wrapper'>
      <ul ref={slider} className="items"
        onMouseDown={start}
        onMouseMove={move}
        onMouseLeave={end}
        onMouseUp={end}>
        {itemList.map((item, index) => <li key={`item-${index}`} className="item">{item}</li>)}
      </ul>
      <DotList itemList={itemList} changeDot={handleChangeDot} />
    </div>
  )
}

export default Test1