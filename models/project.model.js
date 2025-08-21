const mongoose = require('mongoose');

const projectSchema  = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectName: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
