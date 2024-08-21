import Util from "@/utils/util";

export default class UserService {
  async getAllUsers(endpoint: string): Promise<void> {
    try {
      const data = Util.fetchApi(endpoint, {});
    } catch (error) {}
  }
}
