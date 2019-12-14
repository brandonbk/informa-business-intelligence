const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'NEDPrefPage' })
  .addForm('magazineSignup', { omedasite: 'PEN6144_NQland', query: { pk: 'NNHWEB' } });

module.exports = config;
