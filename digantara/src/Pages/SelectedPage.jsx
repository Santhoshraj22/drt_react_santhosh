function SelectedPage() {
    const selected = JSON.parse(localStorage.getItem("selectedSatellites") || "[]");
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-start mb-8">
            <button
              onClick={() => window.history.back()}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ⬅ Back to Home
            </button>
          </div>
  
        
          <h2 className="text-3xl font-extrabold text-center mb-8 text-cyan-400 drop-shadow">
            🚀 Selected Satellite Objects
          </h2>
  
        
          {selected.length === 0 ? (
            <p className="text-center text-gray-300">No satellites selected.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selected.map((sat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20 transition hover:scale-105 hover:shadow-2xl duration-300"
                >
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{sat.name}</h3>
                  <ul className="space-y-1 text-sm text-gray-100">
                    <li><strong>NORAD ID:</strong> {sat.noradCatId}</li>
                    <li><strong>Orbit Code:</strong> {sat.orbitCode || '-'}</li>
                    <li><strong>Object Type:</strong> {sat.objectType || '-'}</li>
                    <li><strong>Country:</strong> {sat.countryCode || '-'}</li>
                    <li><strong>Launch Date:</strong> {sat.launchDate || '-'}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default SelectedPage;
  