import React, { useState } from 'react';
import { Thermometer, Droplets } from 'lucide-react';
import { calculatePsychrometricProperties, type PsychrometricResult } from '../utils/psychrometrics';

export default function Calculator() {
  const [inputs, setInputs] = useState({
    dryBulb: '',
    wetBulb: '',
  });
  const [result, setResult] = useState<PsychrometricResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dryBulb = parseFloat(inputs.dryBulb);
    const wetBulb = parseFloat(inputs.wetBulb);
    
    if (dryBulb < wetBulb) {
      alert('Dry bulb temperature must be greater than or equal to wet bulb temperature');
      return;
    }

    const results = calculatePsychrometricProperties(dryBulb, wetBulb);
    setResult(results);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Thermometer className="h-8 w-8 text-blue-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Psychrometric Calculator</h1>
      </div>

      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">How to Use</h2>
        <ol className="list-decimal list-inside text-blue-700 space-y-2">
          <li>Enter the dry bulb temperature (°C)</li>
          <li>Enter the wet bulb temperature (°C)</li>
          <li>Click calculate to see all psychrometric properties</li>
        </ol>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dry Bulb Temperature (°C)
          </label>
          <input
            type="number"
            value={inputs.dryBulb}
            onChange={(e) => setInputs({ ...inputs, dryBulb: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            step="0.1"
            min="-50"
            max="100"
            placeholder="Enter dry bulb temperature"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Wet Bulb Temperature (°C)
          </label>
          <input
            type="number"
            value={inputs.wetBulb}
            onChange={(e) => setInputs({ ...inputs, wetBulb: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            step="0.1"
            min="-50"
            max="100"
            placeholder="Enter wet bulb temperature"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Properties
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 rounded-md bg-blue-50">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-md shadow">
              <div className="flex items-center mb-2">
                <Thermometer className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Temperatures</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Dry Bulb: {result.dryBulbTemp.toFixed(1)}°C</p>
                <p>Wet Bulb: {result.wetBulbTemp.toFixed(1)}°C</p>
                <p>Dew Point: {result.dewPoint.toFixed(1)}°C</p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-md shadow">
              <div className="flex items-center mb-2">
                <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Humidity</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Relative Humidity: {result.relativeHumidity.toFixed(1)}%</p>
                <p>Absolute Humidity: {result.absoluteHumidity.toFixed(2)} g/kg</p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-md shadow">
              <div className="flex items-center mb-2">
                <span className="font-medium">Energy</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Enthalpy: {result.enthalpy.toFixed(2)} kJ/kg</p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-md shadow">
              <div className="flex items-center mb-2">
                <span className="font-medium">Volume</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Specific Volume: {result.specificVolume.toFixed(3)} m³/kg</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}