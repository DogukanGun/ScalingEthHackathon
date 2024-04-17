"use client"
import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { StepDoneIcon } from "./components/StepDoneIcon";
import Step4 from "./components/Step4";

const CreatePage = () => {

    const [step, setStep] = useState(1)
    const [delayModAddress, setDelayModAddress] = useState<`0x${string}`>()
    const [subsName, setSubsName] = useState("")

    const setDelayModAddressAndIncremeentState = (address: `0x${string}`) => {
        setDelayModAddress(address)
        setStep((prev) => prev + 1)
    }

    return (
        <div className="flex h-screen items-center justify-center p-24">
            <div className="flex justify-center items-start space-x-24">
                <ol className="col-span-2 relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li onClick={()=>setStep(1)} className="mb-10 ms-6">
                        <span className={`absolute flex items-center justify-center w-8 h-8 ${step > 1 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900`}>
                            {step > 1 ?
                                <StepDoneIcon />
                                :
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            }
                        </span>
                        <h3 className="font-medium leading-tight">Protocol</h3>
                        <p className="text-sm">Choose your protocols</p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className={`absolute flex items-center justify-center w-8 h-8  ${step > 2 ? 'bg-green-200' : 'bg-gray-100'}  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700`}>
                            {step > 2 ?
                                <StepDoneIcon />
                                :
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                </svg>
                            }
                        </span>
                        <h3 className="font-medium leading-tight">Find Payment Module</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className={`absolute flex items-center justify-center w-8 h-8  ${step > 3 ? 'bg-green-200' : 'bg-gray-100'}  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700`}>
                            {step > 3 ?
                                <StepDoneIcon />
                                :
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            }
                        </span>
                        <h3 className="font-medium leading-tight">Transfer Asset</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                    <li className="ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Confirmation</h3>
                        <p className="text-sm">Step details here</p>
                    </li>
                </ol>
            </div>
            <div className="col-span-10 w-full h-full flex justify-center items-center">
                {step === 1 &&
                    <Step1 onSubNameChange={setSubsName} onStepDone={() => setStep((prev) => prev + 1)} />
                }
                {step === 2 &&
                    <Step2 onDelayModAddress={setDelayModAddressAndIncremeentState} />
                }
                {step === 3 &&
                    <Step3 onPaymentDone={() => setStep((prev) => prev + 1)} delayModAddress={delayModAddress ?? '0x0'} />
                }
                {step === 4 &&
                    <Step4/>
                }
            </div>
        </div>
    )
}

export default CreatePage;