"use client"
import useArbitrumChain from "../hook/useArbitrumChain";
import { useWriteContract } from 'wagmi'
import modelGeneratorAbi from "../../../../public/abi/model_generator.abi.json"
import { arbitrumSepolia } from "viem/chains";
import { createPublicClient, http } from "viem";
import { useEffect } from "react";

type Step4Props = {
    subName: string;
    onSubsDone: () => void;
}

const Step4 = ({ subName, onSubsDone }: Step4Props) => {
    useArbitrumChain()
    const {
        data: queueData,
        error: queueError,
        writeContract: queueWriteContract,
    } = useWriteContract();

    useEffect(() => {
        const register = async (address: `0x${string}`) => {
            await queueWriteContract({
              address: address,
              abi: modelGeneratorAbi,
              functionName: 'createModel',
              args: [subName],
            });
        }
        if (queueData === undefined) {
            register(process.env.NEXT_PUBLIC_MODEL_GENERATOR_ADDRESS)
        } else {
            onSubsDone()
        }
    }, [queueData])

    return (
        <h2 className="text-black my-2">
            Please wait your subscription is being generated.
        </h2>
    )
}


export default Step4;