export interface InterestsProps {
  options: Categories;
  onChange: OnChangeCallback;
  value: string[];
  isLoading?: boolean;
}

export type Category = {
  id: string;
  topic: string;
};
export type Categories = Category[];
export type OnChangeCallback = (updatedValue: string[]) => void;
