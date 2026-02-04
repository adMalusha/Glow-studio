export enum TreatmentCategory {
  LASER = 'Laserontharing',
  TEETH_WHITENING = 'Tanden witten',
  PREGNANCY_STATUE = '3D Zwangerschapsbeeldje'
}

export enum Gender {
  MAN = 'Man',
  VROUW = 'Vrouw'
}

export interface BookingData {
  category: TreatmentCategory | null;
  gender: Gender | null;
  date: string | null;
  time: string | null;
  clientInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}