import Link from 'next/link';
import { mockContents } from '@/lib/constants/contents';
import { motion } from 'motion/react';

export default function ContentGrid({ contents }: { contents: typeof mockContents }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Matérias Disponíveis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contents.map((content, index) => (
          <Link 
            href={`/subject/${content.id}`} 
            key={content.id}
            className="block"
          >
            <motion.div className={content.color}
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
                <h3 className={`text-xl font-bold text-${content.color} mb-2`}>{content.name}</h3>
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