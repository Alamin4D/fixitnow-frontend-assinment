import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Star } from "lucide-react";

export default function TechnicianProfile({
  technician,
}: {
  technician: any;
}) {

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <Card className="p-6 text-center">
        <Avatar className="mx-auto h-28 w-28">
          <AvatarImage src={technician.profilePicture} />
          <AvatarFallback>
            {technician.user.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-2xl font-bold">
          {technician.user.name}
        </h2>

        <Badge className="mt-2">
          {technician.experience} Years Experience
        </Badge>

        <div className="mt-6 space-y-3 text-left">
          <p className="flex items-center gap-2">
            <MapPin size={18} />
            {technician.location}
          </p>

          <p className="flex items-center gap-2">
            <Phone size={18} />
            {technician.user.phone}
          </p>

          <p className="flex items-center gap-2">
            <Mail size={18} />
            {technician.user.email}
          </p>

          <p className="flex items-center gap-2">
            <Star size={18} />
            {technician.rating} ({technician.totalReviews})
          </p>
        </div>
      </Card>

      <div className="space-y-6 lg:col-span-2">
        <Card className="p-6">
          <h3 className="mb-3 text-xl font-semibold">
            Biography
          </h3>
          <p className="text-muted-foreground">
            {technician.bio}
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="mb-3 text-xl font-semibold">
            Availability
          </h3>
          <div className="space-y-2">
            {technician.availability?.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-2"
              >
                <span>{item.dayOfWeek}</span>

                <span>
                  {item.isAvailable
                    ? `${item.startTime} - ${item.endTime}`
                    : "Unavailable"}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">
            Customer Reviews
          </h3>

          <div className="space-y-4">
            {technician.reviews?.map((review: any) => (
              <div
                key={review.id}
                className="rounded-lg border p-4"
              >
                <p className="font-medium">
                  {review.customer.name}
                </p>

                <p>⭐ {review.rating}</p>

                <p className="mt-2 text-muted-foreground">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}