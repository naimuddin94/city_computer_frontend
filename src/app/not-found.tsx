"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-md w-full"
      >
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Page not found</p>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home size={16} />
              Go to Homepage
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            Can&lsquo;t find what you&lsquo;re looking for?
            <Link href="/contact" className="text-primary hover:underline ml-1">
              Contact support
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
