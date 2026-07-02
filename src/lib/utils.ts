import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prepend basePath for public-folder assets (logos, certs, etc.) */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}
