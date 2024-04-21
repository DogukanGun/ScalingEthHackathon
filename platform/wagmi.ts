import { http, createConfig } from 'wagmi'
import { arbitrum, arbitrumNova, mainnet, sepolia, gnosis, arbitrumSepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia,arbitrum,arbitrumNova,gnosis,arbitrumSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumNova.id]: http(),
    [arbitrumSepolia.id]: http(),
    [gnosis.id]: http()
  },
})