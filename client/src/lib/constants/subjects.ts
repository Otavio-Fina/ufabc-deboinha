import { CourseId } from './courses';

export interface Subject {
  id: string;
  name: string;
  description: string;
  courses: CourseId[];
  quadri: number;
  color: string;
}

export const mockSubjects: Subject[] = [
  {
    id: 'BIS0003-15',
    name: 'Bases Matemáticas',
    description: 'Introdução à limites e outros aspectos de cálculo',
    courses: ['bct'],
    quadri: 1,
    color: 'red-100'
  },
  {
    id: 'BCS0001-15',
    name: 'Base Experimental das Ciências Modernas',
    description: 'Introdução à experimentação científica e suas aplicações',
    courses: ['bct'],
    quadri: 1,
    color: 'green-200'
  },
  {
    id: 'BIK0102-15',
    name: 'Estrutura da Matéria',
    description: 'Estudo da estrutura atômica e molecular da matéria',
    courses: ['bct'],
    quadri: 1,
    color: 'blue-100'
  },
  {
    id: 'BIL0304-15',
    name: 'Evolução e Diversificação da Vida na Terra',
    description: 'Estudo da evolução das espécies e sua diversidade',
    courses: ['bct'],
    quadri: 1,
    color: 'green-100'
  },
  {
    id: 'BIS0005-15',
    name: 'Bases Computacionais da Ciência',
    description: 'Introdução à programação e algoritmos',
    courses: ['bct'],
    quadri: 1,
    color: 'yellow-100'
  },
  {
    id: 'BCM0504-15',
    name: 'Natureza da Informação',
    description: 'Introdução à teoria da informação e suas aplicações',
    courses: ['bct'],
    quadri: 2,
    color: 'purple-100'
  },
  {
    id: 'BCJ0204-15',
    name: 'Fenômenos Mecânicos',
    description:
      'Estudo dos princípios da mecânica clássica e suas aplicações',
    courses: ['bct'],
    quadri: 2,
    color: 'orange-100'
  },
  {
    id: 'BCN0402-15',
    name: 'Funções de Uma Variável',
    description:
      'Introdução ao cálculo diferencial e integral de funções de uma variável',
    courses: ['bct'],
    quadri: 2,
    color: 'gray-100'
  },
  {
    id: 'BCN0404-15',
    name: 'Geometria Analítica',
    description:
      'Estudo da geometria analítica e suas aplicações em diversas áreas',
    courses: ['bct'],
    quadri: 2,
    color: 'orange-100'
  },
  {
    id: 'BCL0306-15',
    name: 'Biodiversidade: Interações entre Organismos e Ambiente',
    description:
      'Estudo das interações entre organismos e seu ambiente',
    courses: ['bct'],
    quadri: 2,
    color: 'green-100'
  },
  {
    id: 'BCM0505-22',
    name: 'Processamento da Informação',
    description:
      'Estudo dos processos de coleta, armazenamento e análise de dados',
    courses: ['bct'],
    quadri: 3,
    color: 'orange-300'
  },
  {
    id: 'BCJ0205-15',
    name: 'Fenômenos Térmicos',
    description:
      'Estudo dos princípios da termodinâmica e suas aplicações',
    courses: ['bct'],
    quadri: 3,
    color: 'red-200'
  },
  {
    id: 'BCN0407-15',
    name: 'Funções de Várias Variáveis',
    description:
      'Introdução ao cálculo diferencial e integral de funções de várias variáveis',
    courses: ['bct'],
    quadri: 3,
    color: 'indigo-200'
  },
  {
    id: 'BCL0307-15',
    name: 'Transformações Químicas',
    description:
      'Estudo das reações químicas e suas aplicações',
    courses: ['bct'],
    quadri: 3,
    color: 'purple-300'
  },
  {
    id: 'BCM0506-15',
    name: 'Comunicação e Redes',
    description:
      'Estudo dos princípios de comunicação e redes de computadores',
    courses: ['bct'],
    quadri: 4,
    color: 'yellow-100'
  },
  {
    id: 'BCJ0203-15',
    name: 'Fenômenos Eletromagnéticos',
    description:
      'Estudo dos princípios do eletromagnetismo e suas aplicações',
    courses: ['bct'],
    quadri: 4,
    color: 'blue-300'
  },
  {
    id: 'BCN0405-15',
    name: 'Introdução às Equações Diferenciais Ordinárias',
    description:
      'Introdução ao estudo de equações diferenciais ordinárias e suas aplicações',
    courses: ['bct'],
    quadri: 4,
    color: 'orange-300'
  },
  {
    id: 'BIN0406-15',
    name: 'Introdução à Probabilidade e à Estatística',
    description:
      'Estudo dos princípios de probabilidade e estatística',
    courses: ['bct'],
    quadri: 4,
    color: 'red-300'
  },
  {
    id: 'BCL0308-15',
    name: 'Bioquímica: Estrutura, Propriedade e Função de Biomoléculas',
    description:
      'Estudo da estrutura e função de biomoléculas',
    courses: ['bct'],
    quadri: 5,
    color: 'emerald-300'
  },
  {
    id: 'BCK0103-15',
    name: 'Física Quântica',
    description:
      'Estudo dos princípios da mecânica quântica e suas aplicações',
    courses: ['bct'],
    quadri: 5,
    color: 'orange-300'
  },
  {
    id: 'placeholder21',
    name: 'Aspectos Éticos e Sociais no Brasil Contemporâneo',
    description:
      'Estudo dos aspectos éticos e sociais na sociedade brasileira',
    courses: ['bch', 'lch'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder22',
    name: 'Ensinos em História da Arte',
    description:
      'Estudo dos principais movimentos artísticos e suas influências',
    courses: ['bch'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder23',
    name: 'Ensinos em Filosofia e História da Ciência',
    description:
      'Estudo dos principais conceitos e teorias da filosofia e história da ciência',
    courses: ['lcne'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder24',
    name: 'Biotecnologia Quantitativa',
    description:
      'Estudo dos princípios quantitativos aplicados à biotecnologia',
    courses: ['biotec', 'bct_bio'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder25',
    name: 'Introdução à Ciência da Computação',
    description:
      'Estudo dos princípios básicos da ciência da computação',
    courses: ['comp', 'dados'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder26',
    name: 'Introdução à Ciência de Dados',
    description:
      'Estudo dos princípios básicos da ciência de dados',
    courses: ['comp', 'dados'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder27',
    name: 'Introdução à Filosofia',
    description:
      'Estudo dos principais conceitos e teorias da filosofia',
    courses: ['bch_filo', 'lch_filo'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder28',
    name: 'Introdução à História',
    description:
      'Estudo dos principais eventos históricos e suas influências',
    courses: ['hist'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder29',
    name: 'Introdução à Física Experimental',
    description:
      'Estudo dos princípios experimentais aplicados à física',
    courses: ['bct_fis', 'lcne_fis'],
    quadri: 1,
    color: 'white'
  },
  {
    id: 'placeholder30',
    name: 'Introdução à Matemática Experimental',
    description:
      'Estudo dos princípios experimentais aplicados à matemática',
    courses: ['bct_mat', 'lcne_mat'],
    quadri: 1,
    color: 'white'
  },
];