export interface ClinicalsCardProps {
  clinicalName: string;
  address: string;
  imageSrc: string;
  imageAlt: string;
  rating?: number;
  reviewCount?: number;
  isOpen?: boolean;
  schedule?: string;
  href: string;
}

export interface ClinicalsCardButtonProps {
  href: string;
  children: React.ReactNode;
}

export interface ClinicalsCardHeaderProps {
  clinicalName: string;
  address: string;
}

export interface ClinicalsCardImageProps {
  src: string;
  alt: string;
}

export interface ClinicalsCardRatingProps {
  rating?: number;
  reviewCount?: number;
}

export interface ClinicalsCardScheduleProps {
  schedule?: string;
}

export interface ClinicalsCardStatusProps {
  isOpen?: boolean;
}
