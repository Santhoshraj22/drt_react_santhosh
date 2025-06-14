import { useEffect, useState } from "react";
import { fetchSatellites } from "../api/satellites";
import { FixedSizeList as List } from "react-window";

function SatelliteTable({ searchQuery, filters, selectedRows, setSelectedRows }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchSatellites(filters.objectTypes, [
      "noradCatId", "intlDes", "name", "launchDate",
      "decayDate", "objectType", "launchSiteCode", "countryCode", "orbitCode"
    ])
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch satellite data. " + err.message);
        setLoading(false);
      });
  }, [filters]);

  const handleSelect = (item) => {
    const exists = selectedRows.find((r) => r.noradCatId === item.noradCatId);
    if (exists) {
      setSelectedRows(selectedRows.filter((r) => r.noradCatId !== item.noradCatId));
    } else {
      if (selectedRows.length >= 10) {
        alert("Max 10 selections allowed.");
        return;
      }
      setSelectedRows([...selectedRows, item]);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB");
  };

  // ✅ Search filtering
  const filtered = data.filter((item) => {
    const matchName = item.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchId = item.noradCatId?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchName || matchId;
  });

  const Row = ({ index, style }) => {
    const item = filtered[index];
    const checked = selectedRows.some((r) => r.noradCatId === item.noradCatId);

    return (
      <div
        style={style}
        className="flex items-center justify-between px-4 py-3 border-b border-white/20 transition hover:bg-white/10 rounded"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleSelect(item)}
          className="mr-3 accent-cyan-400 scale-125"
        />
        <div className="grid grid-cols-6 gap-2 w-full text-sm text-white">
          <span>{item.name}</span>
          <span>{item.noradCatId}</span>
          <span>{item.orbitCode}</span>
          <span>{item.objectType}</span>
          <span>{item.countryCode}</span>
          <span>{formatDate(item.launchDate)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="border rounded-lg p-2 bg-white/5">
      <div className="grid grid-cols-6 p-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-md shadow mb-2">
        <span>Name</span>
        <span>NORAD ID</span>
        <span>Orbit</span>
        <span>Type</span>
        <span>Country</span>
        <span>Launch Date</span>
      </div>

      {loading && <p className="text-white text-center">Loading data...</p>}
      {error && (
        <div className="text-red-500 bg-red-100 border border-red-300 rounded px-4 py-2 mb-4">
          {error}
        </div>
      )}

      {!loading && !error && (
        <List height={220} itemCount={filtered.length} itemSize={50} width="100%">
          {Row}
        </List>
      )}
    </div>
  );
}

export default SatelliteTable;
