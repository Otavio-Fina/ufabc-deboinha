import { mockSubjects } from '../constants/subjects';
import { Subject } from '@/types/subject';

export async function getSubjects(): Promise<Subject[]> {
  return new Promise(resolve => setTimeout(() => resolve(mockSubjects), 500));
}

export async function getSubjectById(id: string): Promise<Subject | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      const subject = mockSubjects.find(s => s.id === id);
      resolve(subject || null);
    }, 500);
  });
}