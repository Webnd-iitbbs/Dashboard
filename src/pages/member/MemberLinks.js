import { LayoutDashboard, Trophy, User } from "lucide-react"
import { FaTasks } from "react-icons/fa"

const MemberLinks = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },  {
        title:"My Tasks",
        href:"/tasks",
        icon: FaTasks
    },
    {
        title: "Leaderboard",
        href: "/leaderboard",
        icon: Trophy
    },  
    {
        title: "Resources",
        href: "/resources",
        icon: Trophy
    },  
    {
        title: "Profile",
        href: "/profile",
        icon: User
    }
]
export default MemberLinks;