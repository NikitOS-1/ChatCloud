export const POINTER_TABS = 'pointer';
export const LINE_TABS = 'line';

export interface TabInterface {
  id: number;
}

export interface TabsInterface {
  variants?: string;
  items: string[];
  value: string;
  onChange?: (index: string) => void;
}
