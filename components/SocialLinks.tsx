'use client';

import { Instagram, Linkedin, Calendar, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function SocialLinks() {
  const { toast } = useToast();

  const handleCalendarClick = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('init', 'quick-chat', {origin: 'https://cal.com'});
      window.Cal.ns['quick-chat']('inline', {
        elementOrSelector: '#my-cal-inline',
        config: {
          layout: 'month_view',
          theme: 'dark',
          styles: {
            branding: {
              brandColor: "#3B82F6"
            }
          }
        },
        calLink: 'goutham-n-w41bgf/quick-chat',
      });

      // Show the calendar container
      const calendarContainer = document.getElementById("my-cal-inline");
      if (calendarContainer) {
        calendarContainer.style.display = "block";
        calendarContainer.classList.add("backdrop-blur-sm", "bg-black/50");
      }

      toast({
        title: "Opening Calendar",
        description: "Please select a convenient time for our meeting.",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a
          href="https://www.instagram.com/vertica_ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-purple-500/30"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/vertica-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-blue-500/30"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <button
          onClick={handleCalendarClick}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-green-500/30"
        >
          <Calendar className="w-6 h-6" />
        </button>
      </div>
      <div id="my-cal-inline" className="fixed inset-0 z-50 hidden">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl p-6">
            <div className="relative">
              <button
                onClick={() => {
                  const container = document.getElementById("my-cal-inline");
                  if (container) container.style.display = "none";
                }}
                className="absolute right-2 top-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 