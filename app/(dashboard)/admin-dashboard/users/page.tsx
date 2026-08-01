import Container from "@/components/shared/Container";
import { getUsers } from "../_actions/getUsers";
import UsersEmpty from "../_components/UsersEmpty";
import UsersClient from "../_components/UsersClient";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const result = await getUsers();

  const users = result.data || [];

  return (
    <Container>
      <div className="space-y-6 py-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">
            User Management
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage platform users, ban or unban accounts.
          </p>
        </div>

        {!result.success ? (
          <UsersEmpty
            message={result.message || "Failed to load users."}
          />
        ) : users.length === 0 ? (
          <UsersEmpty />
        ) : (
          <UsersClient users={users} />
        )}
      </div>
    </Container>
  );
}