// Exporting an object containing all the model
module.exports = {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: require("./exercise")
};