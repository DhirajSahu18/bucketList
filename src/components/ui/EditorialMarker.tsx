interface EditorialMarkerProps {
  number: string;
  label: string;
  className?: string;
}

export function EditorialMarker({ number, label, className = "" }: EditorialMarkerProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-3.5 ${className}`}>
      <span className="w-1.5 h-4 bg-[#FACC15] rounded-xs inline-block shrink-0" />
      <span className="font-sans text-xs uppercase tracking-widest text-[#8c4a2f] font-extrabold">
        {number} &mdash; {label}
      </span>
    </div>
  );
}
