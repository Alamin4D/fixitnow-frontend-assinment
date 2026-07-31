import { DeleteAccountDialog } from "../_components/delete-account-dialog";
import { ProfileAvatar } from "../_components/profile-avatar";
import ProfileForm from "../_components/profile-form";

import { ProfileInfoCard } from "../_components/profile-info-card";
// import ChangePasswordForm from "../_components/change-password-form";

export default function ProfilePage() {
  // TODO: Replace with real user data from your API/server action
  const user = {
    name: "Md Alamin Ahmed",
    email: "alamin@example.com",
    role: "customer",
    phone: "+8801712345678",
    address: "Dhaka, Bangladesh",
    image: "",
    joinedAt: new Date(),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 rounded-xl border bg-card p-6 md:flex-row">
        <ProfileAvatar
          name={user.name}
          image={user.image}
          className="h-24 w-24"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>

      {/* User Information */}
      <ProfileInfoCard
        name={user.name}
        email={user.email}
        role={user.role}
        phone={user.phone}
        address={user.address}
        joinedAt={user.joinedAt}
      />

      {/* Update Profile */}
      <ProfileForm />

      {/* Change Password */}
      {/* <ChangePasswordForm /> */}

      {/* Danger Zone */}
      <div className="rounded-xl border border-destructive/30 p-6">
        <h2 className="mb-2 text-lg font-semibold text-destructive">
          Danger Zone
        </h2>

        <p className="mb-4 text-sm text-muted-foreground">
          Permanently delete your account and all associated data.
        </p>

        <DeleteAccountDialog />
      </div>
    </div>
  );
}