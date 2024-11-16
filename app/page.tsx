import { Button } from "@/components/ui/button";
import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import PassKeyModal from "@/components/PassKeyModal";

export default function Home({ searchParams }: { searchParams: any }) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* PassKeyModal for Admin */}
      {isAdmin && <PassKeyModal />}

      {/* Main Section with Form and Image */}
      <section className="container flex flex-col items-center justify-center px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-lg text-center md:text-left">
          {/* Logo Image */}
          <Image
            src="/public/assets/icons/Ipms-logo.svg"
            height={80}
            width={80}
            alt="IPMS Logo"
            className="mx-auto mb-6 md:mx-0"
          />
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4">Welcome to IPMS</h1>
          <p className="text-lg text-gray-300 mb-8">
            Transforming patient care with efficient management and seamless experiences.
          </p>
          
          {/* Patient Form */}
          <PatientForm />

          <div className="text-sm mt-6 flex justify-between">
            <p className="text-gray-500">© 2024 IPMSRW</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin Login
            </Link>
          </div>
        </div>

        {/* Image on larger screens */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/public/assets/images/onboarding-img.png"
            alt="Healthcare Hero Image"
            height={800}
            width={800}
            className="object-cover"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-300">
            We aim to empower healthcare professionals with the tools to manage patient care efficiently, improve workflow, and ensure better outcomes through our integrated system.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Efficient Patient Management</h3>
              <p className="text-gray-300">
                Manage patient records, appointments, and histories all in one platform, reducing the complexity of healthcare management.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Real-time Data Updates</h3>
              <p className="text-gray-300">
                Stay updated with real-time patient status and medical records, making healthcare management more responsive.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">User-friendly Interface</h3>
              <p className="text-gray-300">
                Simple, intuitive interface that makes it easy for healthcare professionals to adopt and integrate into their daily workflows.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Data Security & Privacy</h3>
              <p className="text-gray-300">
                We prioritize patient confidentiality and comply with all necessary security standards to ensure that all data is protected.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Customizable Workflows</h3>
              <p className="text-gray-300">
                Tailor the platform to your organization's needs with flexible and customizable workflows.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-4">24/7 Customer Support</h3>
              <p className="text-gray-300">
                Our support team is available at all hours to help resolve any issues, ensuring your operations run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-6">
        <p className="text-sm text-gray-500">© 2024 IPMSRW. All rights reserved.</p>
      </footer>
    </div>
  );
};

