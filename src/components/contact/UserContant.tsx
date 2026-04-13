import type { UserList } from "../../Types";
import Image from "../../constants/Images";


export const invoices: UserList[] = [
  {
    id: 1,
    image: Image.avtar3,
    name: "Angelique Morse",
    firstName: "Angelique",
    lastName: "Morse",
    email: "benny89@yahoo.com",
    number: "46 8 123 456",
    country: "Sweden",
    countrycode: "SE",
    state: "Virginia",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",
    zip: "85807",
    company: "Wuckert Inc",
    role: "Content Creator",
    status: "Active"
  },
  {
    id: 2,
    image: Image.avtar4,
    name: "Ariana Lang",
    firstName: "Ariana",
    lastName: "Lang",
    email: "avery43@hotmail.com",
    number: " 11 1234-5678",
     country: "Luxembourg",
      countrycode: "LU",
    state: "Virginia",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",

    zip: "85807",
    company: "Feest Group",
    role: "IT Administrator",
    status: "Inactive"
  },
  {
    id: 3,
    image: Image.avtar5,
    name: "Aspen Schmitt",
    firstName: "Aspen",
    lastName: "Schmitt",
    email: "mireya13@hotmail.com",
    number: " 91 123 4567",
     country: "Spain",
      countrycode: "ES",
    state: "New York",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",
    zip: "85807",
    company: "Kihn, Marquardt and Crist",
    role: "Financial Planner",
    status: "Banned"
  },
  {
    id: 4,
    image: Image.avtar6,
    name: "Brycen Jimenez",
    firstName: "Brycen",
    lastName: "Jimenez",
    email: "tyrel.greenholt@gmail.com",
    number: " 55 1234 5678",
     country: "Australia",
      countrycode: "AU",
    state: "danmark",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",
    zip: "85807",
    company: "Rempel, Hand and Herzog",
    role: "HR Recruiter",
    status: "Active"
  },
  {
    id: 5,
    image: Image.avtar7,
    name:"Chase Day",
    firstName: "Chase",
    lastName: "Day",
    email: "joana.simonis84@gmail.com",
    number: " 10 1234 5678",
     country: "United States",
      countrycode: "US",
    state: "Virginia",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",
    zip: "85807",
    company: "Mraz, Donnelly and Collins",
    role: "Graphic Designer",
    status: "Banned"
  },

 {
    id: 6,
    image: Image.avtar3,
    name: "Angelique Morse",
    firstName: "Angelique",
    lastName: "Morse",
    email: "benny89@yahoo.com",
    number: "68 123 456",
     country: "Canada",
      countrycode: "CA",
    state: "Virginia",
    city: "Rancho Cordova",
    address1: "908 Jack Locks",
    address2: "Suite 100",
    zip: "85807",
    company: "Wuckert Inc",
    role: "Content Creator",
    status: "Inactive"
  },
];

export const getUserStatusStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return {
        color: "#118D57",
        backgroundColor: "rgba(34, 197, 94, 0.16)",
      };
    case "banned":
      return {
        color: "#B72136",
        backgroundColor: "rgba(255, 72, 66, 0.16)",
      };
    case "inactive":
      return {
        color: "#C68400",
        backgroundColor: "rgba(255, 171, 0, 0.16)",
      };
    default:
      return {};
  }
};

