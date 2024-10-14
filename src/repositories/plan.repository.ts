import { PlanModel, IPlan } from "../models/Plan";

export class PlanRepository {
  async create(planData: Partial<IPlan>) {
    return await PlanModel.create(planData);
  }

  async getAll() {
    return await PlanModel.find();
  }

  async getById(planId: string) {
    return await PlanModel.findById(planId);
  }

  async update(planId: string, planData: Partial<IPlan>) {
    return await PlanModel.findByIdAndUpdate(planId, planData, { new: true });
  }

  async delete(planId: string) {
    return await PlanModel.findByIdAndDelete(planId);
  }
}
