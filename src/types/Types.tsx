import { ReactNode } from "react";

export interface MonogramSVGProps {
  initials: string;
}

export interface TextWrapperProps {
  text: string;
  children?: ReactNode;
}

export interface HeadingAltProps {
  icon: JSX.Element;
  title: string;
}

export interface SectionAltProps {
  children: ReactNode;
  id: string;
}

export interface RatingWrapperProps {
  children: ReactNode;
}

export interface ExcellentRatingProps {
  nativeSpeaker?: boolean;
}
