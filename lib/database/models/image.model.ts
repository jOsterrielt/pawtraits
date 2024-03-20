import { Schema } from "mongoose";

const imageSchema = new Schema({
    title: {type: String, require: true},
    transformationType: {type: String, require: true},
    publicId: {type: String, require: true},
    secureUrl: {type: URL, require: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL },
    aspectRatio: {type: String}
})