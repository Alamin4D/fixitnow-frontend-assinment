import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  BadgeDollarSign,
  Clock3,
  MapPin,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";

export default function ServiceDetails({
  service,
}: {
  service: any;
}) {
  return (
    <Card className="overflow-hidden p-8">
      <div className="mb-8 flex items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-primary/10 text-6xl">
          {service.category.icon}
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {service.title}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {service.category.name}
          </p>
        </div>
      </div>

      <p className="mb-8 leading-7 text-muted-foreground">
        {service.description}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4 p-6">
          <h2 className="text-xl font-semibold">
            Service Information
          </h2>

          <div className="flex items-center gap-2">
            <BadgeDollarSign size={18} />
            <span>${service.price}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            <span>{service.duration} minutes</span>
          </div>

          <div className="flex items-center gap-2">
            <span>{service.category.icon}</span>
            <span>{service.category.name}</span>
          </div>
        </Card>

        <Card className="space-y-4 p-6">
          <h2 className="text-xl font-semibold">
            Technician
          </h2>

          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{service.technician.user.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{service.technician.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={18} />
            <span>
              {service.technician.rating} (
              {service.technician.totalReviews} Reviews)
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            {service.technician.bio}
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <Link href={`/services/${service.id}/booking`}>
          <Button size="lg">
            Book This Service
          </Button>
        </Link>
      </div>
    </Card>
  );
}