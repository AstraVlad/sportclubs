
const dummyController = (req: Express.Request, res: Express.Response) => {
  res.send(`Dummy responce for ${req.url}`)
}

const paramsDummyController = (req: Express.Request, res: Express.Response) => {
  res.send(`Dummy responce for ${req.url} with params ${req.params.id}`)
}

const queryDummyController = (req: Express.Request, res: Express.Response) => {
  res.send(`Dummy responce for ${req.url} with query ${req.query}`)
}

export {dummyController, paramsDummyController, queryDummyController}