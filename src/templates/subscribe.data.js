const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Subscribe - ${defaultData.meta.title}`,
    },
    navVisible: false,
    newsletter: {
        headline: 'SUBSCRIBE TO GET NOTIFIED WHEN TOKEN SALE WILL BE AVAILABLE'
    },
};

module.exports = Object.assign({}, defaultData, data);
