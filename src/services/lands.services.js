import { landsModel } from "../models/lands.Model.js";
import { successResponse } from "../utils/response.js";

export const createLand = async (req, res) => {
    try {
        const {  statement, type, amount } = req.body;

        if (!statement|| !type || amount === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields ( statement,type, Amount) are required"
            });
        }
        const newLand = await landsModel.create({ statement, type, amount });
        return successResponse(res, 201, "Land created successfully", newLand);

    } catch (error) {
        console.error("Create Land Error:", error);
        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: error.errors.map(e => e.message)
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
