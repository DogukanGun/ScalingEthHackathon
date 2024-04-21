export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_MODEL_GENERATOR_ADDRESS: `0x${string}`
    }
  }
}