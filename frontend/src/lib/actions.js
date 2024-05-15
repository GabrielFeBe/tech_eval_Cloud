'use server'
import { revalidatePath } from "next/cache"

export async function revalidateAll() {
  revalidatePath('/')
}

export async function revalidatePathClient(path) {
  revalidatePath(path)
}