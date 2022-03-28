// import module with object literal {}
import { useState, useEffect } from 'react'

const TodoShow = () => {
  // destructuring array | initial value = empty string
  const [text, setText] = useState('')

  // use effect componentDidMount | initial value = id-data
  useEffect(() => {
    // asynchronous arrow function expression get-dataById
    const showListById = async (id) => {
      const response = await fetch(
        `http://localhost:3200/api/todoApp/show?id=${id}`
      )
      const res = await response.json()
      // console.log(res[1]]);
      setText(res[1].text)
    }

    showListById(params.id)
  }, [params.id])

  return (
    <div
      id="showComponent"
      className="component-home flex flex-col cursor-default"
    >
      <h3 className="text-slate-50 font-inter text-sm font-light">List :</h3>
      <div className="card-note">
        <span className="text-edit">{text}</span>
      </div>
    </div>
  )
}

export default TodoShow
