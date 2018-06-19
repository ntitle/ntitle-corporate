const defaultData = require('./default.data');
const ecosystem = require('../components/SectionKeypoints/SectionKeyPoints.data');

const data = {
    team: {
        members: require('./data/team.data'),
        advisors: require('./data/advisors.data'),
    },
    social: require('./data/social.data'),
    logoUrl: '#page-top',
    ecosystem,
};

module.exports = Object.assign({}, defaultData, data);