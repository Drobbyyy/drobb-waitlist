"use client";

import { Navbar } from "@/components/navbar";
import FooterSection from "@/components/sections/footer-section";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function AccountDeletion() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navbar />

      <div className="container max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Account Deletion Request
          </h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
        </div>

        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-700">
              If you wish to delete your account and associated data, please
              send an email to{" "}
              <a
                href="mailto:poorv@drobb.in"
                className="text-primary font-semibold hover:underline"
              >
                poorv@drobb.in
              </a>{" "}
              with the following details:
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                Your registered email or username
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                Reason for deletion (optional)
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                Confirmation that you understand this action is irreversible
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                We will process your request within 15 business days and notify
                you once completed.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-auto w-full">
        <FooterSection />
      </div>
    </main>
  );
}
