import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique:true,
  },
  address: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  photo: {
    type:String,
    default:"",
  },
},
    {timestamps : true}
);

const User = mongoose.model("users",userSchema);

export default User;
