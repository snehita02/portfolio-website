import { EducationEntry, Certification } from "@/types";

export const education: EducationEntry[] = [
  {
    institution: "Dayananda Sagar College of Engineering",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    period: "2017 – 2021",
    location: "Bengaluru, India",
    highlights: [
      "Graduated with a focus on software systems, algorithms, and data structures.",
      "Completed final-year project on object detection for accessibility applications (Eye Hear).",
      "Coursework in Machine Learning, Database Management, Operating Systems, and Computer Networks.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2022",
  },
  {
    name: "LangChain & Vector Databases in Production",
    issuer: "Activeloop",
    year: "2023",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM / Coursera",
    year: "2021",
  },
];
