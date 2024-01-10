export const POINTER_TABS = 'pointer';
export const LINE_TABS = 'line';

export interface TabInterface {
  id: number;
}

export interface TabsPropsInterface {
  items: ItemsBadgeInterface[];
  value: string;
  variants?: string;
  onChange?: (index: string) => void;
  badge?: number;
}
export interface ItemsBadgeInterface {
  item: string;
  badge?: number;
}
