
module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,
  
    // enable a custom plugin
    'google-auth': {
        enabled: true,
    }
  });

