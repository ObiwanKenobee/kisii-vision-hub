
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, BookOpen, MessageSquare, Heart, LogOut, User, CheckCircle, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const [newPost, setNewPost] = useState('');

  const courses = [
    {
      title: 'AI Fundamentals',
      description: 'Introduction to artificial intelligence and machine learning',
      progress: 75,
      modules: 8,
      completed: 6,
      status: 'in-progress'
    },
    {
      title: 'Biblical Ethics in Technology',
      description: 'Applying Christian principles to modern technology',
      progress: 45,
      modules: 6,
      completed: 3,
      status: 'in-progress'
    },
    {
      title: 'Digital Entrepreneurship',
      description: 'Building businesses in the digital age',
      progress: 90,
      modules: 10,
      completed: 9,
      status: 'almost-complete'
    },
    {
      title: 'Agricultural Technology',
      description: 'Using technology to improve farming practices',
      progress: 30,
      modules: 12,
      completed: 4,
      status: 'in-progress'
    },
  ];

  const devotional = {
    date: 'December 28, 2024',
    title: 'Technology as a Tool for Service',
    verse: '"And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him." - Colossians 3:17',
    reflection: 'As we develop our skills in technology, let us remember that our ultimate purpose is to serve God and others. Every line of code, every innovation, every solution we create should reflect His love and serve His kingdom. Technology is not just about efficiency—it\'s about extending our capacity to love and serve our neighbors.',
    prayer: 'Lord, help us to use the gifts of knowledge and technology You have given us to serve others and glorify Your name. May our learning always be guided by Your wisdom and love.'
  };

  const discussionPosts = [
    {
      author: 'Sarah Nyong\'o',
      time: '2 hours ago',
      topic: 'AI in Agriculture',
      content: 'How can we ensure AI solutions for farming are accessible to smallholder farmers in rural areas?',
      replies: 5
    },
    {
      author: 'David Kiprotich',
      time: '4 hours ago',
      topic: 'Biblical Ethics',
      content: 'What does it mean to "love your neighbor" in the context of social media algorithms?',
      replies: 8
    },
    {
      author: 'Grace Achieng',
      time: '1 day ago',
      topic: 'Digital Entrepreneurship',
      content: 'Started my first tech startup focused on education. Any advice for a Christian entrepreneur?',
      replies: 12
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-amber-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-amber-100 text-amber-700">
              <User className="w-3 h-3 mr-1" />
              Student
            </Badge>
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <BookOpen className="w-5 h-5" />
                  My Courses
                </CardTitle>
                <CardDescription>Track your learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{course.title}</h4>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                        <Badge className={`
                          ${course.status === 'almost-complete' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                        `}>
                          {course.completed}/{course.modules} modules
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                          Continue Learning
                        </Button>
                        {course.status === 'almost-complete' && (
                          <Button size="sm" variant="outline">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Complete Course
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Discussion Board */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <MessageSquare className="w-5 h-5" />
                  Community Discussion
                </CardTitle>
                <CardDescription>Join the conversation with fellow students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {discussionPosts.map((post, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-medium">{post.author}</h5>
                          <p className="text-sm text-gray-600">{post.time}</p>
                        </div>
                        <Badge variant="outline">{post.topic}</Badge>
                      </div>
                      <p className="text-gray-700 mb-2">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.replies} replies</span>
                        <Button variant="link" size="sm" className="p-0 h-auto">Reply</Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Start a new discussion</h4>
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Share your thoughts, ask questions, or start a discussion..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      rows={3}
                    />
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => {
                        if (newPost.trim()) {
                          alert('Discussion post created! (Demo mode)');
                          setNewPost('');
                        }
                      }}
                    >
                      Post Discussion
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Devotional */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <Heart className="w-5 h-5" />
                  Daily Devotional
                </CardTitle>
                <CardDescription>{devotional.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">{devotional.title}</h4>
                  
                  <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                    <p className="text-sm italic">{devotional.verse}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Reflection</h5>
                    <p className="text-sm text-gray-700">{devotional.reflection}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Prayer</h5>
                    <p className="text-sm text-gray-700 italic">{devotional.prayer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Clock className="w-5 h-5" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Study Time</p>
                    <p className="text-2xl font-bold text-blue-700">24.5 hrs</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Courses Enrolled</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Modules Completed</span>
                      <span className="font-medium">22</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Discussion Posts</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Score</span>
                      <span className="font-medium">87%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Resume Last Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Join Study Group
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Prayer Requests
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
