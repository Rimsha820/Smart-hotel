import { useState, useEffect, useRef, type MutableRefObject } from 'react';
import { useRoomBooking } from '../Store/RoombookingContext';

import bedroom1 from '../assets/room1.jpg';
import bedroom2 from '../assets/room2.jpg';
import bedroom3 from '../assets/room3.jpg';
import bedroom4 from '../assets/room4.jpg';
import bedroom5 from '../assets/room5.jpg';
import bedroom6 from '../assets/room6.jpg';

const rooms = [
  {
    image: bedroom1,
    title: 'Premium King Room',
    price: 159,
    size: '30 ft',
    capacity: 3,
    bed: 'King Beds',
    services: ['Wifi', 'Television', 'Bathroom'],
    desc: 'Enjoy peaceful rest in our stylish bedroom with modern design, comfy bed, and all essential amenities you need during your stay.',
  },
  {
    image: bedroom2,
    title: 'Deluxe Double Room',
    price: 129,
    size: '25 ft',
    capacity: 2,
    bed: 'Double Beds',
    services: ['Wifi', 'Air Conditioning', 'Bathroom'],
    desc: 'Relax in our deluxe double room with elegant décor, spacious layout, and premium facilities for a comfortable stay.',
  },
  {
    image: bedroom3,
    title: 'Standard Single Room',
    price: 99,
    size: '20 ft',
    capacity: 1,
    bed: 'Single Bed',
    services: ['Wifi', 'Television', 'Bathroom'],
    desc: 'Perfect for solo travelers, our standard single room offers cozy comfort with essential amenities for a restful night.',
  },
  {
    image: bedroom4,
    title: 'Family Suite',
    price: 199,
    size: '40 ft',
    capacity: 5,
    bed: 'King & Sofa Beds',
    services: ['Wifi', 'Kitchenette', 'Bathroom'],
    desc: 'Spacious family suite with multiple beds, kitchenette, and entertainment facilities designed for your family’s comfort.',
  },
  {
    image: bedroom5,
    title: 'Executive Suite',
    price: 249,
    size: '45 ft',
    capacity: 3,
    bed: 'King Beds',
    services: ['Wifi', 'Office Desk', 'Bathroom'],
    desc: 'Executive suite with a luxurious setup, perfect for business travelers requiring workspace and relaxation.',
  },
  {
    image: bedroom6,
    title: 'Presidential Suite',
    price: 399,
    size: '60 ft',
    capacity: 4,
    bed: 'King Beds',
    services: ['Wifi', 'Jacuzzi', 'Bathroom', 'Balcony'],
    desc: 'Experience the ultimate luxury in our presidential suite featuring a jacuzzi, private balcony, and elegant interiors.',
  },
];

function useInView(): [MutableRefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isInView];
}

function Rooms() {
  const { bookedRoom, setBookedRoom } = useRoomBooking();
  const [roomKeys, setRoomKeys] = useState<{ [title: string]: string }>({});

  function generateRoomKey(): string {
    const randomNum = Math.floor(100000 + Math.random() * 900000); 
    return `RK-${randomNum}`;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Our Rooms</h2>
        <p className="text-md text-gray-500 text-center mb-8">Home / Our Rooms</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            const [ref, inView] = useInView();
            const isBooked = bookedRoom?.title === room.title;
            const roomKey = roomKeys[room.title];

            return (
              <div
                key={index}
                ref={ref}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:shadow-2xl hover:scale-105 flex flex-col`}
              >
                <img src={room.image} alt={`Room ${index + 1}`} className="w-full h-60 object-cover" />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{room.title}</h3>
                  <p className="text-center text-red-600 font-bold text-xl mb-3">
                    ${room.price} / <span className="text-sm font-normal">Per night</span>
                  </p>

                  <div className="flex-grow h-[170px]">
                    <div className="text-gray-700 text-sm space-y-1 mb-4">
                      <p><strong>Size:</strong> {room.size}</p>
                      <p><strong>Capacity:</strong> Max person {room.capacity}</p>
                      <p><strong>Bed:</strong> {room.bed}</p>
                      <p><strong>Services:</strong> {room.services.join(', ')}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{room.desc}</p>
                  </div>

                  <button
                    type="button"
                    className={`font-semibold py-2 px-6 rounded shadow mt-4 self-start transition ${
                      isBooked
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-yellow-300 hover:bg-yellow-500 text-gray-900'
                    }`}
                    onClick={() => {
                      if (!isBooked) {
                        setBookedRoom(room);
                        const key = generateRoomKey();
                        setRoomKeys(prev => ({ ...prev, [room.title]: key }));
                      }
                    }}
                    disabled={isBooked}
                  >
                    {isBooked ? 'Booked' : 'Book Now'}
                  </button>

                  {isBooked && roomKey && (
                    <p className="text-green-700 text-sm mt-2">
                      Your Room Key: <strong>{roomKey}</strong>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
