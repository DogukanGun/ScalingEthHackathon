"use client"

import { getDelayModule } from "@/helpers/gnosis.pay.helper";
import { useState } from "react";
import CustomButton from "@/components/Button";
import useGnosisChain from "../hook/useGnosisChain";

type Step2Params = {
  onDelayModAddress:(address:`0x${string}`)=>void;
}

const Step2 = ({ onDelayModAddress }:Step2Params) => {
    const [address, setAddress] = useState<`0x${string}`>("0x0");
    useGnosisChain();

    const handleSubmit = async () => {
      try {
        const delayMod = await getDelayModule(address);
        onDelayModAddress(delayMod || '0x0');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div className="max-w-lg mx-auto">
        <h1 className="text-black my-2">Gnosis Safe Delay Module Finder</h1>
        <div>
          <label className="text-black my-2">
            Gnosis Safe Address:
            <input
              type="text"
              className="input text-white mx-3 input-bordered w-full max-w-xs my-6" 
              value={address}
              onChange={(e) => setAddress(e.target.value as `0x${string}`)}
            />
          </label>
          <CustomButton onClick={handleSubmit} text="Find Delay Module"/>
        </div>
      </div>
    );
}

export default Step2;