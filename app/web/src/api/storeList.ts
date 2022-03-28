import { api } from 'web-init'

export default api('/api/todoApp/store', async ({ req, reply, db, ext }) => {
    const storeList = await db.lists.create({
        data: {
            ...req.body
        }
    });
    console.log(storeList)
    reply.send([{ status: 'Data berhasil ditambahkan !' }, storeList])
})
