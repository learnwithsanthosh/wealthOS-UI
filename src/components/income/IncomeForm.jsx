import IncomeSummary from "./IncomeSummary";
import { useState } from "react";

function IncomeForm() {
  const [incomeName, setIncomeName] = useState("");
  const [income, setIncome] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [type, setType] = useState("ACTIVE");
  const [years, setYears] = useState("");
  const [summary, setSummary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      growthYears: parseInt(1),
      incomes: [
        {
          nameStreamName: incomeName,
          monthlyEarnings: parseInt(income),
          annualGrowthRate: parseInt(growthRate),
          typeOfIncome: type
        }
      ]
    }

    const response = await fetch("http://localhost:8080/api/income/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    setSummary(data);
  };


  return (
    <>
      <div className="bg-light min-vh-100 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow-lg rounded-4 p-4">
                <h3 className="text-center mb-4 fw-bold text-primary">
                  Income Growth Calculator
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Income Name</label>
                    <input value={incomeName} onChange={(e) => setIncomeName(e.target.value)} />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Monthly Amount</label>
                      <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Growth Rate (%)</label>
                      <input
                        type="number"
                        value={growthRate}
                        onChange={(e) => setGrowthRate(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Type</label>
                      <select className="form-select rounded-3" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="PASSIVE">PASSIVE</option>
                      </select>
                    </div>
                    <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-3 shadow-sm">Calculate</button>
                  </div>
                  </div>
                  
                </form>
              </div>
              {summary && <IncomeSummary summary={summary} />}

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default IncomeForm;