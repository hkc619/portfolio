"use client";
import { useEffect, useState } from "react";

export default function UseMounted({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // 或者回傳骨架/placeholder
  return <>{children}</>;
}
