export type Course = {
  id: string;
  user_id: string;
  code: string;
  name: string;
  target_hours: number;
  created_at: string;
};

export type Schedule = {
  id: string;
  user_id: string;
  course_id: string;
  day_of_week: number;
  start_time: string;      // 'HH:MM:SS'
  duration_hours: number;
  created_at: string;
};

export type AttendanceLog = {
  id: string;
  user_id: string;
  course_id: string;
  date: string;            // 'YYYY-MM-DD'
  status: 'Present' | 'Absent';
  duration_at_time: number;
  is_proxy: boolean;
  remarks: string;
  created_at: string;
};
