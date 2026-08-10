import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  BadgeDollarSign,
  Clock3,
  MapPin,
  Star,
  User,
} from "lucide-react";

export default function ServiceDetails({
  service,
}: {
  service: any;
}) {
  return (
    <Card className="overflow-hidden">
      {/* Category Image */}
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        {service.category.image ? (
          <Image
            src={service.category.image}
            alt={service.category.name}
            fill
            unoptimized
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No category image available
          </div>
        )}
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">{service.title}</h1>

          <p className="mt-2 text-muted-foreground">
            {service.category.name}
          </p>
        </div>

        {/* Description */}
        <p className="mb-8 leading-7 text-muted-foreground">
          {service.description}
        </p>

        {/* Information */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Service Information */}
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
              <span className="font-medium">Category:</span>
              <span>{service.category.name}</span>
            </div>
          </Card>

          {/* Technician */}
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
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

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

        {/* Booking */}
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={`/services/${service.id}/booking`}>
              Book This Service
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}