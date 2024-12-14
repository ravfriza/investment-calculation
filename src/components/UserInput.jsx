export default function UserInput({ investmentInfo, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={investmentInfo.initialInvestment}
            onChange={(e) => onChange(e, "initialInvestment")}
          />
        </div>
        <div>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={investmentInfo.annualInvestment}
            onChange={(e) => onChange(e, "annualInvestment")}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={investmentInfo.expectedReturn}
            onChange={(e) => onChange(e, "expectedReturn")}
          />
        </div>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={investmentInfo.duration}
            onChange={(e) => onChange(e, "duration")}
          />
        </div>
      </div>
    </div>
  );
}
