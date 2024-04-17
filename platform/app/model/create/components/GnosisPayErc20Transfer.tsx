// Erc20Transfer.js
import React, { useState } from 'react';
import { encodeFunctionData, erc20Abi, parseAbi, parseEther } from 'viem';
import { useWriteContract } from 'wagmi';
import DELAY_MOD_ABI from '../../../../public/abi/delay.json';
import CustomButton from '@/components/Button';

export function delay(timeout = 40000) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

const createUnsignedErc20Tx = (to:`0x${string}`, value:bigint) => {
  const data = encodeFunctionData({
    abi: erc20Abi,
    functionName: 'transfer',
    args: [to, value],
  });
  console.log('UnsignedTXData', data);
  return data;
};

type GnosisPayErc20TransferParam = {
    delayModAddress:`0x${string}`;
    onPaymentDone:()=>void;
}

export function GnosisPayErc20Transfer({ delayModAddress, onPaymentDone }:GnosisPayErc20TransferParam) {
  const {
    data: queueData,
    error: queueError,
    writeContract: queueWriteContract,
  } = useWriteContract();
  const {
    data: execData,
    error: execError,
    writeContract: execWriteContract,
  } = useWriteContract();

  const [erc20Address] = useState('0xcB444e90D8198415266c6a2724b7900fb12FC56E');
  const [recipientAddress, setRecipientAddress] = useState<`0x${string}`>(
    '0xA94632B98BeeCe087d04beaC87C084aB345ff7b8'
  );

  console.log('queueData:', queueData);
  console.log('queueError:', queueError);
  console.log('queueWriteContract:', queueWriteContract);

  console.log('execData:', execData);
  console.log('execError:', execError);
  console.log('execWriteContract:', execWriteContract);
  const makeErc20TransferViaDelayModule = async () => {
    try {
      // in this case we just decided to send a very low amount
      const amount = parseEther('0.01');
      // here we're creating an "unsigned" tx that we're later sending as data to the delay mod
      const unsignedTxData = createUnsignedErc20Tx(recipientAddress, amount);

      console.log('delay mod add', delayModAddress);

      // This is sending the tx to the safe through the delay mod
      await queueWriteContract({
        address: delayModAddress,
        abi: DELAY_MOD_ABI,
        functionName: 'execTransactionFromModule',
        args: [erc20Address, 0, unsignedTxData, 0],
      });

      // Now we need to wait a bit since the delay module slows down the speed at which we can communicate with it (if you followed the tutorial video the delay module is setup with 10seconds, the delay will wait 20s just to be extra sure)
      await delay();

      // This is executing the transaction on the delay module
      await execWriteContract({
        address: delayModAddress,
        abi: DELAY_MOD_ABI,
        functionName: 'executeNextTx',
        args: [erc20Address, 0, unsignedTxData, 0],
      });
      onPaymentDone()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className="text-black my-2">Execute ERC20 Transaction</h2>
      <div>
        <label className="text-black my-2">
          Recipient Address:
          <input
            type="text"
            className="input text-white mx-3 input-bordered w-full max-w-xs my-6" 
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value as `0x${string}`)}
          />
        </label>
      </div>
      <CustomButton onClick={makeErc20TransferViaDelayModule} text="Make Payment"/>
    </div>
  );
}

export default GnosisPayErc20Transfer;
