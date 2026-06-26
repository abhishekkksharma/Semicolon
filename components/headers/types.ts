export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItemProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
  dropdown?: DropdownItem[];
}