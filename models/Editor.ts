import mongoose from "mongoose";

const EditorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.models.Editor ||
  mongoose.model("Editor", EditorSchema);
