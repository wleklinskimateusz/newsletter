"use server";

import { redirect } from "next/navigation";

export async function sendMail(formData: FormData) {
  const email = formData.get("email");
  if (!email) {
    throw new Error("Email is required");
  }
  return redirect("/success?email=" + email);
}
