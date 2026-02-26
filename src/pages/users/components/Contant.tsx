import type { List } from "../../../Types";

export const invoices: List[] = [
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },
  { name: "Angelique Morse", number: "+27 11 123 4567", company: "Heidenreich, Stokes and Parker",role: "Customer Support Specialist", status: "Banned" },

];

export const getStatusStyle = (status: string) => {
  switch (status) {
    case "Paid":
      return {
        color: "#118D57",
        backgroundColor: "rgba(34, 197, 94, 0.16)"
      };
    case "Out of date":
      return {
        color: "#B72136",
        backgroundColor: "rgba(255, 72, 66, 0.16)"
      };
    case "Progress":
      return {
        color: "#C68400",
        backgroundColor: "rgba(255, 171, 0, 0.16)"
      };
    default:
      return {};
  }
};