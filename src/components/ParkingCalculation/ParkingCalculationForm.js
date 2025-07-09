import React from 'react';
import { getCurrencyOptions } from '../../enums/Currency';

const ParkingCalculationForm = ({ areas, request, setRequest, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <div className="form-group">
      <label htmlFor="parkingArea">Parking Area</label>
      <select
        id="parkingArea"
        value={request.parkingAreaId}
        onChange={(e) => setRequest({ ...request, parkingAreaId: e.target.value })}
      >
        <option value="">Select Parking Area</option>
        {areas.map((area) => (
          <option key={area.id} value={area.id}>{area.name}</option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="startTime">Start Time</label>
      <input
        id="startTime"
        type="time"
        value={request.startTime}
        onChange={(e) => setRequest({ ...request, startTime: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="endTime">End Time</label>
      <input
        id="endTime"
        type="time"
        value={request.endTime}
        onChange={(e) => setRequest({ ...request, endTime: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="parkingDate">Parking Date</label>
      <input
        id="parkingDate"
        type="date"
        value={request.parkingDate}
        onChange={(e) => setRequest({ ...request, parkingDate: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="currency">Currency</label>
      <select
        id="currency"
        value={request.targetCurrency}
        onChange={(e) => setRequest({ ...request, targetCurrency: e.target.value })}
      >
        {getCurrencyOptions().map((currency) => (
          <option key={currency.value} value={currency.label}>
            {currency.label}
          </option>
        ))}
      </select>
    </div>
    <button type="submit">Calculate</button>
  </form>
);

export default ParkingCalculationForm;