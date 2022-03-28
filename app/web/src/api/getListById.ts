import { api } from 'web-init'

export default api('/api/todoApp/show', async ({ req, reply, db, ext }) => {
   
    const {id} : any = req.query;
    const getListById = await db.lists.findUnique({
        
        where: {
            id: Number(id)
        },
    })
    console.log(getListById)
    reply.send([{ status: 'Data berdasarkan ID berhasil ditampilkan !' }, getListById])
})
