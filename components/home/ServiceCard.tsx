import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Clock3,
  MapPin,
  Star,
  User,
} from "lucide-react";


export default function ServiceCard({
  service,
}: {
  service: any;
}) {
  return (
    <Card className="overflow-hidden p-5 transition hover:shadow-xl">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10 text-4xl">
        {service.category.icon}
      </div>

      <h2 className="text-xl font-semibold">
        {service.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-5 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <User size={16} />

          {service.technician.user.name}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />

          {service.technician.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={16} />

          {service.duration} mins
        </div>

        <div className="flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          {service.technician.rating}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold">
          ${service.price}
        </span>

        <Button asChild>
          <Link href={`/services/${service.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </Card>
  );
}