import Image from 'next/image';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Welcome to Stella's First Next.js + Tailwind Page!
      </h1>
      
      <p className="text-lg text-black-700 mb-6">
        First CodeBox App Project Test
      </p>
      <p className="text-lg text-pink-700 mb-6">
        A fun fact about me is that my first language was Portuguese
      </p>

      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Hire Me!
      </button>

      <Image src="/next.svg" alt="Next.js Logo" className="h-16 mt-6" />
    </main>
  );
}
