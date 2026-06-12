import SettingsSidebar from "@/components/settings/SettingsSidebar.jsx";

export default function SettingsLayout({children,}) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex overflow-hidden">
      <div className="h-screen bg-[#0D0D0D] text-white flex-shrink-0">
        <SettingsSidebar />
      </div>
      <main className="flex-1 h-screen overflow-y-auto p-8">
        {children}
      </main>

    </div>
  );
}