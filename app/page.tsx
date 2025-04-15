import Image from "next/image";

export default function Home() {
  return (
    <div style={{backgroundColor: '#C5AB9F'}} className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">   
      <div style={{marginTop: '500px'}}><h1 style={{fontSize: '8rem'}}>NestFrame STUDIO</h1></div>
      <code style={{fontSize: '4rem'}} className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
           In progress...
            </code>
      <h2 style={{fontSize: '2rem', color: 'grey'}}>B + M</h2>


    </div>
  );
}
