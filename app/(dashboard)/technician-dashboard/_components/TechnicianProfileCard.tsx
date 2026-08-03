"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Briefcase, Star } from "lucide-react";

interface TechnicianProfile {
  profilePicture: string;
  bio: string;
  experience: number;
  location: string;
  rating: number;
  totalReviews: number;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  services: {
    id: string;
    title: string;
  }[];
  availability: any[];
}

interface TechnicianProfileCardProps {
  profile: TechnicianProfile | null;
}

export default function TechnicianProfileCard({
  profile,
}: TechnicianProfileCardProps) {
  if (!profile) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          Profile not found.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={profile.profilePicture} />
          <AvatarFallback>
            {profile.user.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="text-center">
          <CardTitle>{profile.user.name}</CardTitle>
          <p className="text-muted-foreground mt-1 text-sm">
            Professional Technician
          </p>
        </div>
      </CardHeader>
      

      <CardContent className="space-y-5">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{profile.user.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{profile.user.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span>{profile.experience} Years Experience</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>
              {profile.rating} ({profile.totalReviews} Reviews)
            </span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-medium">About</h3>
          <p className="text-sm text-muted-foreground">{profile.bio}</p>
        </div>

        <div>
          <h3 className="mb-2 font-medium">Services</h3>

          <div className="flex flex-wrap gap-2">
            {profile.services.length > 0 ? (
              profile.services.map((service) => (
                <span
                  key={service.id}
                  className="rounded-full bg-muted px-3 py-1 text-xs"
                >
                  {service.title}
                </span>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">
                No services added.
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}