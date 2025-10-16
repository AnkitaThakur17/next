import BackButton from "@/app/components/BackButton";

export default function SettingsPage() {
  return (
    <div className="bg-white min-h-screen p-10" >
      <h1 className="text-2xl font-bold text-gray-400">Settings</h1>
      <p className="text-gray-400">Change settings here.</p>
      <BackButton/>
    </div>
  );
}
