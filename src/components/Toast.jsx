export default function Toast({ message, type = "success" }) {
  const colors = {
    success: "bg-amber-900/80 text-amber-300",
    error: "bg-red-900/80 text-red-300"
  };

  return (
    <div className={`fixed bottom-6 right-6 px-6 py-3 rounded text-sm tracking-wide ${colors[type]} backdrop-blur-lg border border-white/10 z-50`}>
      {message}
    </div>
  );
}