import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        Sign in as {session.user.email || session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
