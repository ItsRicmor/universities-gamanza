export default function baseEnv(baseApi: string) {
    return {
      route: {
        baseRoute: '/',
      },
      api: {
        
      },
      isProduction: true,
      isDevelopment: false,
      isTesting: false,
    };
  }
  
  export type Environment = ReturnType<typeof baseEnv>;