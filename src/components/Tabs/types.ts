export interface TabInterface {
  id: number;
  component: React.ReactNode;
}

export interface TabsInterface {
  mainComponents: TabInterface[];
  footerComponents: TabInterface[];
}