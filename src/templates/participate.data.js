const defaultData = require('./default.data');

const data = {
    meta: {
        title: `Participate - ${defaultData.meta.title}`,
    },
    navVisible: false,
    newsletter: {
        headline: 'INVEST IN NTITLE AND HELP US<br/>DISRUPT THE GAMING INDUSTRY',
        subtext: 'ENTER YOUR EMAIL TO RECEIVE INVESTOR INFORMATION',
        buttonText: 'Request info',
        action: 'https://nTitle.us17.list-manage.com/subscribe/post?u=38836b86bdc2b88a242addc37&amp;id=55e367ea0f',
    },
};

module.exports = Object.assign({}, defaultData, data);
