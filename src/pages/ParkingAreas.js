import React, { useState, useEffect } from 'react';
import ParkingAreasApiService from '../services/ParkingAreasApiService';
import ParkingAreaForm from '../components/ParkingAreaForm';
import ParkingAreaItem from '../components/ParkingAreaItem';
import '../styles/ParkingAreas.scss';

const ParkingAreas = () => {
  const [areas, setAreas] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', weekdayHourlyRate: 0, weekendHourlyRate: 0, discountPercentage: 0 });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    setIsLoading(true);
    try {
      const data = await ParkingAreasApiService.getAll();
      setAreas(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await ParkingAreasApiService.update(form.id, form);
      } else {
        await ParkingAreasApiService.create(form);
      }
      resetForm();
      fetchAreas();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (area) => {
    setForm(area);
    setEditing(true);
  };

  const handleCancel = () => {
    resetForm();
  };

  const handleDelete = async (id) => {
    try {
      await ParkingAreasApiService.delete(id);
      if (editing && form.id === id) {
        resetForm();
      }
      fetchAreas();
    } catch (error) {
      setError(error.message);
    }
  };

  const resetForm = () => {
    setForm({ id: '', name: '', weekdayHourlyRate: 0, weekendHourlyRate: 0, discountPercentage: 0 });
    setEditing(false);
    setError(null);
  };

  return (
    <div className="container parking-areas">
      <h1>Manage Parking Areas</h1>
      {error && <div className="error-message">{error}</div>}
      <ParkingAreaForm
        form={form}
        editing={editing}
        onChange={setForm}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : areas.length === 0 ? (
        <div className="no-areas">No parking areas available</div>
      ) : (
        <ul>
          {areas.map((area) => (
            <ParkingAreaItem
              key={area.id}
              area={area}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParkingAreas;