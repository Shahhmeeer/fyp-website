import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return <div className="grid grid-cols-4 gap-4">
    {"abcdefghi".split('').map(i => (
      <SkeletonCard key={i} />
    ))}
  </div>;
}
