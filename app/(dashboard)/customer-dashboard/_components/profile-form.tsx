"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ProfileFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label>Name</Label>
        <Input
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label>Email</Label>
        <Input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label>Phone</Label>
        <Input {...register("phone")} />
      </div>

      <div>
        <Label>Address</Label>
        <Input {...register("address")} />
      </div>

      <div>
        <Label>Bio</Label>
        <Textarea {...register("bio")} />
      </div>

      <Button type="submit">Save Changes</Button>
    </form>
  );
}