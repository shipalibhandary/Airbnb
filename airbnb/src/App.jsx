import { useState } from "react";
import PropertyGrid from "./components/PropertyGrid";
import PropertyModal from "./components/PropertyModal";

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold p-5">
        Airbnb Listings
      </h1>

      <PropertyGrid onSelect={setSelectedProperty} />

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}

export default App;