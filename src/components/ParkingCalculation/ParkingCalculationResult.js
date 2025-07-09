import React from 'react';
import { getCurrencyLabel } from '../../enums/Currency';
const ParkingCalculationResult = ({ result }) => (
  <div className="result-box">
    <div className="result-content">
      <p className="result-text">
        Cost: <span className="result-amount">{result.amount}</span>{' '}
        <span className="result-currency">{getCurrencyLabel(result.currency)}</span>
      </p>
    </div>
  </div>
);

export default ParkingCalculationResult;