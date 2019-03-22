import {Request, Response} from 'express';
import {UserRepository} from '../domain/repository/UserRepository';

export class UserController {
  public async createUser(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const response = await userRepository.create(req.body);

    res.status(200).send(response);
  }

  public async getUserList(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const response = await userRepository.findAll();

    res.status(200).send(response);
  }

  public async getUserById(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const response = await userRepository.findOne(req.params.id);
    if (!response) {
      res.status(400).send({message: 'User not found..!'});
    }

    res.status(200).send(response);
  }

  public async deleteUserById(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const response = await userRepository.delete(req.params.id);
    if(!response) {
      res.status(400).send({message: 'User not found..!'}); 
    }

    res.status(200).send({message: 'User has been deleted..!'});
  }

  public async updateUserById(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const response = await userRepository.update(req.params.id, req.body);
    if (!response) {
      res.status(400).send({message: 'User not found..!'});
    }
    res.status(200).send(response);
  }
}