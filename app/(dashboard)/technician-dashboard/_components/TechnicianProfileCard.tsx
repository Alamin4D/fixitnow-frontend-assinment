"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Briefcase, DollarSign } from "lucide-react";

interface TechnicianProfile {
  user: {
    name: string;
    email: string;
    image?: string;
  };
  phone: string;
  address: string;
  bio: string;
  experience: number;
  hourlyRate: number;
  skills: string[];
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
          <AvatarImage src={profile.user.image} />
          <AvatarFallback>
            {profile?.user?.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="text-center">
          <CardTitle>{profile?.user?.name}</CardTitle>
          <p className="text-muted-foreground mt-1 text-sm">
            Professional Technician
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="text-muted-foreground h-4 w-4" />
            <span>{profile.user.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-4 w-4" />
            <span>{profile.experience} Years Experience</span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-medium">About</h3>
          <p className="text-muted-foreground text-sm">{profile.bio}</p>
        </div>

        <div>
          <h3 className="mb-2 font-medium">Skills</h3>
        </div>
      </CardContent>
    </Card>
  );
}