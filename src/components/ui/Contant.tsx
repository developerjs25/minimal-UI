import Images from "../../../src/constants/Images";
import type { OptionType } from "../../Types";



export const userItems = [
    { label: "Profile", path: "/user/profile" },
    { label: "UserList", path: "/user/userlist" },
    { label: "adduser", path: "/user/adduser" },
];

export const options: OptionType[] = [
    { label: "Team 1", badge: "Free", image: Images.select1, chipBackground: "#eceff3" },
    { label: "Team 2", badge: "Pro", image: Images.select2, chipBackground: "#d8edf7" },
    { label: "Team 3", badge: "Pro", image: Images.select3, chipBackground: "#d8edf7" },
];

export const NotificationContant = [
        { title: "Your order is placed waiting for shipping", time: "5 days Order", img: Images.shiping },
        { title: "Delivery processing your order is being shipped", time: "6 days Order", img: Images.shiped },
        { title: "You have new message 5 unread messages", time: "7 days Communication", img: Images.message },
        { title: "You have new mail", time: "8 days Communication", img: Images.mail },
    ];
