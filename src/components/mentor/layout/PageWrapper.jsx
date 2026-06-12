const PageWrapper = ({ title, subtitle, children }) => {
    return (
        <div className="p-4 md:p-8 mobile-page lg:h-screen! overflow-y-auto wd-scroll">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">{title}</h1>
                <p className="text-[#888888] mt-2">{subtitle}</p>
            </div>
            {children}
        </div>
    )
}

export default PageWrapper;