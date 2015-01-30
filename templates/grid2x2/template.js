var call = {
    g11 = function (data) {
        newData = { "1-1" : data }
        return newData;

    },

    g12 = function (data) {
        newData = { "1-2" : data }
        return newData;

    },

    g21 = function (data) {
        newData = { "2-1" : data }
        return newData;

    },

    g22 = function (data) {
        newData = { "2-2" : data }
        return newData;
    }
}

module.exports = call;