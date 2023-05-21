import environment, { Environment } from './base';

const baseApi = 'https://api.tvmaze.com';
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;