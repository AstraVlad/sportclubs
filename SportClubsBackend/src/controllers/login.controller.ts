import { loginService } from "../services/login.service";
import {NextFunction, Request, Response} from 'express';

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await loginService('test', 'test')
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    //res.sendStatus(201)
    res.send(result)
    next()
  } catch(e: any) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}