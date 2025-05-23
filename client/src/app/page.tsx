'use client';

import { useState } from 'react';
import Header from '@/components/header';
import CategoryFilters from '@/components/category-filters';
import SubjectGrid from '@/components/subject-grid';
import { mockSubjects } from '@/lib/constants/subjects';
import ContentGrid from '@/components/content-grid';
import { mockContents } from '@/lib/constants/contents';

export default function HomePage() {
  const [filteredSubjects, setFilteredSubjects] = useState(mockSubjects);
  const [filteredContents, setFilteredContents] = useState(mockContents);

  return (
    <>
      <Header />
      <CategoryFilters onFilterChange={setFilteredSubjects} />
      <SubjectGrid subjects={filteredSubjects} />
      <ContentGrid contents={filteredContents} />
    </>
  );
}