
import Icon from './Icon';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-accent cursor-pointer">
      <div className="mb-4 inline-flex p-3 bg-red-50 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
        <Icon name={icon} size={24} className="group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-6">{description}</p>
    </div>
  );
}
