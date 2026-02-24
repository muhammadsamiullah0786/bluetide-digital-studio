interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
      {description && (
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
