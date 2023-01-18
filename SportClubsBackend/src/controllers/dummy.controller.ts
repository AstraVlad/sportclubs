import { Request, Response } from "express"

const dummyController = (req: Request, res: Response) => {
  res.send(`Dummy responce for ${req.url}`)
}

const paramsDummyController = (req: Request, res: Response) => {
  res.send(`Dummy responce for ${req.url} with params ${req.params.id}`)
}

const queryDummyController = (req: Request, res: Response) => {
  res.send(`Dummy responce for ${req.url} with query ${req.query}`)
}

export {dummyController, paramsDummyController, queryDummyController}