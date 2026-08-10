import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Clock3, MapPin, Star, User } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    category: {
      name: string;
      image?: string | null;
    };
    technician: {
      location: string;
      rating: number;
      user: {
        name: string;
      };
    };
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      {/* Category Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {service.category.image ? (
          <Image
            src={service.category.image}
            alt={service.category.name}
            unoptimized
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No image available
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-sm font-medium text-primary">
          {service.category.name}
        </p>

        {/* Service Title */}
        <h2 className="text-xl font-semibold">{service.title}</h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {service.description}
        </p>

        {/* Service Information */}
        <div className="mt-5 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{service.technician.user.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{service.technician.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{service.duration} mins</span>
          </div>

          <div className="flex items-center gap-2">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{service.technician.rating}</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-2xl font-bold">${service.price}</span>

          <Button asChild>
            <Link href={`/services/${service.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}