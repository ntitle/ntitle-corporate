const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Terms - ${defaultData.meta.title}`
    },
    navVisible: false
};

module.exports = Object.assign({}, defaultData, data);