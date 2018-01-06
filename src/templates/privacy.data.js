const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Privacy - ${defaultData.meta.title}`
    },
    navVisible: false
};

module.exports = Object.assign({}, defaultData, data);