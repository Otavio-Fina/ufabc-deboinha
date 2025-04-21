export const courses = [
    { id: 'bct', label: 'BC&T' },
    { id: 'bch', label: 'BC&H' },
    { id: 'lch', label: 'LCH' },
    { id: 'lcne', label: 'LCNE' },
    { id: 'biotec', label: 'Biotecnologia' },
    { id: 'comp', label: 'Ciência da Computação' },
    { id: 'dados', label: 'Ciência de Dados' },
    { id: 'bct_bio', label: 'Ciências Biológicas (Bacharelado)' },
    { id: 'lcne_bio', label: 'Ciências Biológicas (Licenciatura)' },
    { id: 'bct_fis', label: 'Física (Bacharelado)' },
    { id: 'lcne_fis', label: 'Física (Licenciatura)' },
    { id: 'bct_mat', label: 'Matemática (Bacharelado)' },
    { id: 'lcne_mat', label: 'Matemática (Licenciatura)' },
    { id: 'bct_quim', label: 'Química (Bacharelado)' },
    { id: 'lcne_quim', label: 'Química (Licenciatura)' },
    { id: 'neuro', label: 'Neurociência' },
    { id: 'eng_amb', label: 'Engenharia Ambiental e Urbana' },
    { id: 'eng_energia', label: 'Engenharia de Energia' },
    { id: 'eng_info', label: 'Engenharia da Informação' },
    { id: 'eng_iar', label: 'Engenharia de IAR' },
    { id: 'eng_mat', label: 'Engenharia de Materiais' },
    { id: 'eng_aero', label: 'Engenharia Aerospacial' },
    { id: 'eng_biomed', label: 'Engenharia Biomédica' },
    { id: 'eng_gestao', label: 'Engenharia de Gestão' },
    { id: 'econo', label: 'Ciências Econômicas (BCE)' },
    { id: 'bch_filo', label: 'Filosofia (Bacharelado)' },
    { id: 'lch_filo', label: 'Filosofia (Licenciatura)' },
    { id: 'pt', label: 'Planejamento Territorial' },
    { id: 'pp', label: 'Políticas Públicas' },
    { id: 'ri', label: 'Relações Internacionais' },
    { id: 'hist', label: 'História' },
  ] as const;
  

  export type CourseId = typeof courses[number]['id'];

  export const getCourseName = (id: CourseId): string => {
    return courses.find(course => course.id === id)?.label || id;
  };