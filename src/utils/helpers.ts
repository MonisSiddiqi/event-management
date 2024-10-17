import { BASE_URL } from "@/config";

export function getFileUrl(file: string) {
  if (import.meta.env.DEV) {
    return `${BASE_URL}/storage/${file}`;
  }
  return `/storage/${file}`;
}

export function getInitials(name: string) {
  if (!name) {
    return "";
  }
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i].charAt(0);
  }
  return initials.toUpperCase();
}

export function removeHashtags(description: string): string {
  return description.replace(/#[\w-]+/g, "").trim();
}
