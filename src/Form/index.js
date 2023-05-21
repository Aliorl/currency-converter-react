import { useState } from "react";
import Result from "./Result";
import { currencies } from "./currencies";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("0");
    const [inputCurrency, setInputCurrency] = useState(currencies[0].id);
    const [outputCurrency, setOutputCurrency] = useState(currencies[0].id);
    const [result, setResult] = useState();

    const getResult = (currencies, amount, inputCurrency, outputCurrency) => {
        const inputCurrencyRate = currencies.find(({ id }) => id === inputCurrency).rate;
        const outputCurrencyRate = currencies.find(({ id }) => id === outputCurrency).rate;

        setResult(
            {
                inputCurrency: inputCurrency,
                inputRate: inputCurrencyRate,
                outputRate: outputCurrencyRate,
                setAmount: +amount,
                outputCurrency: outputCurrency,
                resultCalc: amount * inputCurrencyRate / outputCurrencyRate,
            });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(currencies, amount, inputCurrency, outputCurrency);
    }

    return (
        <form className="form" onSubmit={onFormSubmit} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency converter</legend>
                <p>
                    <label>
                        <span className="form__labelText">Amount*: </span>
                        <input
                            className="form__field"
                            type="number"
                            min="0.01"
                            name="amount"
                            step="0.01"
                            placeholder="Enter the amount"
                            required
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Input currency: </span>
                        <select
                            className="form__field form__field--select"
                            name="currency"
                            value={inputCurrency}
                            onChange={({ target }) => setInputCurrency(target.value)}>
                            {currencies.map((currency => (
                                <option
                                    key={currency.rate}
                                    value={currency.id}

                                >
                                    {currency.id}
                                </option>
                            )))
                            }
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Output currency: </span>
                        <select
                            className="form__field form__field--select"
                            name="outputCurrency"
                            value={outputCurrency}
                            onChange={({ target }) => setOutputCurrency(target.value)}>
                            {
                                currencies.map((outputCurrency => (
                                    <option
                                        key={outputCurrency.rate}
                                        value={outputCurrency.id}
                                    >
                                        {outputCurrency.id}
                                    </option>
                                )))
                            }
                        </select>
                    </label>
                </p>
                <p>
                    <span className="form__labelText--required">* Required field</span>
                </p>
                <input className="form__button" type="submit" value="Calculate" />
            </fieldset>
            <Result result={result} />
        </form>
    );
};

export default Form;