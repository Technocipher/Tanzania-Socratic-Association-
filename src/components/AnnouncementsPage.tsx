
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Megaphone } from 'lucide-react';

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "🎉 CONGRATULATIONS TO OUR DEDICATED GEOGRAPHY TEACHERS! 🎉",
      content: "We are thrilled to extend our heartfelt CONGRATULATIONS to all Geography teachers for achieving outstanding results in the NECTA examinations! 🌍📚\n\nYour tireless efforts, strategic preparation, and commitment to using Series Exams have yielded remarkable success. The improvement in performance is a true reflection of your dedication, teamwork, and passion for excellence in education.\n\nThe Series Exams played a pivotal role in equipping students with the skills, confidence, and knowledge needed to shine in the final exams. This achievement would not have been possible without your continuous support and hard work.",
      date: "2025-01-09",
      time: "2:00 PM",
      priority: "high",
      category: "Congratulations"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-primary text-primary-foreground';
      case 'low':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityLabel = (priority: string) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Megaphone className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Announcements
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, examination schedules, and important notifications from TASSA.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {announcement.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {getPriorityLabel(announcement.priority)} Priority
                    </Badge>
                    <Badge variant="outline">
                      {announcement.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed whitespace-pre-line">
                  {announcement.content}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                For urgent matters or inquiries, please contact us directly at{' '}
                <span className="font-semibold text-primary">manumbadaudi@gmail.com</span> or{' '}
                <span className="font-semibold text-primary">+255752837561</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
