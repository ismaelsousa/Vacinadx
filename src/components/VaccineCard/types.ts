export interface VaccineDateProps {
  title: string;
  shot: 'single-dose' | 'first-dose' | 'second-dose';
  date: string;
  onPress?: () => void;
}

/**
 * Style
 */

export interface BadgeLeftProps {
  color: string;
}
export interface ChipProps {
  color: string;
}
