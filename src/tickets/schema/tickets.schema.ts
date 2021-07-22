import * as mongoose from 'mongoose';

export const ticketSchema = new mongoose.Schema({
    ticketNo:Number,
    event:{ type: mongoose.Schema.Types.ObjectId, ref: 'events' },
    amountPaid:Number,
    issuedTo:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});