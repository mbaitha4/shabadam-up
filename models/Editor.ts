import mongoose from "mongoose";

const EditorSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.models.Editor ||
  mongoose.model("Editor", EditorSchema);
