export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[460px] w-[460px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]" />
    </div>
  );
}
