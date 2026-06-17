import { FileCheck, LayoutDashboard, Trophy, User, Users } from "lucide-react"
import { FaTasks } from "react-icons/fa"

const MentorLinks = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    }, {
        title: "Mentees",
        href: "/mentees",
        icon: Users
    }, {
        title:"Tasks",
        href:"/tasks",
        icon: FaTasks
    },
    {
        title: "Leaderboard",
        href: "/leaderboard",
        icon: Trophy
    }, {
        title: "Submissions",
        href: "/submissions",
        icon: FileCheck
    }, {
        title: "Profile",
        href: "/profile",
        icon: User
    }
]
export default MentorLinks;