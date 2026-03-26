import { UserModel } from '../models/User.Model.js';
import { generateToken } from '../utils/token/token.js';
import { createHash, compareHash } from '../utils/hash/hash.js';

// ===== Signup =====
export const signup = async (req, res) => {
  try {
    const { username, password, name, role, branchId } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    // Check if user exists
    const existingUser = await UserModel.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Username already exists'
      });
    }

    // Hash password
    const hashedPassword = await createHash({ plaintext: String(password) });

    const user = await UserModel.create({
      username,
      password: hashedPassword,
      name,
      role,
      branchId
    });

    return res.status(201).json({
      success: true,
      message: 'Signup successful',
      data: {
        id: user.id,
        username: user.username
        // ❌ لا ترجع الباسورد حتى لو مشفر
      }
    });

  } catch (error) {
    console.error("Signup Error:", error);

    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};
// ===== Login =====
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Find user
    const user = await UserModel.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Compare password
    const isMatch = await compareHash({
      plaintext: password,
      hashValue: user.password
    });

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password'
      });
    }

    // Generate tokens
    const accessToken = generateToken({ id: user.id }, 'access');
    const refreshToken = generateToken({ id: user.id }, 'refresh');

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        id: user.id,
        username: user.username,
        password,
        role: user.role,
        accessToken,
        refreshToken
      }
    });

  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};


