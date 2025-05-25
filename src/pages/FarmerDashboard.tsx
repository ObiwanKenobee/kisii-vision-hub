
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from '../contexts/AuthContext';
import { Sprout, CloudRain, TrendingUp, DollarSign, MessageCircle, LogOut, User, Sun, Droplets } from 'lucide-react';

const FarmerDashboard = () => {
  const { user, logout } = useAuth();
  const [chatMessage, setChatMessage] = useState('');

  const cropData = [
    { crop: 'Tea', status: 'Healthy', advice: 'Perfect harvest time in 2 weeks', color: 'green' },
    { crop: 'Maize', status: 'Needs Water', advice: 'Increase irrigation frequency', color: 'yellow' },
    { crop: 'Coffee', status: 'Monitor Pests', advice: 'Apply organic pesticide', color: 'orange' },
  ];

  const marketPrices = [
    { product: 'Tea (per kg)', price: 'KSh 45', trend: 'up' },
    { product: 'Maize (per bag)', price: 'KSh 3,200', trend: 'stable' },
    { product: 'Coffee (per kg)', price: 'KSh 95', trend: 'up' },
  ];

  const weatherData = {
    today: { temp: '24°C', condition: 'Partly Cloudy', humidity: '68%', rainfall: '5mm' },
    forecast: [
      { day: 'Tomorrow', temp: '26°C', condition: 'Sunny' },
      { day: 'Wednesday', temp: '23°C', condition: 'Light Rain' },
      { day: 'Thursday', temp: '25°C', condition: 'Cloudy' },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sprout className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-100 text-green-700">
              <User className="w-3 h-3 mr-1" />
              Farmer
            </Badge>
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Today's Weather Card */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <CloudRain className="w-5 h-5" />
              Today's Weather - Kisii
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="font-semibold">{weatherData.today.temp}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Condition</p>
                  <p className="font-semibold">{weatherData.today.condition}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Humidity</p>
                  <p className="font-semibold">{weatherData.today.humidity}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Rainfall</p>
                  <p className="font-semibold">{weatherData.today.rainfall}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Crop Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Sprout className="w-5 h-5" />
                  Real-time Crop Insights
                </CardTitle>
                <CardDescription>AI-powered advice for your crops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropData.map((crop, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{crop.crop}</h4>
                        <Badge className={`
                          ${crop.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                          ${crop.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                          ${crop.color === 'orange' ? 'bg-orange-100 text-orange-700' : ''}
                        `}>
                          {crop.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{crop.advice}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <TrendingUp className="w-5 h-5" />
                  Market Prices & Trends
                </CardTitle>
                <CardDescription>Current market rates for your crops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="font-medium">{item.product}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{item.price}</span>
                        <Badge className={`
                          ${item.trend === 'up' ? 'bg-green-100 text-green-700' : ''}
                          ${item.trend === 'stable' ? 'bg-gray-100 text-gray-700' : ''}
                        `}>
                          {item.trend === 'up' ? '↗️' : '➡️'} {item.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Income Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <DollarSign className="w-5 h-5" />
                  Income Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-green-700">KSh 45,200</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tea Sales</span>
                      <span className="font-medium">KSh 28,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Maize Sales</span>
                      <span className="font-medium">KSh 12,800</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Coffee Sales</span>
                      <span className="font-medium">KSh 4,400</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AgriAI Chat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <MessageCircle className="w-5 h-5" />
                  Ask AgriAI
                </CardTitle>
                <CardDescription>Get instant farming advice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">💡 Try asking:</p>
                    <p className="text-sm">"When should I plant maize?"</p>
                    <p className="text-sm">"Best fertilizer for tea?"</p>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me anything about farming..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        if (chatMessage.trim()) {
                          alert(`AgriAI: Great question about "${chatMessage}"! I'm still learning, but I recommend consulting your local agricultural extension officer for detailed advice.`);
                          setChatMessage('');
                        }
                      }}
                    >
                      Ask
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Forecast */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <CloudRain className="w-5 h-5" />
                  3-Day Forecast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="flex justify-between items-center p-2 border rounded">
                      <span className="text-sm font-medium">{day.day}</span>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{day.temp}</p>
                        <p className="text-xs text-gray-600">{day.condition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
