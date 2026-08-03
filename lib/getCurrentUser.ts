import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CurrentUser extends JwtPayload {
  id: string;
  name: string;
  email: string;
  role: string;
}


export async function getCurrentUser(): Promise<CurrentUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    ) as CurrentUser;

    return decoded;
  } catch {
    return null;
  }
}