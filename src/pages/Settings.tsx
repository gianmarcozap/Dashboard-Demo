import React, { useEffect, useState } from "react";

const Settings: React.FC = () => {
  const [name, setName] = useState("Gianmarco");
  const [email, setEmail] = useState("gianmarco@example.com");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"es"|"en">("es");
  const [apiKey, setApiKey] = useState<string>("sk-live-************************");

  useEffect(() => {
    // Demo: cargar de localStorage si existiera
    const user = localStorage.getItem("user");
    if (user) setName(user);
  }, []);

  const handleSave = () => {
    localStorage.setItem("user", name);
    alert("✅ Configuración guardada");
  };

  return (
    <div className="ml-60 p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">⚙️ Configuration</h1>
        <p className="text-sm text-gray-500">Manage your profile and settings</p>
      </div>

      {/* Perfil */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Profile</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}
                   className="w-full border rounded px-3 py-2 text-sm"/>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}
                   className="w-full border rounded px-3 py-2 text-sm"/>
          </div>
        </div>
        <p className="text-sm text-gray-600">👋 Hi, <span className="font-semibold">{name}</span>. Welcome Back!</p>
      </div>

      {/* Preferencias */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={notifications} onChange={(e)=>setNotifications(e.target.checked)} />
            <span>Notification by email</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={darkMode} onChange={(e)=>setDarkMode(e.target.checked)} />
            <span>Darkness mode (demo)</span>
          </label>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Language</label>
            <select value={language} onChange={(e)=>setLanguage(e.target.value as "es"|"en")}
                    className="w-full border rounded px-3 py-2 text-sm">
              <option value="es">English</option>
              <option value="en">Spanish</option>
            </select>
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">API Keys</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-500 mb-1">Hidden key</label>
            <input value={apiKey} onChange={(e)=>setApiKey(e.target.value)}
                   className="w-full border rounded px-3 py-2 text-sm font-mono"/>
          </div>
          <div className="flex items-end">
            <button
              onClick={()=>navigator.clipboard.writeText(apiKey)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-black">
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
