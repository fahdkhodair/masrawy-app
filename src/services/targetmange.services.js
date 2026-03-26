
import {targetModel} from "../models/targetmange.Model.js"
export const saveTarget = async (req, res) => {
  try {
    const result = await targetModel.saveTarget(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSummary = async (req, res) => {
  try {
    const data = await targetModel.getSummary(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDetails = async (req, res) => {
  try {
    const data = await targetModel.getDetails(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
