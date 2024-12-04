import React from 'react';
import { Thermometer, BarChart, Calculator, Settings2, BookOpen, HelpCircle } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          The Ultimate Guide to Psychrometric Calculations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Thermometer className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Psychrometric Calculator</h3>
            </div>
            <p className="text-gray-600">Our psychrometric calculator helps HVAC professionals and engineers calculate essential air properties.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <BarChart className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Accurate Results</h3>
            </div>
            <p className="text-gray-600">Get precise psychrometric calculations based on industry-standard formulas and methods.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Settings2 className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Psychrometrics</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Psychrometrics is the study of air and water vapor mixtures. Our psychrometric calculator helps you determine important properties like relative humidity, dew point, and enthalpy.</p>
              <p className="text-gray-600">Using our psychrometric calculator ensures accurate calculations for your HVAC and environmental control needs.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Key Psychrometric Properties</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  Dry Bulb Temperature - The air temperature measured by a standard thermometer
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  Wet Bulb Temperature - Temperature measured by a thermometer covered in a wet cloth
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  Relative Humidity - The amount of water vapor in the air compared to saturation
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  Dew Point - The temperature at which water vapor begins to condense
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our Psychrometric Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accurate calculations based on proven psychrometric equations</li>
            <li>Easy-to-use interface for quick results</li>
            <li>Comprehensive property calculations</li>
            <li>Free online tool for professionals</li>
            <li>Mobile-friendly design for on-the-go calculations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}