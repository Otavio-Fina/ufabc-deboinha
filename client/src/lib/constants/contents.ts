export interface Content {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const mockContents: Content[] = [
  {
    id: 'JavaScript',
    name: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web.',
    color: 'bg-blue-100'
  },
  {
    id: 'HTML',
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) é a linguagem padrão para criar páginas da web.',
    color: 'bg-orange-100'
  },
  {
    id: 'CSS',
    name: 'CSS',
    description: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.',
    color: 'bg-green-100'
  }
];