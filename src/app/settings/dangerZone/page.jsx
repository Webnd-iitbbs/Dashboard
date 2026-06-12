"use client";

export default function DangerZonePage() {

  const handleLogout = () => {
    alert("Logout Current Device");
  };

  const handleLogoutAll = () => {
    alert("Logout All Devices");
  };

  const handleLeaveSociety = () => {
    const confirmLeave = window.confirm(
      "Are you sure you want to leave WEBnd Society?"
    );

    if (confirmLeave) {
      alert("Society Left");
    }
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "This action cannot be undone. Delete account?"
    );

    if (confirmDelete) {
      alert("Account Deleted");
    }
  };

  return (
    <div className=".wd-scroll">
      <h1 className="text-4xl font-bold mb-8 text-red-400">
        Danger Zone
      </h1>

      <div className="space-y-6">

        <div
          className="bg-[#1A1A1A] border border-red-500/30 rounded-3xl p-6">
          <h2 className="text-xl font-semibold">
            Logout From This Device
          </h2>

          <p className="text-[#888888] mt-2 mb-4">
            End your current session.
          </p>

          <button
            onClick={handleLogout}
            className="px-5 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
            Logout
          </button>
        </div>

        <div
          className="bg-[#1A1A1A] border border-red-500/30 rounded-3xl p-6">
          <h2 className="text-xl font-semibold">
            Logout From All Devices
          </h2>

          <p className="text-[#888888] mt-2 mb-4">
            Sign out from every active session.
          </p>

          <button
            onClick={handleLogoutAll}
            className="px-5 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
            Logout Everywhere
          </button>
        </div>

        <div
          className="bg-[#1A1A1A] border border-red-500/30 rounded-3xl p-6">
          <h2 className="text-xl font-semibold">
            Leave WEBnd Society
          </h2>

          <p className="text-[#888888] mt-2 mb-4">
            Your profile will become inactive and
            your XP history will be archived.
          </p>

          <button
            onClick={handleLeaveSociety}
            className="px-5 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer ">
            Leave Society
          </button>
        </div>

        <div
          className="bg-[#1A1A1A] border border-red-600 rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-red-400">
            Delete Account
          </h2>

          <p className="text-[#888888] mt-2 mb-4">
            Permanently delete your WEBnd account.
            This action cannot be undone.
          </p>

          <button
            onClick={handleDeleteAccount}
            className="px-5 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition-all coursor-pointer ">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}