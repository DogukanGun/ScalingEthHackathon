import { useState } from "react";

export enum SubscriptionTypes {
    Telegram,
    Onchain
}

const SubscriptionOptions = () => {
    const [selectedOption, setSelectedOption] = useState<SubscriptionTypes>(SubscriptionTypes.Telegram);

    return (
        <div className="flex items-center space-x-4">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-black mr-2">Telegram</span>
                    <input
                        type="radio"
                        value={SubscriptionTypes.Telegram}
                        name="radio-10"
                        className="radio checked:bg-red-500"
                        onChange={() => setSelectedOption(SubscriptionTypes.Telegram)}
                        checked={selectedOption === SubscriptionTypes.Telegram} />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-black mr-2">Onchain</span>
                    <input
                        type="radio"
                        name="radio-10"
                        value={SubscriptionTypes.Onchain}
                        className="radio checked:bg-blue-500"
                        checked={selectedOption === SubscriptionTypes.Onchain}
                        onChange={() => setSelectedOption(SubscriptionTypes.Onchain)}
                    />
                </label>
            </div>
        </div>
    )
}

export default SubscriptionOptions;
