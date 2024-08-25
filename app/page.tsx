import CoverParticles from "@/components/cover-particles"

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <p>Introducción</p>
      </div>
    </main>
  );
}
