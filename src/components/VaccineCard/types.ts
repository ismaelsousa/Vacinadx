export interface VaccineCardProps {
  title: string;
  shot: 'single-dose' | 'first-dose' | 'second-dose';
  date: string;
  onPress?: () => void;
}

/**
 * Styles
 */

export interface BadgeLeftProps {
  color: string;
}
export interface ChipProps {
  color: string;
}
