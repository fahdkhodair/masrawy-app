import { branchsModel } from "../models/branchs.Model.js";
export const createBranch = async (req, res) => {
    try {
        const { branchName, address, phone } = req.body;

        const newBranch = await branchsModel.create({ branchName, address, phone });

        return res.status(201).json(newBranch);

    } catch (error) {
        console.log("FULL ERROR:", error);
        return res.status(500).json({
            message: error.message,
            error: error
        });
    }
};


