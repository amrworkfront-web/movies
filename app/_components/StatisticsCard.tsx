type Props = {
    title: string;
    value: number;
    icon: React.ReactNode;
    isActive: boolean;
}
export default function StatisticsCard({ title, value, icon , isActive }: Props) {
  return (
  <div className={`bg-surface-low flex flex-col items-start p-6 rounded-xl space-y-4 ${isActive ? 'border-l-4 border-primary-container' : ''}`}>
        <div className={`bg-primary-container/16 p-4 rounded-lg ${isActive ? 'text-primary-container' : 'text-gray-200'}`}>
        
        {icon}
        </div>
        <h2   className='text-2xl text-white'>{value}</h2>
        <p>{title}</p></div>
  )
}
