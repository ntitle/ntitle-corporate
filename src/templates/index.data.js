const defaultData = require('./default.data');

const data = {
    team: {
        members: require('./data/team.data'),
        advisors: require('./data/advisors.data')
    },
    social: require('./data/social.data'),
    faq: require('./data/faq.data'),
    logoUrl: '#page-top'
};

module.exports = Object.assign({}, defaultData, data);