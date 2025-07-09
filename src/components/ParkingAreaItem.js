import React from 'react';

const ParkingAreaItem = ({ area, onEdit, onDelete }) => (
  <li className="parking-area-item">
    <div className="info">
      <div className="name">{area.name}</div>
      <div className="details">
        <span><strong>Weekday:</strong> ${area.weekdayHourlyRate}/hr</span>
        <span><strong>Weekend:</strong> ${area.weekendHourlyRate}/hr</span>
        <span><strong>Discount:</strong> {area.discountPercentage}%</span>
      </div>
    </div>
    <div className="actions">
      <button className="btn btn-edit" onClick={() => onEdit(area)}>Edit</button>
      <button className="btn btn-delete" onClick={() => onDelete(area.id)}>Delete</button>
    </div>
  </li>
);

export default ParkingAreaItem;