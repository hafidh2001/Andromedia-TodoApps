// import module with object literal {}
import {useState} from 'react'

const TodoUpdate = (e) => {
  // destructuring array | initial value = empty string
  const [text, setText] = useState("");

   // asynchronous arrow function expression update-dataById
  const updateList = async (id) => {
    // navigate("/"); // navigate diatas : mengakibatkan ketika sudah berpindah ke halaman yang dituju, data yang ditampilkan masih dalam proses load

    // check apakah input-value kosong / tidak
    if (!text) {
      e.preventDefault(); // avoid page reload
      return;
    }

    await fetch(`http://localhost:3200/api/todoApp/update?id=${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text:text,
      })
    })
    // kosongkan input-value setelah data ditambahkan
    setText("");

    window.location.href = "http://localhost:3200/"; // pindah ke-halaman selanjutnya ketika data sudah diubah
  }

  return (
    <div>
    <div id="editComponentForm" className="components-home">
      <form onSubmit={updateList}
        className="flex flex-row justify-center my-2"
      >
        <input
          type="text"
          id="text"
          placeholder="Ubah catatan"
          className="w-3/4 bg-transparent border-2 border-[#ff5411] rounded-l-md my-0 mx-0 py-2 px-3 outline-none font-inter text-sm text-slate-50 box-border overflow-hidden placeholder:text-slate-400 placeholder:font-inter"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="w-[100px] bg-primary border-none rounded-r-md my-0 mx-0 py-2 px-1 box-border overflow-hidden font-inter text-sm font-bold text-slate-50">
          Ubah
        </button>
      </form>
    </div>
    <div
      id="editComponentText"
      className="component-home flex flex-col cursor-default"
    >
      <h3 className="text-slate-50 font-inter text-sm font-light">
        Update List :
      </h3>
      <div className="card-edit">
        <span className="text-edit">{text}</span>
      </div>
    </div>
  </div>
  )
}

export default TodoUpdate