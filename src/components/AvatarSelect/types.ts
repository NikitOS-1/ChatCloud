export interface AvatarSelectProps {
  options: Option[];
  onSelect: (src: string) => void;
}
export interface Option {
  id: number;
  src: string;
}
