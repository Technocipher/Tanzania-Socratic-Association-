
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Megaphone } from 'lucide-react';

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "🗓️ TANGAZO KWA WAALIMU WAGENI – UTARATIBU WA MITIHANI YA GEOGRAPHY",
      content: "Tunapenda kuwakaribisha rasmi waalimu wageni katika programu zetu za mitihani ya somo la Geography kwa Kidato cha Tano na Sita. Tafadhali fuatilia utaratibu ufuatao:\n\n✅ KIDATO CHA TANO:\n\nMitihani itaandaliwa kulingana na mada zitakazokuwa zimefundishwa kwa kipindi husika.\n\nGharama ya kila mfululizo (series) wa mtihani ni TSh 5,000 kwa mwezi utakapofanyika mtihani.\n\n✅ KIDATO CHA SITA:\n\nMitihani itahusisha mada zote za Paper 1 & 2.\n\nGharama ni TSh 10,000 kwa kila seti ya mitihani, ikijumuisha:\n\nMitihani yote (Paper 1 & 2)\n\nMarking guides\n\nUandaaji wa matokeo\n\nTaarifa ya tathmini na uchambuzi wa ufaulu (Analysis & Evaluation Report)\n\n🗓️ RATIBA YA SERIES (Kidato cha Sita):\n\nJumla ya Series 4 kwa Term hii, kuanzia Julai hadi Novemba.\n\nSeries No. 1 ilifanyika tarehe 29–30 Julai 2025, na kwa sasa zoezi la marking linaendelea.\n\nMatokeo ya Series 1 yatatolewa tarehe 11 Agosti 2025.\n\nSeries No. 2 itafanyika ndani ya mwezi huu wa Agosti.\n\nRatiba kamili ya series zijazo inapatikana kwenye kalenda yetu rasmi ya term (Socratic Almanac) – itatumwa inbox kwa walimu wote waliosajiliwa.\n\n🗓️ KIDATO CHA TANO:\n\nMitihani (series) zitaanza Septemba, baada ya tathmini ya mada zilizofundishwa kufanyika.\n\n---\n\nKwa taarifa zaidi au usaidizi, tafadhali wasiliana nasi kupitia njia zetu rasmi.\n\nAsanteni sana na Karibuni kwa Ushirikiano!",
      date: "2025-08-03",
      time: "10:00 AM",
      priority: "high",
      category: "Important Notice"
    },
    {
      id: 2,
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
