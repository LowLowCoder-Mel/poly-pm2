module.exports = {
  /**
   * Application configuration section
   */
  apps : [

    // First application
    {
      name      : 'grpc',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   */
  deploy : {
    production : {
      user : 'live',
      host : '60.205.151.71',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang6321615/poly-pm2.git',
      path : '/home/live/poly_pm2/',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production --watch'
    }
  }
};
