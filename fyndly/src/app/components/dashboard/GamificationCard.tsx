import React from 'react';
import { FireIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function GamificationCard() {
  const achievements = {
    streak: 5,
    weeklyGoal: 80,
    totalPosts: 156,
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-sm p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Your Achievements</h2>
        <TrophyIcon className="w-6 h-6" />
      </div>

      <div className="space-y-4">
        {/* Streak Counter */}
        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
          <div className="bg-white/20 rounded-full p-2">
            <FireIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="font-medium">🔥 {achievements.streak} Day Streak!</div>
            <div className="text-sm text-white/80">Keep up the momentum</div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
          <div className="bg-white/20 rounded-full p-2">
            <SparklesIcon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">Weekly Goal</span>
              <span className="text-sm">{achievements.weeklyGoal}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${achievements.weeklyGoal}%` }}
              />
            </div>
          </div>
        </div>

        {/* Milestone */}
        <div className="text-center bg-white/10 rounded-lg p-3">
          <div className="font-medium mb-1">🎉 New Milestone!</div>
          <div className="text-2xl font-bold mb-1">{achievements.totalPosts}</div>
          <div className="text-sm text-white/80">Total Posts Published</div>
        </div>
      </div>
    </div>
  );
} 