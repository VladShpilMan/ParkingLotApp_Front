import ParkingAreas from '../pages/ParkingAreas';
import ParkingCalculation from '../pages/ParkingCalculation';

const routes = [
  {
    path: '/',
    element: <ParkingAreas />,
    title: 'Manage Parking Areas',
  },
  {
    path: '/calculate',
    element: <ParkingCalculation />,
    title: 'Calculate Parking Fee',
  },
];

export default routes;