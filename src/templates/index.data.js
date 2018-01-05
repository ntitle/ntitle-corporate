const defaultData = require('./default.data');

const data = {
    meta: {
        title: 'nTitle'
    },
    team: {
        members: require('./data/team.data')
    }
};

module.exports = Object.assign({}, defaultData, data);