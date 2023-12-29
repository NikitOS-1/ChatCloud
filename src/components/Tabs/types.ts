export interface TabInterface {
  id: number;
}

export interface TabsInterface {
  items: string[];
  value: string;
  onChange?: (index: string) => void;
}
