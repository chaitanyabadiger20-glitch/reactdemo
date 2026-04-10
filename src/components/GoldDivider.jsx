export default function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D97706]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D97706]" />
    </div>
  );
}