// import module with object literal {}
import { useState, useEffect } from 'react'

const TodoList = () => {
  // destructuring array | initial value = empty array
  const [lists, setList] = useState([])

  // use effect componentDidMount | initial value = empty array
  useEffect(() => {
    getList()
  }, []) // empty array in useEffect for stop looping run function getList

  // asynchronous arrow function expression get-allData
  const getList = async () => {
    const response = await fetch('http://localhost:3200/api/todoApp')
    const res = await response.json()
    // console.log(res)
    setList(res[1]) // array[1] : content / value ; array[0] status / message (check api reply.send)
  }

  // asynchronous arrow function expression updateStatus-done
  const updateStatus = async ({ id, status }) => {
    // console.log(status);
    status = !status
    // console.log(status);

    await fetch(`http://localhost:3200/api/todoApp/update?id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: status,
      }),
    })
    getList()
  }

  // asynchronous arrow function expression delete-dataById
  const deleteList = async (id) => {
    const response = await fetch(
      `http://localhost:3200/api/todoApp/delete?id=${id}`,
      { method: 'GET' }
    )
    console.log(response)
    getList()
  }

  return (
    <div id="listComponent" className="component-home flex flex-col">
      {lists.map((list: any) => (
        <div
          key={list.id}
          className={`card-note ${list.status ? 'line-through bg-second' : ''}`}
        >
          <span onClick={() => updateStatus(list)} className="text-note">
            {list.text}
          </span>
          <div className="button m-1 basis-1/5 flex justify-center">
            <button
              onClick={() => navigate(`/${list.id}/update`)}
              id="editBtn"
              className=" w-7 h-7 m-1 mr-[0.5px] py-0 px-1 bg-slate-800 rounded-md outline-none border-none cursor-pointer hover:bg-slate-900 hover:scale-105 group"
            >
              <span className="m-auto text-sm group-hover:scale-105">✏️</span>
            </button>
            <button
              onClick={() => deleteList(list.id)}
              className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md outline-none border-none cursor-pointer hover:bg-slate-900 hover:scale-105 group"
            >
              <span className="m-auto text-sm group-hover:scale-105">❌</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList
