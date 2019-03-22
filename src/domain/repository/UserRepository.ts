import {getRepository} from 'typeorm';
import {User} from '../entity/UserEntity';

export class UserRepository {
  public async create(userData): Promise<User> {
    const repository = getRepository(User);
    // Set user data
    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.type = userData.type;
    user.active = userData.active;
    // Save user data to database
    const result = await repository.save(user);
    return result;
  }

  public async findAll(): Promise<User[]> {
    const repository = getRepository(User);
    // Set user data
    const userList = await repository.find();
    return userList;
  }

  public async findOne(id): Promise<User> {
    const repository = getRepository(User);
    // Set user data
    const user = await repository.findOne(id);
    return user;
  }

  public async update(id, userData): Promise<User> {
    const repository = getRepository(User);
    // Get user by id
    const user = await repository.findOne(id);
    if (!user) {
      return user;
    }

    // Set user data
    user.name = userData.name;
    user.email = userData.email;
    user.type = userData.type;
    user.active = userData.active;
    // Update user data
    const result = await repository.save(user);
    return result;
  }

  public async delete(id): Promise<number> {
    const repository = getRepository(User);
    // Delete user data
    const result = await repository.delete(id);
    return result.affected;
  }
}