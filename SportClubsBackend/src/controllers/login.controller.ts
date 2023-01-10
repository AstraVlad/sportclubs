import { loginService } from "../services/login.service";
import {NextFunction, Request, Response} from 'express';

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body) {
      console.log(req.body)
      const username = req.body.username || 'test';
      const password = req.body.password || 'test';
      const result = await loginService(username, password)
      res.send(result)
    } else {
      res.send('No credentials provided')
    }
    // other service call (or same service, different function can go here)
    //res.sendStatus(201)
    next()
  } catch(e: any) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}