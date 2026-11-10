export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  vegetarian: boolean;
  image: string;
  badge?: string;
}

export interface ReservationRequest {
  name: string;
  emailId: string;
  phoneNumber: string;
  table_size: number;
  bookingDate: string;
  bookingTime: string;
  specialRequest: string;
}
