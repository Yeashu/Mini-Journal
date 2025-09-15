import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId
    },
    date:{
        type:Date,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

export default mongoose.model("Entry",entrySchema);