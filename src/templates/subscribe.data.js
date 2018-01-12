const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Subscribe - ${defaultData.meta.title}`,
    },
    navVisible: false,
    newsletter: {
        headline: 'SORRY, YOU’RE A BIT TOO EARLY. ',
        subtext: 'SUBSCRIBE BELOW TO BE NOTIFIED WHEN THE TOKEN SALE BEGINS.'
    },
};

module.exports = Object.assign({}, defaultData, data);
