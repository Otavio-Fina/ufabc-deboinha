'use client';

import { useState } from 'react';
import Header from '@/components/header';
import CategoryFilters from '@/components/category-filters';
import SubjectGrid from '@/components/subject-grid';
import { mockSubjects } from '@/lib/constants/subjects';

export default function HomePage() {
  const [filteredSubjects, setFilteredSubjects] = useState(mockSubjects);

  return (
    <>
      <Header />
      <CategoryFilters onFilterChange={setFilteredSubjects} />
      <SubjectGrid subjects={filteredSubjects} />
    </>
  );
}