import { Check } from "@/components/Check";
import { Link } from "@/components/Link";

export default function Success({
  searchParams: { email },
}: {
  searchParams: { email?: string };
}) {
  if (!email) {
    throw new Error("The form hasn't been filled required");
  }
  return (
    <main className="flex h-screen flex-col justify-between max-lg:px-6 max-lg:pb-10 max-lg:pt-[149px] lg:h-[520px] lg:w-[504px] lg:p-16">
      <div className="flex flex-col gap-10">
        <Check width={64} height={64} />
        <div className="flex flex-col gap-6">
          <h1 className="leading-full text-xl font-bold lg:text-2xl">
            Thanks for subscribing!
          </h1>
          <p className=" leading-6">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>
      </div>
      <Link href="/" className="w-full">
        Dismiss message
      </Link>
    </main>
  );
}
