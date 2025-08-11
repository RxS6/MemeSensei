import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MemeExplanation } from "@shared/schema";

interface RecentMemesProps {
  memes: MemeExplanation[];
}

const languageLabels: Record<string, string> = {
  en: "🇺🇸 English",
  hi: "🇮🇳 Hindi",
  "hi-en": "🇮🇳 Hinglish",
  es: "🇪🇸 Spanish", 
  fr: "🇫🇷 French",
  de: "🇩🇪 German",
  it: "🇮🇹 Italian",
  pt: "🇧🇷 Portuguese",
  ru: "🇷🇺 Russian",
  ja: "🇯🇵 Japanese",
  ko: "🇰🇷 Korean",
  zh: "🇨🇳 Chinese",
  ar: "🇸🇦 Arabic"
};

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    return 'Less than an hour ago';
  }
}

export function RecentMemes({ memes }: RecentMemesProps) {
  if (!memes || memes.length === 0) {
    return (
      <section className="max-w-4xl mx-auto mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Recently Explained Memes
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Be the first to explain a meme!
          </p>
        </div>
        
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p className="text-slate-500 dark:text-slate-400">No recent memes yet</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto mt-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Recently Explained Memes
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          See what other users have been curious about
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <Card key={meme.id} className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow duration-200">
            {meme.memeUrl ? (
              <img 
                src={meme.memeUrl} 
                alt="Recent meme" 
                className="w-full h-32 object-cover"
                data-testid={`img-recent-meme-${meme.id}`}
              />
            ) : (
              <div className="w-full h-32 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-slate-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Uploaded</p>
                </div>
              </div>
            )}
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {meme.createdAt ? formatTimeAgo(new Date(meme.createdAt)) : 'Recently'}
                </span>
                <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                  {languageLabels[meme.language] || meme.language}
                </Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3" data-testid={`text-recent-explanation-${meme.id}`}>
                {meme.explanation.length > 100 
                  ? meme.explanation.substring(0, 100) + '...'
                  : meme.explanation
                }
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
