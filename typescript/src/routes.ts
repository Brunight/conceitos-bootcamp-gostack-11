import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'brunorodriguesricardo@gmail.com',
    password: '123456',
    techs: [
      'Node.JS', 
      'ReactJS',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World' });
}