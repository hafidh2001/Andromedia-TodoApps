import { api } from 'web-init'

export default api('/api/todoApp/delete', async ({ req, reply, db, ext }) => {
  const { id }: any = req.query
  const deleteTodo = await db.lists.delete({
    where: {
      id: Number(id),
    },
  })
  console.log(deleteTodo)
  reply.send([{ status: 'Data berhasil dihapus !' }, deleteTodo])
})
