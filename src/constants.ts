export const INITIAL_TASKS: Task[] = [
  // MONDAY (7 tasks)
  { id: '1', title: 'Resolve P1 Incident', description: 'Critical outage fix', focus: 'High', duration: 90, day: 'Monday', isEssential: true },
  { id: '2', title: 'Client Strategy Call', description: 'Stakeholder discussion', focus: 'High', duration: 60, day: 'Monday', isEssential: true },
  { id: '3', title: 'Team Standup', description: 'Daily sync', focus: 'Medium', duration: 20, day: 'Monday', isEssential: true },
  { id: '4', title: 'Email Triage', description: 'Inbox cleanup', focus: 'Low', duration: 30, day: 'Monday', isEssential: false },
  { id: '5', title: 'Ticket Review', description: 'Review open tickets', focus: 'Medium', duration: 45, day: 'Monday', isEssential: false },
  { id: '6', title: 'Documentation Fix', description: 'Update SOP docs', focus: 'Low', duration: 40, day: 'Monday', isEssential: false },
  { id: '7', title: 'System Debugging', description: 'Investigate issue', focus: 'High', duration: 90, day: 'Monday', isEssential: true },

  // TUESDAY (6 tasks)
  { id: '8', title: 'Data Analysis Report', description: 'Analyze metrics', focus: 'High', duration: 120, day: 'Tuesday', isEssential: true },
  { id: '9', title: 'Vendor Follow-up', description: 'Check vendor updates', focus: 'Medium', duration: 30, day: 'Tuesday', isEssential: false },
  { id: '10', title: 'Ticket Logging', description: 'Log issues', focus: 'Low', duration: 45, day: 'Tuesday', isEssential: false },
  { id: '11', title: 'Internal Sync', description: 'Team discussion', focus: 'Medium', duration: 45, day: 'Tuesday', isEssential: true },
  { id: '12', title: 'Bug Fixing', description: 'Fix known bugs', focus: 'High', duration: 90, day: 'Tuesday', isEssential: true },
  { id: '13', title: 'Email Responses', description: 'Reply to emails', focus: 'Low', duration: 30, day: 'Tuesday', isEssential: false },

  // WEDNESDAY (8 tasks)
  { id: '14', title: 'Security Review', description: 'Check vulnerabilities', focus: 'High', duration: 60, day: 'Wednesday', isEssential: true },
  { id: '15', title: 'Documentation Update', description: 'Update wiki', focus: 'Low', duration: 45, day: 'Wednesday', isEssential: false },
  { id: '16', title: 'Project Meeting', description: 'Discuss progress', focus: 'Medium', duration: 45, day: 'Wednesday', isEssential: true },
  { id: '17', title: 'System Monitoring', description: 'Check performance', focus: 'Medium', duration: 40, day: 'Wednesday', isEssential: true },
  { id: '18', title: 'File Cleanup', description: 'Organize files', focus: 'Low', duration: 30, day: 'Wednesday', isEssential: false },
  { id: '19', title: 'Critical Fix Deployment', description: 'Deploy update', focus: 'High', duration: 90, day: 'Wednesday', isEssential: true },
  { id: '20', title: 'User Support Calls', description: 'Handle issues', focus: 'Medium', duration: 60, day: 'Wednesday', isEssential: true },
  { id: '21', title: 'Status Reporting', description: 'Update reports', focus: 'Low', duration: 30, day: 'Wednesday', isEssential: false },

  // THURSDAY (7 tasks)
  { id: '22', title: 'Bug Scrub', description: 'Review backlog', focus: 'Medium', duration: 60, day: 'Thursday', isEssential: false },
  { id: '23', title: 'Critical Ticket Resolution', description: 'Fix urgent issues', focus: 'High', duration: 90, day: 'Thursday', isEssential: true },
  { id: '24', title: 'Email Cleanup', description: 'Inbox management', focus: 'Low', duration: 40, day: 'Thursday', isEssential: false },
  { id: '25', title: 'Team Planning', description: 'Sprint planning', focus: 'High', duration: 90, day: 'Thursday', isEssential: true },
  { id: '26', title: 'Performance Review', description: 'System metrics review', focus: 'Medium', duration: 45, day: 'Thursday', isEssential: true },
  { id: '27', title: 'Documentation Review', description: 'Check docs', focus: 'Low', duration: 30, day: 'Thursday', isEssential: false },
  { id: '28', title: 'System Optimization', description: 'Improve performance', focus: 'High', duration: 60, day: 'Thursday', isEssential: true },

  // FRIDAY (7 tasks)
  { id: '29', title: 'Project Planning', description: 'Next sprint prep', focus: 'High', duration: 90, day: 'Friday', isEssential: true },
  { id: '30', title: 'Weekly Report', description: 'Prepare report', focus: 'Medium', duration: 60, day: 'Friday', isEssential: true },
  { id: '31', title: 'Status Updates', description: 'Update progress', focus: 'Low', duration: 30, day: 'Friday', isEssential: false },
  { id: '32', title: 'System Cleanup', description: 'Archive data', focus: 'Low', duration: 45, day: 'Friday', isEssential: false },
  { id: '33', title: 'Client Follow-up', description: 'Check deliverables', focus: 'Medium', duration: 40, day: 'Friday', isEssential: true },
  { id: '34', title: 'Incident Review', description: 'Analyze past issues', focus: 'High', duration: 60, day: 'Friday', isEssential: true },
  { id: '35', title: 'Knowledge Sharing', description: 'Team knowledge session', focus: 'Medium', duration: 45, day: 'Friday', isEssential: false },
];
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
