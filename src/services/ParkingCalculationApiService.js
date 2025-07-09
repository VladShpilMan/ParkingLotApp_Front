import api from '../utils/api';

const ParkingCalculationApiService = {
  calculate: async (data) => {
    try {
      const response = await api.post('/Payments/calculate', data);
      return response.data;
    } catch (error) {
      const errors = error.response?.data?.errors || ['Unknown error occurred'];
      const errorMessage = errors.join('\n');
      console.log(error.response?.data);
      throw new Error(`${errorMessage}`);
    }
  },
};

export default ParkingCalculationApiService;