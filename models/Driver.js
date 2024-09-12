import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    id: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    status: { type: String, required: true },
    address: { type: String, required: true },
  
});

productSchema.method("toJSON", function () {
  const { _id, __v, ...driver } = this.toObject();
  driver.id = _id;
  return driver;
});

const Driver = mongoose.model("Driver", driverSchema);

export default Product;