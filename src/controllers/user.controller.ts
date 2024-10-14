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

export const uploadProfilePhoto = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user._id;
    const imageUrl = (req.file as any).path;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { photo: imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res
      .status(200)
      .json({ message: "Foto de perfil actualizada", photo: imageUrl });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al subir la foto de perfil", error });
  }
};
