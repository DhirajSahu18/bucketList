interface EditorialMarkerProps {
  number: string;
  label: string;
  className?: string;
}

export function EditorialMarker({ number, label, className = "" }: EditorialMarkerProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-3.5 ${className}`}>
      <span className="w-1 h-4 bg-[#FACC15] rounded-full inline-block" />
      <span className="font-mono text-xs uppercase tracking-widest text-[#8c4a2f] font-semibold">
        {number} &mdash; {label}
      </span>
    </div>
  );
}
