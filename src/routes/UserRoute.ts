import {UserController} from '../controllers/UserController';

export class UserRoute {
  private controller: UserController = new UserController();

  public routes(app) {
    app.post('/user/create', this.controller.createUser);
    app.get('/user/list', this.controller.getUserList);
    app.get('/user/find/:id', this.controller.getUserById);
    app.patch('/user/update/:id', this.controller.updateUserById);
    app.delete('/user/delete/:id', this.controller.deleteUserById);
  }
}