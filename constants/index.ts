export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/public/assets/images/dr-green.png",
    name: "Jean Kagabo",
  },
  {
    image: "/public/assets/images/dr-cameron.png",
    name: "Diane Gashumba",
  },
  {
    image: "/public/assets/images/dr-livingston.png",
    name: " Paul Farmer",
  },
  {
    image: "/public/assets/images/dr-peter.png",
    name: "Aimable Mbituyumuremyi",
  },
  {
    image: "/public/assets/images/dr-powell.png",
    name: "Sabin Umunyana",
  },
  {
    image: "/public/assets/images/dr-remirez.png",
    name: "Theophile Dushime",
  },
  {
    image: "/public/assets/images/dr-lee.png",
    name: " Solange Hakiba",
  },
  {
    image:"/public/assets/images/dr-cruz.png",
    name: "Chantal Umuhoza",
  },
  {
    image: "/public/assets/images/dr-sharma.png",
    name: "Jean de Dieu Ngirabega",
  },
];

export const StatusIcon = {
  scheduled: "/public/assets/icons/check.svg",
  pending: "/public/assets/icons/pending.svg",
  cancelled: "/public/assets/icons/cancelled.svg",
};