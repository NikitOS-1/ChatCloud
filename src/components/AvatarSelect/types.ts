export interface AvatarSelectProps {
  value: string;
  options: Option[];
  onSelect: (src: string) => void;
}
export interface Option {
  id: number;
  src: string;
}
