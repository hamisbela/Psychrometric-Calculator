import React from 'react';
import { Info, BarChart2, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Info className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to Psychrometric Calculator, your trusted resource for HVAC and environmental engineering calculations.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex flex-col items-center text-center p-4">
                <BarChart2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide accurate psychrometric calculations for HVAC professionals worldwide.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Precision, reliability, and user-friendly tools for the HVAC community.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                <p className="text-gray-600">Supporting engineers and technicians with essential calculations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Our Calculator</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Industry-standard psychrometric formulas</li>
              <li>Comprehensive air property calculations</li>
              <li>User-friendly interface</li>
              <li>Mobile-responsive design</li>
              <li>Regular updates with the latest HVAC standards</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">Our team combines HVAC engineering knowledge with software development expertise to deliver accurate and reliable psychrometric calculations. We understand the importance of precise measurements in environmental control systems and strive to provide tools that meet professional standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}