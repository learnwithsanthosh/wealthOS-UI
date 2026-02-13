import React from "react";

function IncomeSummary({summary}){

    return(
        <div className="card shadow mt-4 p-4">
            <h3 className="mb-3">Income Summary</h3>
            <p>Total Monthly: {summary.totalMonthlyIncome}</p>
            <p>Total Annual: {summary.totalAnnualIncome}</p>
            <p>Passive Income Ratio: {summary.passiveIncomeRatio} %</p>
            <p>Concentration of Income: {summary.incomeConcentration} %</p>
            <p>Projected Monthly After Years: {summary.totalProjectedMonthlyIncome}</p>
        </div>
    )
}

export default IncomeSummary;