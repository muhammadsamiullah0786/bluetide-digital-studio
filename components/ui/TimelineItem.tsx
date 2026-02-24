

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  location?: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  company,
  location,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pb-8 pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-accent to-accent/30"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute -left-2 top-1 w-5 h-5 bg-white border-3 border-accent rounded-full"></div>

      {/* Content */}
      <div className="bg-white rounded-lg p-4 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-lg text-dark">{title}</h4>
            <p className="text-accent font-semibold text-sm">{company}</p>
          </div>
          <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        {location && <p className="text-sm text-gray-500 mb-2">{location}</p>}
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
