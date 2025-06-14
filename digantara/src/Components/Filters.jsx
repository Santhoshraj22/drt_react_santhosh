import Select from "react-select";
import { useState } from "react";


const objectTypeOptions = ["ROCKET BODY", "DEBRIS", "UNKNOWN", "PAYLOAD"].map((v) => ({
  label: v,
  value: v,
}));

const orbitCodeOptions = [
  "LEO", "LEO1", "LEO2", "LEO3", "LEO4", "MEO", "GEO", "HEO", "IGO", "EGO", "NSO",
  "GTO", "GHO", "HAO", "MGO", "LMO", "UFO", "ESO", "UNKNOWN"
].map((v) => ({
  label: v,
  value: v,
}));


const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderColor: state.isFocused ? "#06b6d4" : "rgba(255, 255, 255, 0.2)",
    minHeight: "32px",
    height: "32px",
    padding: "0 4px",
    fontSize: "0.8rem",
    borderRadius: "0.5rem",
    color: "white",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(6,182,212,0.5)" : "none",
    backdropFilter: "blur(6px)",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 6px",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "white",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "30px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1e293b", 
    color: "#ffffff",
    fontSize: "0.8rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#06b6d4" : "transparent",
    color: state.isFocused ? "#0f172a" : "#f8fafc",
    cursor: "pointer",
    padding: "8px",
    fontSize: "0.8rem",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#0ea5e9",
    borderRadius: "4px",
    padding: "0 4px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "white",
    fontSize: "0.75rem",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "white",
    ':hover': {
      backgroundColor: "#1e3a8a",
      color: "white",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
    fontSize: "0.8rem",
  }),
};

function Filters({ onApply }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedOrbits, setSelectedOrbits] = useState([]);

  const apply = () => {
    onApply({
      objectTypes: selectedTypes.map((t) => t.value),
      orbitCodes: selectedOrbits.map((o) => o.value),
    });
  };

  return (
    <div className="space-y-4 text-white text-sm">
      {/* Object Type Filter */}
      <div>
        <label className="block font-semibold mb-1 text-cyan-300">Object Type</label>
        <Select
          isMulti
          options={objectTypeOptions}
          styles={customSelectStyles}
          onChange={setSelectedTypes}
          placeholder="Select object types..."
        />
      </div>

      {/* Orbit Code Filter */}
      <div>
        <label className="block font-semibold mb-1 text-cyan-300">Orbit Code</label>
        <Select
          isMulti
          options={orbitCodeOptions}
          styles={customSelectStyles}
          onChange={setSelectedOrbits}
          placeholder="Select orbit codes..."
        />
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={apply}
        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm px-5 py-2 rounded-lg hover:scale-105 transition-all shadow"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;
