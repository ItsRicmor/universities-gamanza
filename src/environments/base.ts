export default function baseEnv(baseApi: string) {
    return {
      route: {
        baseRoute: '/',
      },
      api: {
        universities: `${baseApi}/search`
      },
      isProduction: true,
      isDevelopment: false,
      isTesting: false,
    };
  }
  
  export type Environment = ReturnType<typeof baseEnv>;