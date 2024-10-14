import { UserModel, IUser } from "../models/User";

export class UserRepository {
  async create(userData: Partial<IUser>) {
    return await UserModel.create(userData);
  }

  async findByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async updateStatus(userId: string, status: "active" | "inactive") {
    return await UserModel.findByIdAndUpdate(userId, { status }, { new: true });
  }
  
  async updatePlan(userId: string, planId: string) {
    return await UserModel.findByIdAndUpdate(
      userId,
      { plan: planId },
      { new: true }
    );
  }
}
