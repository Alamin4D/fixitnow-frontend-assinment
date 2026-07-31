"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";

interface ProfileInfoCardProps {
  name: string;
  email: string;
  role: string;
  phone?: string | null;
  address?: string | null;
  joinedAt?: string | Date;
}

export function ProfileInfoCard({
  name,
  email,
  role,
  phone,
  address,
  joinedAt,
}: ProfileInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-muted-foreground">
              Personal details
            </p>
          </div>

          <Badge variant="secondary" className="capitalize">
            {role}
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>{email}</span>
          </div>

          {phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>{phone}</span>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{address}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
            <span className="capitalize">{role}</span>
          </div>

          {joinedAt && (
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span>
                Joined{" "}
                {new Date(joinedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}