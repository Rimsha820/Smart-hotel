import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Room {
  image: string;
  title: string;
  price: number;
  size: string;
  capacity: number;
  bed: string;
  services: string[];
  desc: string;
}

interface RoomBookingContextType {
  bookedRoom: Room | null;
  setBookedRoom: (room: Room | null) => void;
}

const RoomBookingContext = createContext<RoomBookingContextType | undefined>(undefined);

export const RoomBookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookedRoom, setBookedRoom] = useState<Room | null>(null);

  return (
    <RoomBookingContext.Provider value={{ bookedRoom, setBookedRoom }}>
      {children}
    </RoomBookingContext.Provider>
  );
};

export const useRoomBooking = () => {
  const context = useContext(RoomBookingContext);
  if (!context) {
    throw new Error('useRoomBooking must be used within a RoomBookingProvider');
  }
  return context;
};
