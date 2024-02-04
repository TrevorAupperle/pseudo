import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  return <p>User: {router.query.id}</p>;
  
}
