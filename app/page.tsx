"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-2">Cid Andre Bactol</h1>
        <p className="text-xl text-gray-600">Architect</p>
        <p className="mt-4 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <div className="mt-6 flex justify-center">
          <a href="/cid-andre-bactol-resume.pdf" download>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <Card className="text-left">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">
              The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Link
              href="https://www.chaos.com/enscape/free-sample-projects"
              className="text-blue-600 underline"
              target="_blank"
            >
              View Project
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">
          <Link
            href="https://www.linkedin.com/in/cid-andre-bactol-uap-1a25ab138/?originalSubdomain=ph"
            className="text-blue-600 underline"
            target="_blank"
          >
            LinkedIn Profile
          </Link>
        </p>
      </section>
    </main>
  );
}
