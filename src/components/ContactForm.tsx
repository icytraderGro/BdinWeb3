import React from 'react';

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-emerald-100 mb-2">
          Project Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          required
          placeholder="https://your-project.com"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="github" className="block text-sm font-medium text-emerald-100 mb-2">
          Github Link
        </label>
        <input
          type="url"
          id="github"
          name="github"
          required
          placeholder="https://github.com/username/repo"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-emerald-100 mb-2">
          What is your budget?
        </label>
        <input
          type="text"
          id="budget"
          name="budget"
          required
          placeholder="Enter your budget"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="telegram" className="block text-sm font-medium text-emerald-100 mb-2">
          Telegram Handle
        </label>
        <input
          type="text"
          id="telegram"
          name="telegram"
          required
          placeholder="@username"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-emerald-100 mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Tell us more about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-4 px-6 rounded-xl hover:bg-emerald-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
      >
        Submit
      </button>
    </form>
  );
}