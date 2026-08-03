import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}