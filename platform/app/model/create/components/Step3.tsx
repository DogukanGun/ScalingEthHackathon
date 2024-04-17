import useGnosisChain from "../hook/useGnosisChain"
import GnosisPayErc20Transfer from "./GnosisPayErc20Transfer"

type Step3Param = {
    delayModAddress: `0x${string}`
    onPaymentDone:()=>void
}

const Step3 = ({ delayModAddress, onPaymentDone }:Step3Param) => {
    useGnosisChain();

    return (
        <GnosisPayErc20Transfer onPaymentDone={onPaymentDone} delayModAddress={delayModAddress} />
    )
}

export default Step3