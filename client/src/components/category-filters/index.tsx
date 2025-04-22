'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { courses } from '@/lib/constants/courses';
import { mockSubjects } from '@/lib/constants/subjects';

export default function CategoryFilters({ onFilterChange }: { 
  onFilterChange: (filteredSubjects: typeof mockSubjects) => void 
}) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const filters = [
    { id: 'all', label: 'Todos' },
    ...courses.map(course => ({
      id: course.id,
      label: course.label
    }))
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? mockSubjects 
      : mockSubjects.filter(subject => 
          subject.courses.includes(activeFilter as typeof mockSubjects[number]['courses'][number])
        );
    onFilterChange(filtered);
  }, [activeFilter, onFilterChange]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const buttonBg = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-200';

  return (
    <div className={`${bgColor} p-4 shadow-inner transition-colors duration-300`}>
      <div className="container mx-auto">
        <h2 className={`text-lg font-semibold mb-3 ${textColor}`}>Filtrar por:</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition ${activeFilter === filter.id 
                ? 'bg-emerald-600 text-white' 
                : `${buttonBg} ${textColor} ${hoverBg} ${borderColor} border`}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}