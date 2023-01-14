
const dummyController = (req: any, res: any) => {
  res.send(`Dummy responce for ${req.url}`)
}

const paramsDummyController = (req: any, res: any) => {
  res.send(`Dummy responce for ${req.url} with params ${req.params.id}`)
}

const queryDummyController = (req: any, res: any) => {
  res.send(`Dummy responce for ${req.url} with query ${req.query}`)
}

export {dummyController, paramsDummyController, queryDummyController}