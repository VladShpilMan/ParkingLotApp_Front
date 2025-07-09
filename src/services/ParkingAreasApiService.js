import api from '../utils/api';

const ParkingAreasApiService = {
  getAll: async () => {
    try {
      const response = await api.get('/ParkingAreas');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch parking areas');
    }
  },
  create: async (data) => {
    try {
      const response = await api.post('/ParkingAreas', data);
      return response.data;
    } catch (error) {
      const errors = error.response?.data?.errors || ['Unknown error occurred'];
      const errorMessage = errors.join('\n');
      throw new Error(`${errorMessage}`);
    }
  },
  update: async (id, data) => {
    try {
      const response = await api.put(`/ParkingAreas/${id}`, data);
      return response.data;
    } catch (error) {
      const errors = error.response?.data?.errors || ['Unknown error occurred'];
      const errorMessage = errors.join('\n');
      throw new Error(`${errorMessage}`);
    }
  },
  delete: async (id) => {
    try {
        console.log(id);
      await api.delete(`/ParkingAreas/${id}`);
    } catch (error) {
      throw new Error('Failed to delete parking area');
    }
  },
};

export default ParkingAreasApiService;