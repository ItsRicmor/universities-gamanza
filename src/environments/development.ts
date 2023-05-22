import environment, { Environment } from './base';

const baseApi = 'http://universities.hipolabs.com';
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