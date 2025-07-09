import React from 'react';

const ParkingAreaForm = ({ form, editing, onChange, onSubmit, onCancel }) => (
  <form onSubmit={onSubmit} className="form">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter parking area name"
        value={form.name}
        onChange={(e) => onChange({ ...form, name: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="weekdayRate">Weekday Rate (USD)</label>
      <input
        id="weekdayRate"
        type="number"
        placeholder="Enter weekday hourly rate"
        value={form.weekdayHourlyRate}
        onChange={(e) => onChange({ ...form, weekdayHourlyRate: parseFloat(e.target.value) })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="weekendRate">Weekend Rate (USD)</label>
      <input
        id="weekendRate"
        type="number"
        placeholder="Enter weekend hourly rate"
        value={form.weekendHourlyRate}
        onChange={(e) => onChange({ ...form, weekendHourlyRate: parseFloat(e.target.value) })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="discount">Discount (%)</label>
      <input
        id="discount"
        type="number"
        placeholder="Enter discount percentage"
        value={form.discountPercentage}
        onChange={(e) => onChange({ ...form, discountPercentage: parseFloat(e.target.value) })}
      />
    </div>
    <div className="form-actions">
      <button type="submit">{editing ? 'Update' : 'Create'}</button>
      {editing && (
        <button type="button" className="btn btn-cancel" onClick={onCancel}>
          Cancel
        </button>
      )}
    </div>
  </form>
);

export default ParkingAreaForm;