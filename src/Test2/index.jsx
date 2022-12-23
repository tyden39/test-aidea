import React, { useState } from 'react'
import './index.css'
import Input from './Input'
import { people } from './data'
import user from '../assets/user.png'

const Test2 = () => {
  const [originList] = useState([...people])
  const [currList, setCurrList] = useState([...people])
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    const val = e.target.value
    setValue(val)

    const searchByName = originList.filter(x => x.name.toLowerCase().includes(val.toLowerCase()))
    const searchByAddress = originList.filter(x => x.address.toLowerCase().includes(val.toLowerCase()))
    const searchByCategory = originList.filter(x => x.category.toLowerCase().includes(val.toLowerCase()))
    const result = searchByName.length <= 0 ? searchByAddress.length <= 0 ? searchByCategory : searchByAddress : searchByName
    setCurrList(result)
  }
  
  const handleAZ = () => {
    const result = originList.sort((a, b) => {
      if (a.name.localeCompare(b.name) < 0) return -1
      if (a.name.localeCompare(b.name) > 0) return 1
      if (a.address.localeCompare(b.address) < 0) return -1
      if (a.address.localeCompare(b.address) > 0) return 1
      if (a.category.localeCompare(b.category) < 0) return -1
      if (a.category.localeCompare(b.category) > 0) return 1
      return 0
    })
    setCurrList(result)
  }

  const handleAddress = () => {
    const result = originList.sort((a, b) => {
      if (a.address.localeCompare(b.address) < 0) return -1
      if (a.address.localeCompare(b.address) > 0) return 1
      return 0
    })
    setCurrList(result)
  }

  return (
    <div className='test2'>
      <div className="search">
        <Input type={'text'} value={value} onChange={handleChange} clearable="true"/>
        <button onClick={handleAZ}>A-Z</button>
        <button onClick={handleAddress}>Address</button>
      </div>
      <ul className='test2__item'>
        {currList.map((item, index) => <li key={`search-${index}`}>
          <div className="test2__item__avatar">
            <img src={user} alt="user" />
          </div>
          <div className="test2__item__info">
            <p>{`${item.name}`}</p>
            <p className='test2__item__info__address'>{`${item.address}`}</p>
            <p className='test2__item__info__tag'>{`${item.category}`}</p>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default Test2