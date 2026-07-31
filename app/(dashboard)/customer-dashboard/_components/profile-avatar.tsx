"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileAvatarProps {
  name?: string;
  image?: string | null;
  className?: string;
}

export function ProfileAvatar({
  name = "User",
  image,
  className,
}: ProfileAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Avatar className={className ?? "h-24 w-24"}>
      <AvatarImage src={image ?? ""} alt={name} />
      <AvatarFallback className="text-lg font-semibold">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}