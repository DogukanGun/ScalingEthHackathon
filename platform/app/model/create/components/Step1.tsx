import CustomButton from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { useEffect, useState } from "react";
import { arbitrumNova } from "viem/chains";
import { useSwitchChain } from "wagmi";

type Step1Param = {
    onStepDone: () => void
    onSubNameChange:(subName:string)=>void
}

const Step1 = ({ onStepDone, onSubNameChange }: Step1Param) => {
    const [subsName, setSubsName] = useState("")
    const { switchChain } = useSwitchChain()
    useEffect(() => {
        switchChain({ chainId: arbitrumNova.id })
    }, [])
    return (
        <div className="max-w-lg mx-auto">
            <Dropdown options={["test", "test1"]} text="Protocols" />
            <label className="form-control w-48">
                <div className="label">
                    <span className="text-xl text-black">Subscription Name</span>
                </div>
                <input
                    type="text"
                    className="input text-white input-bordered w-full max-w-xs mb-6"
                    value={subsName}
                    onChange={(e) => {setSubsName(e.target.value); onSubNameChange(e.target.value)}}
                />
            </label>
            {subsName.length > 3 && <CustomButton onClick={onStepDone} text="Next" />}
        </div>
    )
}

export default Step1;