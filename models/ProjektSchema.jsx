import mongoose from "mongoose"

const ProjektSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlenght: 40,
        required: true,
    },
    beschreibung: {
        type: String,
        maxlenght: 250,
        required: true,
    },

},{timestamps: true});

export default mongoose.models.Projekte || mongoose.model("Projekte", ProjektSchema)