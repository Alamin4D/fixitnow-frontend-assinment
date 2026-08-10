import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  
  return (
    <footer className="border-t bg-muted/40 px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              FixMate helps you book verified technicians for your daily home
              service needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/services">Services</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <span>AC Repair</span>
              <span>Electrical</span>
              <span>Plumbing</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Help Center</span>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FixMate. All rights reserved.
        </div>
    </footer>
  );
}