import { Button } from "@/components/ui/button";
import { PatientForm }from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({ params: { userId }}: SearchParamProps) {
  const patient = await getPatient(userId);
  
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image 
          src="/public/assets/icons/Ipms-logo.svg"
          height={100}
          width={100}
          alt="appointment"
          className="mb-12"         
          />

         <AppointmentForm 
           type="create"
           userId={userId}
           patientId={patient.$id}
         />

          <p className="copyright mt-10 py-12">
             © 2024 IPMSRW
          </p> 
        </div>
      </section>

      <Image 
      src="/public/assets/images/appointment-img.png"
      height={1000}
      width={1000}
      alt="appointment"
      className="side-img max-w-[390px] bg-bottom"
       />
    </div>
  )
}