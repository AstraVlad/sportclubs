import { Router, Request, Response } from 'express';
const router = Router();

router.post('/forgot', (req: Request, res: Response) => {
  const { email } = req.body;
  res.status(200);
  res.send(
    `A message with further instructions has been sent to the mail ${email}`
  );
});

module.exports = router;
