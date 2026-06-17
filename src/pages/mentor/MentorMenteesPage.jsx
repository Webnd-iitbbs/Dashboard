import MenteeCard from "@/components/mentor/mentees/MenteeCard"
import MenteeTable from "@/components/mentor/mentees/MenteeTable"
import PageWrapper from "@/components/mentor/layout/PageWrapper"

const mentees = [
    {
        id: 1,
        name: "Rick",
        domain: "Web Dev",
        github: "#",
        phone: "9875625651",
        xp: 5400,
        badges: 5,
        image: "#"
    },
    {
        id: 2,
        name: "Carrie",
        domain: "Design",
        github: "#",
        phone: "9879925651",
        xp: 400,
        badges: 0,
        image: "#"
    }
]

const MentorMenteesPage = () => {
    return (
        <PageWrapper title="Mentees" subtitle="Manage all assigned mentees">
            <div className="mb-6">
                <input placeholder="Search mentee..." className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 text-white outline-none focus:border-[#F5C518]" />
            </div>
            <MenteeTable mentees={mentees} />
            <div className="lg:hidden grid gap-5">
                {mentees.map((mentee) => (
                    <MenteeCard key={mentee.id} mentee={mentee}/>
                ))}
            </div>
        </PageWrapper>
    )
}

export default MentorMenteesPage;