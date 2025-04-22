import { AcademicCapIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AcademicCapIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">UFABC Deboinha</h1>
        </div>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Pesquisar matérias..."
            className="w-full py-2 px-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
        </div>
        <button className="bg-white text-emerald-700 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition">
          Entrar
        </button>
      </div>
    </header>
  );
}