
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sprout, GraduationCap, TrendingUp, Users, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-amber-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🌱 Launching 2025
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Kisii through<br />
            <span className="text-amber-200">AI Agriculture</span> and<br />
            <span className="text-green-200">Biblical Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Service. Innovation. Faith. Food Security for All.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-3">
              <Link to="/register">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Two Platforms. One Mission.</h2>
          <p className="text-xl text-gray-600">Transforming lives through technology and faith</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* AgriAI Platform */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">🌾 AgriAI Platform</CardTitle>
              <CardDescription className="text-lg">AI tools for smallholder farmers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Smart crop advice for tea, maize & coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time weather & climate insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Market linkage & price tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Income tracking & financial planning</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EduTech Center */}
          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl text-amber-700">📚 EduTech Center</CardTitle>
              <CardDescription className="text-lg">Courses in AI, ethics & digital skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>AI fundamentals & practical applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Biblical ethics in technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Digital literacy & entrepreneurship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Daily devotionals & discussion boards</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why It Works</h2>
            <p className="text-xl text-gray-600">Inspired by innovation, grounded in faith</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-700">Peter Thiel's Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Zero-to-one thinking: creating unique value where none existed before</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-700">Elon Musk's Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sustainable technology for humanity's greatest challenges</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-amber-700">Jesus' Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">"Love your neighbor as yourself" - serving the least of these</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Roadmap</h2>
            <p className="text-xl text-gray-600">Building the future, step by step</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-700">Phase 1: 2025</Badge>
                <CardTitle className="text-xl">Foundation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Launch MVP platform</p>
                <p>• Onboard 100 farmers</p>
                <p>• Core AI agriculture features</p>
                <p>• Basic education modules</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-amber-100 text-amber-700">Phase 2: 2026-2028</Badge>
                <CardTitle className="text-xl">Growth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Scale to 1000+ users</p>
                <p>• Advanced AI features</p>
                <p>• Mobile app launch</p>
                <p>• Partner with cooperatives</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-700">Phase 3: 2028-2030</Badge>
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Regional expansion</p>
                <p>• 10,000+ farmers served</p>
                <p>• AI research center</p>
                <p>• Sustainable food security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of farmers and students building a better tomorrow
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-3">
            <Link to="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kisii AgriAI & EduTech Hub</h3>
              <p className="text-gray-300">Empowering communities through technology and faith</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">Kisii, Kenya</p>
              <p className="text-gray-300">info@kisiiagri.com</p>
              <p className="text-gray-300">+254 700 000 000</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <p className="text-gray-300">AgriAI Tools</p>
              <p className="text-gray-300">EduTech Courses</p>
              <p className="text-gray-300">Community Forum</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-300">Facebook</p>
              <p className="text-gray-300">WhatsApp</p>
              <p className="text-gray-300">Twitter</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 italic mb-2">
              "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me."
            </p>
            <p className="text-gray-400">- Matthew 25:40</p>
            <p className="text-gray-400 mt-4">© 2025 Kisii AgriAI & EduTech Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
