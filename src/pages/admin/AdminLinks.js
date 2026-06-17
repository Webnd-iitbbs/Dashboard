import { LayoutDashboard, Trophy, User, Users } from "lucide-react"
import { FaTasks } from "react-icons/fa"

const AdminLinks = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    }, {
        title: "Members",
        href: "/members",
        icon: FaTasks
    }, {
        title: "Leaderboard",
        href: "/leaderboard",
        icon: Trophy
    },
    {
        title: "Mentors",
        href: "/mentors",
        icon: Users
    }, {
        title: "Profile",
        href: "/profile",
        icon: User
    }
]
export default AdminLinks;