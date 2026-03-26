import { EmployeeModel } from "../models/Employee.Model.js";

export const createEmployee = async (req, res) => {
  try {
    const { fullName, username, branch, password, phone, address } = req.body;
    const faceImage = req.files?.idCardFront?.[0]?.filename;
    const backImage = req.files?.idCardBack?.[0]?.filename;
    const newEmployee = await EmployeeModel.create({
      fullName,
      username,
      password,
      branch,
      phone,
      address,
      idCardFront: faceImage,
      idCardBack: backImage
    });

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: newEmployee
    });

  } catch (error) {
    console.error("Create Employee Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

