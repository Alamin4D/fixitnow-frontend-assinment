import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Briefcase,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

export default function TechnicianCard({
  technician,
}: {
  technician: any;
}) {
  return (
    <Card className="p-6 transition hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={technician.profilePicture} />

          <AvatarFallback>
            {technician.user.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-xl font-semibold">
          {technician.user.name}
        </h2>

        <p className="text-sm text-muted-foreground">
          {technician.user.email}
        </p>

        <div className="mt-5 space-y-2 text-sm">
          <div className="flex items-center justify-center gap-2">
            <Briefcase size={16} />
            {technician.experience} Years Experience
          </div>

          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} />
            {technician.location}
          </div>

          <div className="flex items-center justify-center gap-2">
            <Phone size={16} />
            {technician.user.phone}
          </div>

          <div className="flex items-center justify-center gap-2">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            {technician.rating} ({technician.totalReviews})
          </div>
        </div>

        <Button
          asChild
          className="mt-6 w-full"
        >
          <Link href={`/technicians/${technician.id}`}>
            View Profile
          </Link>
        </Button>
      </div>
    </Card>
  );
}