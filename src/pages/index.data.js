const defaultData = require('./default.data');
const benefits = require('../components/SectionBenefits/SectionBenefits.data');
const members = require('../components/SectionTeam/SectionTeam.Team.data');
const advisors = require('../components/SectionTeam/SectionTeam.Advisors.data');
const faq = require('../components/SectionFaq/SectionFaq.data');
const news = require('../components/SectionNews/SectionNews.data');
const newsletter = require('../components/SectionNewsletter/SectionNewsletter.data');
const social = require('../components/SectionCommunity/SectionCommunity.data');

const data = {
    team: {
        members,
        advisors,
    },
    logoUrl: '#page-top',
    benefits,
    faq,
    news,
    newsletter,
    social,
};

module.exports = Object.assign({}, defaultData, data);