import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Currency converter</legend>
            <p>
                <label>
                    <span className="form__labelText">Amount*: </span>
                    <input className="form__field" type="number" min="0.01" name="amount" step="0.01"
                        placeholder="Enter the amount" required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Input currency: </span>
                    <select className="form__field form__field--select" name="inputCurrency">
                        <option value="PLN" selected>PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Output currency: </span>
                    <select className="form__field form__field--select" name="outputCurrency">
                        <option value="PLN">PLN</option>
                        <option value="EUR" selected>EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p>
                <span className="form__labelText--required">* Required field</span>
            </p>
            <input className="form__button" type="submit" value="Calculate" />
        </fieldset>
    </form>
)

export default Form;