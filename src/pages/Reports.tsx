import React, { useMemo, useState } from "react";

type ReportRow = {
  id: string;
  date: string; // ISO
  channel: "Web" | "Mobile" | "Partners";
  revenue: number;
  users: number;
  arpc: number;
};

const raw: ReportRow[] = [
  { id: "R-1001", date: "2025-07-01", channel: "Web", revenue: 18200, users: 420, arpc: 43.3 },
  { id: "R-1002", date: "2025-07-02", channel: "Mobile", revenue: 15400, users: 380, arpc: 40.5 },
  { id: "R-1003", date: "2025-07-03", channel: "Partners", revenue: 9600, users: 140, arpc: 68.5 },
  { id: "R-1004", date: "2025-07-04", channel: "Web", revenue: 21300, users: 505, arpc: 42.2 },
  { id: "R-1005", date: "2025-07-05", channel: "Mobile", revenue: 13100, users: 300, arpc: 43.7 },
];

function toCSV(rows: ReportRow[]) {
  const header = ["id", "date", "channel", "revenue", "users", "arpc"].join(",");
  const body = rows
    .map(r => [r.id, r.date, r.channel, r.revenue, r.users, r.arpc].join(","))
    .join("\n");
  return `${header}\n${body}`;
}

const Reports: React.FC = () => {
  const [from, setFrom] = useState<string>("2025-07-01");
  const [to, setTo] = useState<string>("2025-07-31");
  const [channel, setChannel] = useState<string>("All");

  const filtered = useMemo(() => {
    const f = new Date(from).getTime();
    const t = new Date(to).getTime();
    return raw.filter(r => {
      const d = new Date(r.date).getTime();
      const okDate = d >= f && d <= t;
      const okChannel = channel === "All" ? true : r.channel === channel;
      return okDate && okChannel;
    });
  }, [from, to, channel]);

  const totals = useMemo(() => {
    const revenue = filtered.reduce((acc, r) => acc + r.revenue, 0);
    const users = filtered.reduce((acc, r) => acc + r.users, 0);
    const arpc = filtered.length ? revenue / users : 0;
    return { revenue, users, arpc };
  }, [filtered]);

  const handleExport = () => {
    const blob = new Blob([toCSV(filtered)], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ml-60 p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">📄 Reports</h1>
        <p className="text-sm text-gray-500">Filter, review, and export metrics.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">From</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Channel</label>
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option>All</option>
            <option>Web</option>
            <option>Mobile</option>
            <option>Partners</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleExport}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-xs text-gray-500">Revenue</div>
          <div className="text-2xl font-bold">${totals.revenue.toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-xs text-gray-500">Users</div>
          <div className="text-2xl font-bold">{totals.users.toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-xs text-gray-500">ARPC</div>
          <div className="text-2xl font-bold">${totals.arpc.toFixed(2)}</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Channel</th>
              <th className="px-4 py-3">Revenue</th>
              <th className="px-4 py-3">Users</th>
              <th className="px-4 py-3">ARPC</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{r.id}</td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3">{r.channel}</td>
                <td className="px-4 py-3">${r.revenue.toLocaleString()}</td>
                <td className="px-4 py-3">{r.users.toLocaleString()}</td>
                <td className="px-4 py-3">${r.arpc.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-6 text-center text-gray-500 text-sm">No results</div>
        )}
      </div>
    </div>
  );
};

export default Reports;
