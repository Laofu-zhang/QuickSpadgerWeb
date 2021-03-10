/*
 * @Author: zhangyun
 * @Date: 2021-03-10 10:16:31
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 11:47:24
 * @Desc: 
 */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './dropdown.scss'

interface itemProps {
  name: string,
  value: string
}
function Dropdown(props: any) {
  const {children, items} = props;
  const [show, setShow] = useState(false)
  const handleDropdownClick = () => {
    setShow(!show)
  }
  return (
    <div className="dropdown" onClick={handleDropdownClick}>
      {children}
      {
        show && <div className="dropdown-content bg-gray-100 absolute bg-white py-2 mt-1 dropdown-in dropdown-out">
          {
            items.map((item:itemProps) => {
              return <div className="item text-gray-600 text-sm mx-2 hover:bg-gray-600 hover:text-white text-center p-1 rounded" key={item.value}>
                <Link to={item.value}>{item.name}</Link>
              </div>
            })
          }
        </div>
      }
    </div>
  )
}

export default Dropdown