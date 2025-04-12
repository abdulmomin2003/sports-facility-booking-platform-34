
import api from './api';

export interface Booking {
  _id: string;
  facilityId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export const bookingService = {
  getUserBookings: async (): Promise<Booking[]> => {
    const response = await api.get('/bookings/user');
    return response.data;
  },
  
  getFacilityBookings: async (facilityId: string): Promise<Booking[]> => {
    const response = await api.get(`/bookings/facility/${facilityId}`);
    return response.data;
  },
  
  createBooking: async (bookingData: Partial<Booking>): Promise<Booking> => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },
  
  updateBookingStatus: async (id: string, status: Booking['status']): Promise<Booking> => {
    const response = await api.patch(`/bookings/${id}/status`, { status });
    return response.data;
  },
  
  cancelBooking: async (id: string): Promise<Booking> => {
    const response = await api.patch(`/bookings/${id}/cancel`);
    return response.data;
  }
};
