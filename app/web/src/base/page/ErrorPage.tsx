// import module with object literal {}
import { page } from 'web-init'

export default page({
  url: '/*',
  layout: 'blank',
  component: ({}) => {
    return (
      <div className="bg-slate-900 w-full h-screen flex items-center justify-center cursor-default">
        <div>
          <h1 className="mt-2 mb-8 text-center font-bungee text-9xl text-stone-50">
            404
          </h1>
          <h2 className="mt-8 mb-2 text-center uppercase font-bungee text-3xl text-stone-200">
            Uh uh, not here. I suggest you to try to check your typing tho !!
          </h2>
        </div>
      </div>
    )
  },
})
