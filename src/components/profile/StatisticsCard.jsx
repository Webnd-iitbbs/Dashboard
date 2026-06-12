export default function StatCard({title,value,subtitle,}) {
  return (
    <div className="bg-[#1A1A1A] border-3 border-t-[#F5C518] hover:border-t-[#C49A00] transition-all duration-75 border-[#1A1A1A] rounded-2xl p-4 mx-4 md:m-4 md:w-[90%] my-4">
      <p className="text-xs uppercase text-[#888888]">{title}</p>
      <h2 className="text-4xl font-bold text-[#F5C518] mt-2">{value}</h2>
      {subtitle && (
        <p className="text-sm text-[#888888] mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}