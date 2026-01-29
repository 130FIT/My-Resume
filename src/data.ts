import type { IData } from "./interface";

const email = "supakit_buadokmai@hotmail.com";
const phone = "0889905652";
export const data: IData = {
    fullName: {
        th: 'ศุภกิตติ์ บัวดอกไม้',
        en: 'Supakit Buadokmai'
    },
    email: email,
    phone: phone,
    infos: [
        {
            icon: "/src/assets/email.svg",
            alt: "email-icon",
            link: `mailto:${email}`,
            text: email,
        },
        {
            icon: "/src/assets/phone.svg",
            alt: "phone-icon",
            link: `tel:${phone}`,
            text: phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
        },
        {
            icon: "/src/assets/github.svg",
            alt: "github-icon",
            link: `https://github.com/130FIT`,
            text: "https://github.com/130FIT"
        }
    ],
    about: {
        th: "Software Developer เชี่ยวชาญ Full-Stack Development สำหรับแอปพลิเคชันธุรกรรมปริมาณมาก มีประสบการณ์ทั้งภาครัฐและสตาร์ทอัพ ใช้เทคโนโลยี Java Spring Boot, Angular, Docker, PostgreSQL และมีทักษะ DevOps, Data Engineering",
        // en: "Software Developer specializing in full-stack development for high-transaction applications. Experienced in government and startup projects using Java Spring Boot, Angular, Docker, PostgreSQL with DevOps and Data Engineering proficiency."
        en: "I am a Software Developer specializing in full-stack development for high-transaction applications. With robust expertise in technologies such as Java Spring Boot, Scala Play, Angular (TypeScript), Docker, and PostgreSQL, I have successfully delivered projects in both government and startup environments. My technical proficiency extends to data engineering and DevOps, where I manage data workflows using AWS S3 and Airflow, optimize build processes with Team City, and orchestrate Kubernetes clusters. I am committed to continuous learning and innovation, ensuring the delivery of scalable, high-quality software solutions."
    },
    experiences: [
        {
            title: {
                th: "Full-Stack Developer",
                en: "Full-Stack Developer"
            },
            company: "TP Consulting Co., Ltd. (Site MSIG Insurance (Thailand) Public Company Limited)",
            link: "https://tpcrecruit.com",
            startDate: "2025-05",
            details: [
                {
                    th: "Rewrote ระบบหลังบ้านจัดการ Email Job ปริมาณมากด้วย Microsoft Graph API และพัฒนาระบบทดแทน RPA ด้วย Selenium Spring Boot สำหรับเชื่อมต่อธนาคารและ OIC",
                    en: "Rewrote email management system using Microsoft Graph API and developed Robotic Process Automation (RPA) replacement system with Selenium Spring Boot for bank and Office of Insurance Commission (OIC) integration"
                },
                {
                    th: "Migrate ระบบ Financial จาก WebSphere สู่ Spring Boot และอัปเกรด database จาก AS400 เป็น SQL Server เพื่อแก้ปัญหาประสิทธิภาพ",
                    en: "Migrated financial system from WebSphere to Spring Boot and upgraded database from AS400 to SQL Server, resolving performance issues"
                }
            ],
            techStack: [
                "Spring Boot",
                "Angular.ts",
                "SQL Server",
                "DB2",
                "ElasticSearch",
                "Kafka"
            ],
            type: "professional"
        },
        {
            title: {
                th: "Full-Stack Developer",
                en: "Full-Stack Developer"
            },
            company: "BRAINERGY Co.,Ltd.",
            link: "https://brainergy.digital/",
            startDate: "2025-01",
            endDate: "2025-04",
            details: [
                {
                    th: "ความเชี่ยวชาญทางเทคนิค: แก้ไขปัญหาและพัฒนาโปรเจคด้วยเทคโนโลยี Java Spring Boot, Scala Play และ Angular (TypeScript) ในสภาพแวดล้อมที่มีความซับซ้อน",
                    en: "Technical Expertise: Resolve complex issues and develop projects using Java Spring Boot, Scala Play, and Angular in sophisticated environments"
                },
                {
                    th: "จัดการ Kubernetes และปรับปรุงกระบวนการ Build บน Team City เพื่อเพิ่มประสิทธิภาพและความเสถียรของระบบ",
                    en: "DevOps & Automation Proficiency: Manage Kubernetes clusters and optimize build processes on Team City to enhance system performance and reliability"
                },
                {
                    th: "Data Engineering และ SQL: จัดการข้อมูลจาก AWS S3 ผ่าน Airflow และเขียน SQL สำหรับ PostgreSQL, SQL Server, และ Oracle",
                    en: "Data Engineering & SQL: Handle data workflows from AWS S3 via Airflow and write SQL queries for PostgreSQL, SQL Server, and Oracle databases"
                }
            ],
            techStack: [
                "Spring Boot",
                "Angular.ts",
                "PostgreSQL",
                "Kubernetes",
                "AWS",
                "Python",
                "Kafka"
            ],
            type: "professional"
        },
        {
            title: {
                th: "Full-Stack Developer (นักศึกษาฝึกงาน)",
                en: "Full-Stack Developer (Intern)"
            },
            company: "BRAINERGY Co.,Ltd.",
            link: "https://brainergy.digital/",
            startDate: "2024-06",
            endDate: "2025-02",
            details: [
                {
                    th: "พัฒนาระบบ e-wallet core, Backoffice และ OpenAPI พร้อมระบบ PDF/A-3, PDF signing และ XML generation สำหรับ e-tax invoices",
                    en: "Developed e-wallet core system, back-office, OpenAPI, and e-tax invoice system with PDF/A-3 generation, signing, and XML processing"
                },
                {
                    th: "พัฒนาระบบจัดการราคาสินค้าและโปรโมชั่นสำหรับหน่วยงานภาครัฐ",
                    en: "Built product pricing and promotion management system for government agencies"
                }
            ],
            techStack: ["Spring Boot", "Angular.ts", ".Net Core", "Docker", "PostgreSQL", "Jira"],
            type: "early-career"
        },
        {
            title: {
                th: "BackEnd Developer (นักศึกษาฝึกงาน)",
                en: "BackEnd Developer (Intern)"
            },
            company: "BRAINERGY Co.,Ltd.",
            link: "https://brainergy.digital/",
            startDate: "2022-12",
            endDate: "2023-05",
            details: [
                {
                    th: "พัฒนา API สำหรับระบบ E-Tax Invoice และระบบบันทึกเวลาทำงานแบบเรียลไทม์พร้อมรายงานอัตโนมัติ",
                    en: "Developed E-Tax Invoice API for custom integration and built real-time timesheet system with automated reporting"
                }
            ],
            techStack: ["Django", "Angular.ts", "Docker", "PostgreSQL", "TeamCity", "ClickUp", "ArgoCD"],
            type: "early-career"
        },
        {
            title: {
                th: "Full-Stack Developer (Part-time)",
                en: "Full-Stack Developer (Part-time)"
            },
            company: "Est Serend Engineering Co.,Ltd.",
            link: "https://estserend.com/",
            startDate: "2021-12",
            endDate: "2022-04",
            details: [
                {
                    th: "พัฒนาเว็บไซต์และระบบจัดการใบรับรองภายในองค์กร",
                    en: "Developed company website and internal certificate management system"
                }
            ],
            techStack: ["Django", "React.js", "Vue.js", "Docker", "PostgreSQL", "Firebase", "Google Cloud"],
            type: "early-career"
        }
    ],
    projectAndRewards: [
        {
            title: {
                th: "InCIT 2024: Certificate of Recognition for Outstanding Quality and Ethics",
                en: "InCIT 2024: Certificate of Recognition for Outstanding Quality and Ethics"
            },
            link: "https://www.up.ac.th/NewsRead.aspx?itemID=33350",
            subtitle: {
                th: "The 8th International Conference on Information Technology",
                en: "The 8th International Conference on Information Technology"
            },
            details: {
                th: "ได้รับประกาศเกียรติคุณระดับนานาชาติสำหรับคุณภาพและจริยธรรมดีเด่นในสาขาเทคโนโลยีสารสนเทศ",
                en: "Recognized at international conference for outstanding quality and ethics in information technology"
            }
        },
        {
            title: {
                th: "1st Prize INNOVATION - Hackathon U League for All 2022",
                en: "1st Prize INNOVATION - Hackathon U League for All 2022"
            },
            link: "https://www.pim.ac.th/archives/22152",
            subtitle: {
                th: "All Caring - Physical Therapy Platform",
                en: "All Caring - Physical Therapy Platform"
            },
            details: {
                th: "รางวัลชนะเลิศหมวดนวัตกรรม แพลตฟอร์มกายภาพบำบัดสำหรับผู้ป่วยติดเตียง",
                en: "1st prize for innovative platform enabling personalized physical therapy for bedridden patients"
            }
        },
        {
            title: {
                th: "Special Award from Smart Gen Tourism Challenge 2023",
                en: "Special Award from Smart Gen Tourism Challenge 2023"
            },
            link: "https://bizbuzznewsonline.com/2023/08/09/%E0%B8%97%E0%B8%97%E0%B8%97-%E0%B8%A3%E0%B8%B8%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B9%81/",
            subtitle: {
                th: "Project: Lomwong Local Connect (Community Tourism Platform)",
                en: "Project: Lomwong Local Connect (Community Tourism Platform)"
            },
            details: {
                th: "ได้รับรางวัลพิเศษจาก Smart Gen Tourism Challenge 2023 สำหรับการพัฒนา \"Lomwong Local Connect\" แพลตฟอร์มการท่องเที่ยวชุมชนที่มุ่งเน้นการเชื่อมโยงชุมชนกับนักท่องเที่ยว เพื่อส่งเสริมการท่องเที่ยวอย่างยั่งยืน",
                en: "Awarded the Special Award at the Smart Gen Tourism Challenge 2023 for developing \"Lomwong Local Connect,\" a community tourism platform aimed at connecting local communities with tourists to promote sustainable tourism."
            }
        },
        {
            title: {
                th: "Core System and Infrastructure Factory: machinery inspection and certification Company",
                en: "Core System and Infrastructure Factory: machinery inspection and certification Company"
            },
            link: "",
            subtitle: {
                th: "Off-Hours Technical Project",
                en: "Off-Hours Technical Project"
            },
            details: {
                th: "พัฒนาระบบแกนกลางสำหรับธุรกิจตรวจสอบและออกใบรับรองเครื่องจักรในโรงงาน รองรับการติดตามสถานะการตรวจสอบแบบเรียลไทม์ และการออกเอกสารรับรอง (Certification) โดยใช้ Java Spring Boot, PostgreSQL และ Flutter สำหรับ Mobile Application",
                en: "Developed a business core system for factory machinery inspection and certification, supporting real-time inspection status tracking and certification document generation using Java Spring Boot, PostgreSQL, and Flutter for the mobile application"
            }
        },
        {
            title: {
                th: "Facial Recognition Authentication (AWS Rekognition)",
                en: "Facial Recognition Authentication (AWS Rekognition)"
            },
            link: "",
            subtitle: {
                th: "Off-Hours Technical Project",
                en: "Off-Hours Technical Project"
            },
            details: {
                th: "พัฒนาระบบยืนยันตัวตนด้วยใบหน้า โดยใช้ AWS Rekognition เชื่อมต่อกับ Flutter Application",
                en: "Developed a facial-based authentication system using AWS Rekognition, integrated with a Flutter application"
            }
        },
        {
            title: {
                th: "Handwritten Signature Verification using Siamese Neural Network",
                en: "Handwritten Signature Verification using Siamese Neural Network"
            },
            link: "",
            subtitle: {
                th: "Off-Hours Technical Project",
                en: "Off-Hours Technical Project"
            },
            details: {
                th: "พัฒนาระบบตรวจสอบลายเซ็นลายมือ โดยใช้ Siamese Neural Network",
                en: "Developed a handwritten signature verification system using a Siamese Neural Network"
            }
        },



    ],
    educations: [
        {
            title: {
                th: "ปริญญาตรี",
                en: "Bachelor's Degree"
            },
            faculty: {
                th: "วิศวกรรมศาสตร์และเทคโนโลยี",
                en: "Engineering and Technology"
            },
            major: {
                th: "เทคโนโลยีดิจิทัลและสารสนเทศ",
                en: "Digital and Information Technology"
            },
            school: {
                th: "สถาบันการจัดการปัญญาภิวัฒน์",
                en: "Panyapiwat Institute of Management",
            },
            isGraduated: true,
            year: 2021,
            gpa: "4.00"
        }
    ],
    skills: [
        {
            title: "Programming Languages",
            details: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "GoLang", "C#", "Bash", "Scala", "SQL", "HTML", "CSS", "Dart"]
        },
        {
            title: "BackEnd",
            details: ["Spring Boot", "Django", "Play", ".Net Core", "Kubernetes", "Docker", "PostgreSQL", "MySQL", "MongoDB", "SQL Server", "DB2"]
        },
        {
            title: "FrontEnd",
            details: ["Angular.ts", "React.js", "Vue.js", "Svelte.ts", "Bootstrap", "Material-UI", "Tailwind CSS", "Flutter"]
        },
        {
            title: "Tools",
            details: ["Git", "Jira", "ClickUp", "TeamCity", "AWS", "ArgoCD", "Firebase", "Google Cloud", "DigitalOcean", "Jenkins", "AS400",]
        },
        {
            title: "Other Skills",
            details: ["Data Engineering", "DevOps", "Robotic Process Automation (RPA)", "Agile Methodologies", "Unit Testing", "CI/CD"]
        }
    ]
}
