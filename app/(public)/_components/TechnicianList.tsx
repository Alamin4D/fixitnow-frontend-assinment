import TechnicianCard from "@/components/home/TechnicianCard";



export default function TechnicianList({
  technicians,
}: {
  technicians: any[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technicians.map((technician) => (
        <TechnicianCard
          key={technician.id}
          technician={technician}
        />
      ))}
    </div>
  );
}