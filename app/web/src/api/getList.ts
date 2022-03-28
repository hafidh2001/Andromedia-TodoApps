import { api } from 'web-init'

export default api('/api/todoApp', async ({ req, reply, db, ext }) => {
    const getList = await db.lists.findMany({
        orderBy: {id:'asc'}
    });
    console.log(getList);
    reply.send([{ status: 'Data berhasil ditampilkan !' }, getList])
})
