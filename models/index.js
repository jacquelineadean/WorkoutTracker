// Exporting an object containing model
module.exports = {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: require("./exercise")
};