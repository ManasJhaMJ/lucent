import mongoose ,{Schema} from "mongoose";

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        lowercase: true,
      },
  
      email: {
        type: String,
        required: true,
        lowercase: true,
      },
  
      message: {
        type: String,
        required: true,
      },
      
    });

    export {userSchema} 