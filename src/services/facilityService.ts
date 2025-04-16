import api from './api';

export interface Facility {
  _id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  price: number;
  ownerId: string;
  images: string[];
  amenities: string[];
  availability: {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  }[];
  status: 'active' | 'pending' | 'maintenance';
  createdAt: string;
  updatedAt: string;
}

export const facilityService = {
  getAllFacilities: async (): Promise<Facility[]> => {
    const response = await api.get('/facilities');
    return response.data;
  },
  
  getFacilityById: async (id: string): Promise<Facility> => {
    const response = await api.get(`/facilities/${id}`);
    return response.data;
  },
  
  createFacility: async (facilityData: Partial<Facility>): Promise<Facility> => {
    const response = await api.post('/facilities', facilityData);
    return response.data;
  },
  
  updateFacility: async (id: string, facilityData: Partial<Facility>): Promise<Facility> => {
    const response = await api.put(`/facilities/${id}`, facilityData);
    return response.data;
  },
  
  deleteFacility: async (id: string): Promise<void> => {
    await api.delete(`/facilities/${id}`);
  }
};
