"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./Button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} className="w-full" type="submit">
      Subscribe to monthly newsletter
    </Button>
  );
}
