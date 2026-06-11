const PerformanceMetrics = () => {
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <h2 className="text-[#F5C518] text-xl font-semibold mb-6">Performance Metrics</h2>
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between">
                        <span className="text-white">Completion Rate</span>
                        <span className="text-[#F5C518]">84%</span>
                    </div>
                    <div className="h-3 bg-[#2A2A2A] rounded-full mt-3">
                        <div className="h-3 w-[84%] bg-[#F5C518] rounded-full" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <span className="text-white">Mentor Rating</span>
                        <span className="text-[#F5C518]">92%</span>
                    </div>
                    <div className="h-3 bg-[#2A2A2A] rounded-full mt-3">
                        <div className="h-3 w-[92%] bg-[#F5C518] rounded-full" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <span className="text-white">Task Success Rate</span>
                        <span className="text-[#F5C518]">88%</span>
                    </div>
                    <div className="h-3 bg-[#2A2A2A] rounded-full mt-3">
                        <div className="h-3 w-[88%] bg-[#F5C518] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerformanceMetrics;