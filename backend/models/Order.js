// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   projectType: String,
//   budget: String,
//   message: String,
//   status: {
//     type: String,
//     default: "Pending"
//   }
// }, { timestamps: true });

// export default mongoose.model("Order", orderSchema);




import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    projectType: String,
    budget: String,
    message: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
