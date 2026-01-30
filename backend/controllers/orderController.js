import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      projectType,
      budget,
      customBudget,
      message
    } = req.body;

    if (!name || !email || !projectType) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    const order = await Order.create({
      name,
      email,
      phone,
      projectType,
      budget,
      customBudget,
      message
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order
    });

  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
