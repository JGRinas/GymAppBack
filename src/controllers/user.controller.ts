import { Request, Response } from "express";
import { UserModel } from "../models/User";

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const user = await UserModel.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user profile", error });
  }
};

export const updateProfilePhoto = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { photo } = req.body;

    if (!photo) {
      res.status(400).json({ message: "Photo URL is required" });
      return;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { photo },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      message: "Profile photo updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile photo", error });
  }
};
