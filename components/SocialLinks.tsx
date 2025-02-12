'use client';

import { Instagram, Linkedin, Calendar } from 'lucide-react';

export default function SocialLinks() {
  const handleCalendarClick = () => {
    Cal('init', 'quick-chat', {origin: 'https://cal.com'});
    Cal.ns['quick-chat']('inline', {
      elementOrSelector: '#my-cal-inline',
      config: {layout: 'month_view'},
      calLink: 'goutham-n-w41bgf/quick-chat',
    });
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
          href="https://www.linkedin.com/in/goutham-choudary-322190264/"
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
      <div id="my-cal-inline" className="fixed inset-0 z-40 hidden" />
    </>
  );
} 