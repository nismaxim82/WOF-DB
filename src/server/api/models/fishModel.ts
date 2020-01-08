import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var fishSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: 'Enter the name of the fish'
    },
    createdDate: {
        type: Date,
        default: Date.now,
        readonly: true,
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('Fishes', fishSchema);
