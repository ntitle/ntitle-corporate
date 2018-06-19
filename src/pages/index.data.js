const defaultData = require('./default.data');
const ecosystem = require('../components/SectionKeypoints/SectionKeyPoints.data');
const benefits = require('../components/SectionBenefits/SectionBenefits.data');
const social = require('./data/social.data');
const members = require('./data/team.data');
const advisors = require('./data/advisors.data');

const data = {
    team: {
        members,
        advisors,
    },
    social,
    logoUrl: '#page-top',
    ecosystem,
    benefits,
};

module.exports = Object.assign({}, defaultData, data);