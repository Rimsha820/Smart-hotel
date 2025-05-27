interface Room {
  id: number;
  title: string;       // or name, or something else
  image: string;
  price: number;
  size: number | string;
  capacity: number;
  bed: string;
  services: string[];
  desc: string;
}
