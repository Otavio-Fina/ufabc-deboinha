import Link from 'next/link';
import { mockSubjects } from '@/lib/constants/subjects';
import { getCourseName } from '@/lib/constants/courses';
import { motion } from 'motion/react';

export default function SubjectGrid({ subjects }: { subjects: typeof mockSubjects }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Matérias Disponíveis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <Link 
            href={`/subject/${subject.id}`} 
            key={subject.id}
            className="block"
          >
            <motion.div className={"border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden h-60 flex flex-col hover:bg-white bg-" + subject.color + " hover:text-" + subject.color}
            initial={{ opacity: 0, y: -100  }} animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',

              type: 'tween',
              delay: 0.1 + (0.05 * (index + 1)),
            }}
            whileHover={{ scale: 1.05, transition: { delay: 0 } }}
            whileTap={{ scale: 0.95, transition: { delay: 0 } }}>
              <div className="p-6 flex flex-col gap-4 h-full">
                <h3 className={`text-xl font-bold text-${subject.color} mb-2`}>{subject.name}</h3>
                <div className="flex justify-between text-sm text-gray-600 mt-auto mb-2">
                <div className="flex flex-wrap gap-1">
                    {subject.courses.map(courseId => (
                      <span 
                        key={courseId}
                        className="px-2 py-1 bg-white bg-opacity-70 rounded-full text-xs "
                      >
                        {getCourseName(courseId)}
                      </span>
                    ))}
                  </div>
                  <span>{subject.quadri}º quadrimestre (ideal)</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-50 px-6 py-3 border-t border-gray-200 mt-auto">
                <span className={`text-indigo-600 font-medium `}>Ver roadmap →</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}