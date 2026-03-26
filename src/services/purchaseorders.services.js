import { Op } from "sequelize";
import { PurchaseOrdersModel } from "../models/Purchase Orders.Model.js";
/* =====================================
   Get All Purchase Orders
===================================== */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      order: [["date", "DESC"]] // latest first
    });
    
    if (!orders.length) {
      return res.json({ success: true, data: [] });
    }

    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

// Search orders by employee, branch, or category
export const searchOrders = async (req, res) => {
  try {
    const { query } = req.query;
    const orders = await Order.findAll({
      where: {
        // example using Sequelize OR condition
        [Op.or]: [
          { employee: { [Op.like]: `%${query}%` } },
          { branch: { [Op.like]: `%${query}%` } },
          { category: { [Op.like]: `%${query}%` } }
        ]
      },
      order: [["date", "DESC"]]
    });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

