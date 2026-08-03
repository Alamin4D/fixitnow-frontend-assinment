import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Logo() {
  
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Wrench size={20} />
      </div>
      <span className="text-xl font-bold">FixMate</span>
    </Link>
  );
}