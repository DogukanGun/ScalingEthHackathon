import { useEffect } from "react";
import { arbitrumSepolia } from "viem/chains";
import { useSwitchChain } from "wagmi";

const useGnosisChain = () => {
    const { switchChain } = useSwitchChain()

    useEffect(()=>{
      switchChain({ chainId: arbitrumSepolia.id })
    },[])
}

export default useGnosisChain;