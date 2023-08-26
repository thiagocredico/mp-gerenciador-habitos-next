"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function deleteHabit(habit: string) {
  await kv.hdel("habits", habit);

  revalidatePath("/");
}
