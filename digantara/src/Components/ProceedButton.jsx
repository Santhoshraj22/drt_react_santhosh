import { useNavigate } from 'react-router-dom';

function ProceedButton({ selectedRows }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("selectedSatellites", JSON.stringify(selectedRows));
    navigate("/selected");
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
    >
      Proceed with ({selectedRows.length}) selected
    </button>
  );
}

export default ProceedButton;
