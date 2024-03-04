import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['image', 'video'],
        required: true
    },
    data: {
        type: String,
        required: true
    },
    metadata: mongoose.Schema.Types.Mixed,
    reference: String
});

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: String,
    body: String,
    images: [imageSchema]
});

export const Article = mongoose.model('Article', ArticleSchema);


