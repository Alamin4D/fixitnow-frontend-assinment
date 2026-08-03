import Link from "next/link";
import {
  Clock3,
  MapPin,
  Star,
  User,
  Wrench,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: any;
}


export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        {/* Category */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Wrench className="h-8 w-8" />
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-semibold">
          {service.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {service.description}
        </p>

        {/* Technician Info */}
        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span>{service.technician?.user?.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{service.technician?.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-primary" />
            <span>{service.duration} mins</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{service.technician?.rating ?? "N/A"}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-xs text-muted-foreground">
              Starting From
            </p>

            <p className="text-2xl font-bold text-primary">
              ${service.price}
            </p>
          </div>

          <Button asChild>
            <Link href={`/services/${service.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}