import { http, createConfig } from 'wagmi'
import { arbitrum, arbitrumNova, mainnet, sepolia, gnosis } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia,arbitrum,arbitrumNova,gnosis],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumNova.id]: http(),
    [gnosis.id]: http()
  },
})