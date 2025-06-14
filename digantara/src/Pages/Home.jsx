import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import Filters from '../Components/Filters';
import SatelliteTable from '../Components/SatelliteTable';
import ProceedButton from '../Components/ProceedButton';


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    objectTypes: [],
    orbitCodes: []
  });
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          🛰️ Digantara Satellite Explorer
        </h1>
        <p className="text-lg text-gray-200 mt-2">Explore real-time orbital data with style 🚀</p>
      </div>

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 space-y-8 border border-white/20">
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid md:grid-cols-2 gap-6">
          <Filters onApply={setFilters} />
        </div>
        <SatelliteTable
          searchQuery={searchQuery}
          filters={filters}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
        <div className="flex justify-end">
          <ProceedButton selectedRows={selectedRows} />
        </div>
      </div>
    </div>
  );
}

export default Home;
