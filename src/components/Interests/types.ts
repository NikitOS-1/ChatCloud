export interface InterestsProps {
  options: Categories;
  onChange: OnChangeCallback;
  value: string[];
}

export type Category = {
  id: number;
  category: string;
};
export type Categories = Category[];
export type OnChangeCallback = (updatedValue: string[]) => void;
