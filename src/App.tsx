/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Zap, 
  Target, 
  Coffee, 
  BatteryLow, 
  AlertCircle,
  ChevronRight,
  Brain,
  CheckCircle2,
  Clock,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Mood, Task, ViewMode, TaskFocus } from './types';
import { INITIAL_TASKS, DAYS } from './constants';

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [viewMode, setViewMode] = useState<ViewMode>('Day');
  const [mood, setMood] = useState<Mood | null>(null);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStep, setOptimizationStep] = useState(0);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const optimizationSteps = [
    "Analyzing energy level...",
    "Scanning tasks and priorities...",
    "Optimizing workload...",
    "Finalizing schedule..."
  ];

  const handleStart = (mode: ViewMode) => {
    setViewMode(mode);
    setView('dashboard');
  };

  const handleMoodSelect = (selectedMood: Mood) => {
    setMood(selectedMood);
    setIsOptimizing(true);
    setOptimizationStep(0);
  };

  useEffect(() => {
    if (isOptimizing) {
      const interval = setInterval(() => {
        setOptimizationStep(prev => {
          if (prev >= optimizationSteps.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              applyOptimization();
              setIsOptimizing(false);
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isOptimizing]);

  const applyOptimization = () => {
    if (!mood) return;

    let optimizedTasks = [...tasks];
    let insight = "";

    if (viewMode === 'Day') {
      // Logic for Plan My Day
      switch (mood) {
        case 'Energized':
          optimizedTasks.sort((a, b) => (b.focus === 'High' ? 1 : -1));
          insight = "High energy detected. I've prioritized your most complex and high-focus tasks for the start of your day to maximize output.";
          break;
        case 'Focused':
          optimizedTasks.sort((a, b) => (a.focus === 'High' || a.focus === 'Medium' ? -1 : 1));
          insight = "Deep work state identified. Prioritizing analytical and active tasks that require sustained concentration.";
          break;
        case 'Normal':
          optimizedTasks.sort((a, b) => (a.isEssential ? -1 : 1));
          insight = "Balanced energy level. Maintaining a mix of essential priorities and standard operational tasks.";
          break;
        case 'Tired':
          optimizedTasks.sort((a, b) => (a.focus === 'Low' ? -1 : 1));
          insight = "Lower energy detected. Shifting focus to administrative and low-cognitive load tasks to prevent burnout.";
          break;
        case 'Drained':
          optimizedTasks = tasks.filter(t => t.isEssential);
          insight = "Critical energy depletion. I've stripped your schedule to essentials only. I recommend notifying your manager for task reassignment.";
          break;
      }
    } else {
      // Logic for Reorganize My Week
      // Simplified: Spread high focus tasks
      const highFocus = optimizedTasks.filter(t => t.focus === 'High');
      const others = optimizedTasks.filter(t => t.focus !== 'High');
      
      // Distribute high focus across the week
      highFocus.forEach((task, index) => {
        task.day = DAYS[index % DAYS.length];
      });
      
      insight = `Weekly workload balanced. High-focus tasks have been distributed across ${DAYS.length} days to ensure sustainable productivity.`;
    }

    setTasks(optimizedTasks);
    setAiInsight(insight);
  };

  const addTask = () => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Task',
      description: 'Task description here...',
      focus: 'Medium',
      duration: 30,
      day: viewMode === 'Day' ? 'Monday' : DAYS[0],
      isEssential: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleNotifyManager = () => {
    setShowNotification("Email draft prepared for task reassignment. Sent to Manager.");
    setTimeout(() => setShowNotification(null), 3000);
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tighter text-[#1A1A1A]">
              OPS <span className="text-blue-600">Zero Latency</span>
            </h1>
            <p className="text-xl text-gray-500 font-light">
              AI-powered operational productivity. Plan smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => handleStart('Day')}
              className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-blue-500 transition-all text-left space-y-4 overflow-hidden"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LayoutDashboard size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">Plan My Day</h3>
                <p className="text-gray-500 text-sm mt-1">Optimize today's tasks based on your current energy.</p>
              </div>
              <ArrowRight className="absolute bottom-8 right-8 text-gray-300 group-hover:text-blue-600 transition-colors" size={20} />
            </button>

            <button 
              onClick={() => handleStart('Week')}
              className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-blue-500 transition-all text-left space-y-4 overflow-hidden"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">Reorganize My Week</h3>
                <p className="text-gray-500 text-sm mt-1">Balance your weekly workload for maximum efficiency.</p>
              </div>
              <ArrowRight className="absolute bottom-8 right-8 text-gray-300 group-hover:text-purple-600 transition-colors" size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Header */}
      <header className="bg-white border-bottom border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">ZL</div>
          <h2 className="text-xl font-bold tracking-tight">OPS Zero Latency</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('Day')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'Day' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Day
            </button>
            <button 
              onClick={() => setViewMode('Week')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'Week' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Week
            </button>
          </div>
          <button onClick={() => setView('landing')} className="text-sm text-gray-500 hover:text-gray-800">Exit</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Mood & Insights */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Current State</h3>
            <p className="text-lg font-medium mb-4">How are you feeling right now?</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'Energized', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                { id: 'Focused', icon: Target, color: 'text-blue-500', bg: 'bg-blue-50' },
                { id: 'Normal', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
                { id: 'Tired', icon: Coffee, color: 'text-orange-500', bg: 'bg-orange-50' },
                { id: 'Drained', icon: BatteryLow, color: 'text-red-500', bg: 'bg-red-50' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMoodSelect(m.id as Mood)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${mood === m.id ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                >
                  <div className={`w-10 h-10 ${m.bg} ${m.color} rounded-xl flex items-center justify-center`}>
                    <m.icon size={20} />
                  </div>
                  <span className="font-medium">{m.id}</span>
                  {mood === m.id && <ChevronRight size={16} className="ml-auto text-blue-500" />}
                </button>
              ))}
            </div>
          </section>

          <AnimatePresence mode="wait">
            {aiInsight && (
              <motion.section 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-200 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 opacity-10">
                  <Brain size={120} />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain size={20} />
                  <h3 className="font-bold uppercase tracking-widest text-xs opacity-80">AI Insight</h3>
                </div>
                <p className="text-lg leading-relaxed font-light italic">
                  "{aiInsight}"
                </p>
                {mood === 'Drained' && (
                  <button 
                    onClick={handleNotifyManager}
                    className="mt-6 w-full py-3 bg-white text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
                  >
                    <Mail size={18} />
                    Notify Manager
                  </button>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Task Planner */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">
              {viewMode === 'Day' ? "Today's Schedule" : "Weekly Overview"}
            </h3>
            <button 
              onClick={addTask}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <Plus size={18} />
              Add Task
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {viewMode === 'Day' ? (
              <div className="divide-y divide-gray-50">
                {tasks.filter(t => !t.day || t.day === 'Monday').length > 0 ? (
                  tasks.filter(t => !t.day || t.day === 'Monday').map((task) => (
                    <TaskRow key={task.id} task={task} onRemove={removeTask} />
                  ))
                ) : (
                  <div className="p-12 text-center text-gray-400 italic">No tasks scheduled for today.</div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-5 divide-x divide-gray-100">
                {DAYS.map(day => (
                  <div key={day} className="flex flex-col">
                    <div className="p-4 bg-gray-50/50 border-b border-gray-100 text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{day.slice(0, 3)}</span>
                    </div>
                    <div className="p-2 space-y-2 min-h-[400px]">
                      {tasks.filter(t => t.day === day).map(task => (
                        <div key={task.id} className={`p-3 rounded-xl border text-xs space-y-1 ${task.focus === 'High' ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}>
                          <div className="font-bold truncate">{task.title}</div>
                          <div className="text-gray-500 flex items-center gap-1">
                            <Clock size={10} /> {task.duration}m
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Loading Overlay */}
      <AnimatePresence>
        {isOptimizing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 relative mb-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-blue-100 border-t-blue-600 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                <Brain size={32} />
              </div>
            </div>
            <motion.p 
              key={optimizationStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl font-medium text-gray-800"
            >
              {optimizationSteps[optimizationStep]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, bottom: -20 }}
            animate={{ opacity: 1, bottom: 40 }}
            exit={{ opacity: 0, bottom: -20 }}
            className="fixed left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle2 className="text-green-400" size={20} />
            <span className="font-medium">{showNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TaskRow({ task, onRemove }: { task: Task, onRemove: (id: string) => void }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group flex items-center gap-6 p-6 hover:bg-gray-50/50 transition-colors"
    >
      <div className={`w-2 h-12 rounded-full ${task.focus === 'High' ? 'bg-blue-500' : task.focus === 'Medium' ? 'bg-green-500' : 'bg-gray-300'}`} />
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-lg">{task.title}</h4>
          {task.isEssential && (
            <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-red-100">
              Essential
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm">{task.description}</p>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-right">
          <div className="text-sm font-bold flex items-center gap-1.5 justify-end">
            <Clock size={14} className="text-gray-400" />
            {task.duration} min
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">
            {task.focus} Focus
          </div>
        </div>
        <button 
          onClick={() => onRemove(task.id)}
          className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}
