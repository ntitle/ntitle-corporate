const defaultData = require('./default.data');
const benefits = require('../components/SectionBenefits/SectionBenefits.data');
const members = require('./data/team.data');
const advisors = require('./data/advisors.data');
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