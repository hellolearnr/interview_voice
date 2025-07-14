import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";
import path from "path";

export const SideBarOptions = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path:'/dashboard',
    },
{
        name: "Scheduled Interviews",   
        icon: Calendar,
        path:'/scheduled-interviews',
    },
    {
        name: "All Interviews",
        icon: List,
        path:'/all-interviews',
    },
    {
        name: "Billing",
        icon: WalletCards,
        path:'/billing',
    },
    {
        name: "Setting",
        icon: Settings,
        path:'/settings',
    }

]