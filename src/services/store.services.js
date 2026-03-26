import { theStoreModel } from "../models/thestore.Model.js";
import { successResponse } from "../utils/response.js";

export const createStore = async (req, res) => {
    try {
        const { date, branch, product, quantity, serial } = req.body;

        if (!date || !branch || !product || quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields (date, branch, product, quantity) are required"
            });
        }

        const newStore = await theStoreModel.create({
            date,
            branch,
            product,
            quantity,
            serial
        });

        return successResponse(res, 201, "Store created successfully", newStore);

    } catch (error) {
        console.error("Create Store Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};



