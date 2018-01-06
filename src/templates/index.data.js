const defaultData = require('./default.data');

const data = {
    team: {
        members: require('./data/team.data'),
        advisors: require('./data/advisors.data')
    }
};

module.exports = Object.assign({}, defaultData, data);