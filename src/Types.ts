export interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

export interface OptionType {
  label: string;
  badge: string;
  image: string;
  chipBackground: string;
}

// export interface Invoice{
//    id: string;
//    category: string;
//   price: string;
//   status: string;

// }
export interface List{
   name: string;
   number: string;
  company: string;
  role: string;
  status: string;

}
export interface StatsCardProps {
    title: string;
    value: string;
    percentage: string;
    trend: "up" | "down";
    barsColor: string;
    sparkData: number[];
}

type InvoiceStatus = "Paid" | "Out of date" | "Progress";

export interface Invoice {
  id: string;
  category: string;
  price: string;
  status: InvoiceStatus;
}

export interface AppItem {
    name: string;
    price: string;
    downloads: string;
    size: string;
    rating: string;
    logo: string;
}