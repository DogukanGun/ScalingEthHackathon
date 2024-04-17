import { useEffect } from "react";
import { gnosis } from "viem/chains";
import { useSwitchChain } from "wagmi";

const useGnosisChain = () => {
    const { switchChain } = useSwitchChain()

    useEffect(()=>{
      switchChain({ chainId: gnosis.id })
    },[])
}

export default useGnosisChain;