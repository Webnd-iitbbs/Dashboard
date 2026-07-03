export default function Loader() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-[#0D0D0D]">
      <div className="relative flex flex-col items-center justify-center p-8 text-center">
        {/* Glow Background */}
        <div className="absolute h-48 w-48 rounded-full bg-[#F5C518] opacity-[0.03] blur-[60px] animate-pulse-glow" />

        {/* Loader Rings */}
        <div className="relative flex h-24 w-24 items-center justify-center mb-6">
          {/* Outer Spin Ring */}
          <div className="absolute h-full w-full rounded-full border-4 border-t-[#F5C518] border-r-transparent border-b-[#F5C518]/20 border-l-transparent animate-spin-slow" />

          {/* Inner Spin Ring */}
          <div className="absolute h-16 w-16 rounded-full border-4 border-t-transparent border-r-[#F5C518]/60 border-b-transparent border-l-[#F5C518]/10 animate-spin-fast" />

          {/* Core Pulsing Icon */}
          <div className="absolute h-8 w-8 rounded-full bg-[#F5C518] flex items-center justify-center shadow-[0_0_15px_rgba(245,197,24,0.4)] animate-pulse-glow">
            <span className="text-[10px] font-black text-black">W</span>
          </div>
        </div>

        {/* Dynamic Status Text */}
        <h3 className="text-lg font-semibold tracking-wide text-[#F5F5F5] animate-pulse-text">
          Syncing with database
        </h3>
        <p className="mt-1.5 text-xs text-[#888888] tracking-widest uppercase">
          Please wait
        </p>
      </div>
    </div>
  );
}
