import "./style.css";

const Result = ({ result }) => (
    <div className="result">Result:
        {result !== undefined && (
            <>
                {result.setAmount.toFixed(2)} {result.inputCurrency} = {""}
                <strong>
                    {result.resultCalc.toFixed(2)} {result.outputCurrency}
                </strong>
            </>
        )}
    </div>
);

export default Result;