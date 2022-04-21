const { Schema, model } = require('mongoose');
const moment = require('moment');

// Reaction Model
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMMM Do YYYY')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


// Thought Model
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMMM Do YYYY')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// retrieves the length of the Thought's reaction array
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

//Creates the Thought Model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

//Exports the model
module.exports = Thought;