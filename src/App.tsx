import { useState } from "react";

const BACKEND_URL = "http://localhost:3000/capture";

export default function App() {
  const [imgSrc, setImgSrc] = useState("");

  const capture = () => {
    setImgSrc(`${BACKEND_URL}?t=${Date.now()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">CCTV Snapshot Viewer</h1>

      <div className="w-[640px] h-[360px] border border-gray-700 rounded flex items-center justify-center bg-black">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="CCTV"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-gray-400">No snapshot</span>
        )}
      </div>

      <button
        onClick={capture}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Capture Snapshot
      </button>
    </div>
  );
}
