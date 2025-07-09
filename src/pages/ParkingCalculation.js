import React, { useState, useEffect } from 'react';
import ParkingAreasApiService from '../services/ParkingAreasApiService';
import ParkingCalculationApiService from '../services/ParkingCalculationApiService';
import ParkingCalculationForm from '../components/ParkingCalculation/ParkingCalculationForm';
import ParkingCalculationResult from '../components/ParkingCalculation/ParkingCalculationResult';
import { Currency, getCurrencyLabel } from '../enums/Currency';
import '../styles/ParkingCalculation.scss';

const ParkingCalculation = () => {
  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState({
    parkingAreaId: '',
    startTime: '10:00',
    endTime: '12:00',
    parkingDate: '',
    targetCurrency: Currency.USD.label,
  });
  const [result, setResult] = useState(null);
  const [resultKey, setResultKey] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    setIsLoading(true);
    try {
      const data = await ParkingAreasApiService.getAll();
      setAreas(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch parking areas');
    } finally {
      setIsLoading(false);
    }
  };

//   const handleCalculate = async (e) => {
//     e.preventDefault();
//     try {
//       const startDateTime = new Date(`${request.parkingDate}T${request.startTime}:00`);
//       const endDateTime = new Date(`${request.parkingDate}T${request.endTime}:00`);

//       if (endDateTime <= startDateTime) {
//         setError('End time must be after start time');
//         setSuccess('');
//         return;
//       }

//       const currencyValue = Object.values(Currency).find(
//         (c) => c.label === request.targetCurrency
//       )?.value;

//       if (currencyValue === undefined) {
//         setError('Invalid currency selected');
//         setSuccess('');
//         return;
//       }

//       const response = await ParkingCalculationApiService.calculate({
//         parkingAreaId: request.parkingAreaId,
//         startTime: startDateTime.toISOString(),
//         endTime: endDateTime.toISOString(),
//         parkingDate: new Date(request.parkingDate).toISOString(),
//         targetCurrency: currencyValue,
//       });
//       setResult({
//         ...response,
//         targetCurrency: getCurrencyLabel(response.targetCurrency),
//       });
//       setResultKey((prev) => prev + 1);
//       setSuccess('Cost calculated successfully');
//       setError('');
//     } catch (err) {
//       setError(err.response?.data || 'Failed to calculate cost');
//       setSuccess('');
//     }
//   };

const handleCalculate = async (e) => {
  e.preventDefault();

  try {
  const startDateTime = new Date(`${request.parkingDate}T${request.startTime}:00`);
  const endDateTime = new Date(`${request.parkingDate}T${request.endTime}:00`);
  const parkingDate = new Date(request.parkingDate);
  const currencyValue = Object.values(Currency).find(
    (c) => c.label === request.targetCurrency
  )?.value;

    if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime()) || isNaN(parkingDate.getTime())) {
      setError('Time and date is required.');
      return;
    }

    const response = await ParkingCalculationApiService.calculate({
      parkingAreaId: request.parkingAreaId,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      parkingDate: parkingDate.toISOString(),
      targetCurrency: currencyValue,
    });
    setResult({
      ...response,
      targetCurrency: getCurrencyLabel(response.targetCurrency),
    });
    setResultKey((prev) => prev + 1);
    setError('');
  } catch (error) {
    setError(`${error.message}`);
    setResult(null);
  }
};

  return (
    <div className="container parking-calculation">
      <h1>Calculate Parking Cost</h1>
      {error && <p className="error-message">{error}</p>}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : areas.length === 0 ? (
        <div className="no-areas">No parking areas available</div>
      ) : (
        <ParkingCalculationForm
          areas={areas}
          request={request}
          setRequest={setRequest}
          onSubmit={handleCalculate}
        />
      )}
      {result && <ParkingCalculationResult key={resultKey} result={result} />}
    </div>
  );
};

export default ParkingCalculation;