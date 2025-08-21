const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },

    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
        required: true
    },

    taskName: {
        type: String,
        default: 'No Specific Task'
    },
    status: {
        type: String,
        enum: ['Open', 'Ongoing', 'Close', 'Re Open', 'In Review']
    },
    assignTo: {
        type: String,
        default: 'Gyana prakash Khandual'
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: String,
    },
    hours: {
        type: String
    },
}, {timestamps: true});

const Work = mongoose.model('Work', workSchema);
module.exports = Work;
