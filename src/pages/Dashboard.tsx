import React, { useState } from 'react';
import { BarChart3, Users, MapPin, TrendingUp, CheckCircle, XCircle, Clock, Award } from 'lucide-react';

export default function Dashboard() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const analyticsData = {
    totalItineraries: 1247,
    activeGuides: 68,
    verifiedArtisans: 145,
    satisfactionRate: 94
  };

  const topDestinations = [
    { name: 'Netarhat', visits: 89, growth: 12 },
    { name: 'Hundru Falls', visits: 76, growth: 8 },
    { name: 'Betla National Park', visits: 67, growth: 15 },
    { name: 'Deoghar', visits: 54, growth: 5 },
    { name: 'Hazaribagh', visits: 43, growth: 18 }
  ];

  const pendingVerifications = [
    {
      id: 1,
      name: 'Priya Kumari',
      type: 'Local Guide',
      location: 'Gumla',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      experience: '5 years',
      specialization: 'Tribal Culture',
      documents: 'Complete'
    },
    {
      id: 2,
      name: 'Santosh Mahato',
      type: 'Artisan',
      location: 'Saraikela',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      experience: '12 years',
      specialization: 'Dokra Craft',
      documents: 'Pending'
    },
    {
      id: 3,
      name: 'Rekha Soren',
      type: 'Homestay Host',
      location: 'Netarhat',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      experience: '3 years',
      specialization: 'Eco Tourism',
      documents: 'Complete'
    }
  ];

  const handleVerify = (guide: any) => {
    setSelectedGuide(guide);
    setShowCertificate(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verification & Analytics Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor platform performance and verify community members
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Analytics */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <span>Platform Analytics</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Itineraries</span>
                  <span className="text-2xl font-bold text-green-600">{analyticsData.totalItineraries}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Guides</span>
                  <span className="text-2xl font-bold text-orange-600">{analyticsData.activeGuides}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Verified Artisans</span>
                  <span className="text-2xl font-bold text-amber-600">{analyticsData.verifiedArtisans}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Satisfaction Rate</span>
                  <span className="text-2xl font-bold text-blue-600">{analyticsData.satisfactionRate}%</span>
                </div>
              </div>
            </div>

            {/* Top Destinations */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Top Destinations</span>
              </h3>
              
              <div className="space-y-3">
                {topDestinations.map((dest, index) => (
                  <div key={dest.name} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-medium">{dest.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{dest.visits}</div>
                      <div className="text-xs text-green-600">+{dest.growth}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Verification Workflow */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Verification Workflow</span>
              </h2>

              <div className="space-y-6">
                {pendingVerifications.map((person) => (
                  <div key={person.id} className="border border-gray-200 rounded-2xl p-6 hover:border-green-300 transition-colors duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                            <p className="text-green-600 font-medium">{person.type}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span>{person.location}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-gray-500">Experience:</span>
                            <span className="ml-2 font-medium">{person.experience}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Specialization:</span>
                            <span className="ml-2 font-medium">{person.specialization}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Documents:</span>
                            <span className={`text-sm font-medium ${
                              person.documents === 'Complete' ? 'text-green-600' : 'text-orange-600'
                            }`}>
                              {person.documents}
                            </span>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200">
                              <Clock className="w-4 h-4" />
                              <span>Pending</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl font-medium transition-colors duration-200">
                              <XCircle className="w-4 h-4" />
                              <span>Reject</span>
                            </button>
                            <button 
                              onClick={() => handleVerify(person)}
                              className="flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200"
                            >
                              <CheckCircle className="w-4 h-4" />
                              <span>Verify</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificate && selectedGuide && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full animate-fadeIn">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verification Complete!</h3>
                <p className="text-gray-600 mb-6">
                  {selectedGuide.name} has been successfully verified as a certified {selectedGuide.type.toLowerCase()}.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Blockchain Certificate</h4>
                  <p className="text-sm text-gray-600 mb-2">Hash: #JH2025{selectedGuide.id}VER{Date.now().toString().slice(-6)}</p>
                  <p className="text-sm text-gray-600">Issued: {new Date().toLocaleDateString()}</p>
                </div>
                
                <button 
                  onClick={() => setShowCertificate(false)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}