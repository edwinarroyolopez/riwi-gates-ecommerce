import UserService from "../services/userService";
import IUser from "../interfaces/userInterface";

const userService = new UserService();
describe("User service", () => {
  it("Should fetch all users", async () => {
    const users: IUser[] = await userService.getAllUsers();

    expect(Array.isArray(users)).toBe(true);
    if (users.length > 0) {
      expect(users[0]).toHaveProperty("id");
    }
  });

  it("Should fetch user by id", async () => {
    const user: IUser = await userService.getUserById(1);
    expect(user).toEqual({});
  });
});
