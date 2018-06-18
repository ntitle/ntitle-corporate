const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Subscribe - ${defaultData.meta.title}`,
    },
    navVisible: false,
    newsletter: {
        headline: 'SORRY, YOU’RE A BIT TOO EARLY. ',
        subtext: 'SUBSCRIBE BELOW TO BE NOTIFIED WHEN THE TOKEN SALE BEGINS.',
        buttonText: 'Sign up',
        action: 'https://nTitle.us17.list-manage.com/subscribe/post-json?u=38836b86bdc2b88a242addc37&amp;id=048dc960ca',
    },
};

module.exports = Object.assign({}, defaultData, data);
