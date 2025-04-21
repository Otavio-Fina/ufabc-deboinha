//ta desatualizado e eu nem usei ksks
interface Subject {
    id: string;
    name: string;
    description: string;
    courses: string;
    quadri: number;
    color: string;
  }
  
  interface Topic {
    id: number;
    title: string;
    resources: Resource[];
    dependencies: number[];
    unlocked: boolean;
  }
  
  interface Resource {
    type: 'video' | 'book' | 'exercise';
    title: string;
    url: string;
  }

  export type Subject = {
    id: string;
    name: string;
  };