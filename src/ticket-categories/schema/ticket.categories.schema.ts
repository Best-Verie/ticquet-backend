import * as mongoose from 'mongoose';

export const TicketCategoriesSchema = new mongoose.Schema({
    categoryName: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
