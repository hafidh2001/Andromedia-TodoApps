import { api } from 'web-init'

export default api('/api/todoApp/update', async ({ req, reply, db, ext }) => {
  const { id }: any = req.query
  const updateList = await db.lists.update({
    where: {
      id: Number(id),
    },
    data: {
        ...req.body
    }
  })
  console.log(updateList)
  reply.send([{ status: 'Data berhasil diperbaharui !' }, updateList])
})
