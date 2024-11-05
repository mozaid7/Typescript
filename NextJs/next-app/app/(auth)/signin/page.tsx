import { SigninComponent } from "@/components/Signin";

export default function Signin() {
  return <div>
    <SigninComponent />
  </div>
}

// body - const body = await req.json();
// authorization header - req.headers.get("authorization");
// query params - req.nextUrl.searchParams.get("name");