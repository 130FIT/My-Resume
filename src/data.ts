import type { IData } from "./interface";

const email = "ssboatss03@hotmail.com";
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
        th: "ผมเป็นนักศึกษาด้านไอทีที่มีพื้นฐานใน Full-Stack Development และได้พัฒนาโปรเจคที่รองรับ Transaction สูง ด้วยเทคโนโลยี เช่น Spring Boot, Angular.ts, Docker และ PostgreSQL นอกจากนี้ ผมยังมีประสบการณ์ในงานสตาร์ทอัพ พัฒนาทักษะการทำงานเป็นทีม การเป็นผู้นำ และการสื่อสาร ผมกำลังมองหาโอกาสเติบโตในสาย Programmer และมีส่วนร่วมในการพัฒนาเทคโนโลยี",
        en: "I am an IT student with a background in Full-Stack Development, experienced in building high-transaction applications using Spring Boot, Angular.ts, Docker, and PostgreSQL. I have also participated in startup competitions, enhancing teamwork, leadership, and communication skills. I am seeking opportunities to grow as a Programmer and contribute to the tech industry."
    },
    experiences: [
        {
            title: {
                th: "BackEnd Developer (นักศึกษาฝึกงาน)",
                en: "BackEnd Developer (Internship)"
            },
            company: "BRAINERGY Co.,Ltd.",
            link: "https://brainergy.digital/",
            startDate: "2024-06",
            // endDate: "2025-02", //todo uncomment this line when the internship is finished
            details: [
                {
                    th: "พัฒนาระบบ Core สำหรับ e-wallet พร้อมระบบ Backoffice และ OpenAPI เพื่อรองรับการทำงานของแพลตฟอร์ม e-wallet (Angular.ts, Spring Boot Java)",
                    en: "Full-stack development of an e-wallet core system, back-office platform, and external API (OpenAPI) to support the e-wallet platform. (Angular.ts, Spring Boot Java)"
                },
                {
                    th: "พัฒนาระบบสร้างเอกสาร PDF/A3, การเซ็นเอกสาร PDF และการสร้าง XML สำหรับใบกำกับภาษีอิเล็กทรอนิกส์ e-tax [Spring Boot Kotlin]",
                    en: "Developed a PDF/A-3 document generation, PDF signing, and XML generation system for e-tax invoices. [Spring Boot Kotlin]"
                },
                {
                    th: "พัฒนา Frontend สำหรับการจัดการราคาสินค้าและโปรโมชั่น โดยเน้นความง่ายในการใช้งาน [Angular.ts]",
                    en: "Built a frontend web interface for managing pricing and promotions, ensuring usability and efficiency. [Angular.ts]"
                },
                {
                    th: "พัฒนา CLI tools สำหรับการ Unit Testing API [GoLang, .Net Core C#]",
                    en: "Developed CLI tools for API unit testing. [GoLang, .Net Core C#]"
                }
            ],
            techStack: ["Spring Boot", "Angular.ts",".Net Core", "Docker", "PostgreSQL", "Jira"]
        },
        {
            title: {
                th: "BackEnd Developer (นักศึกษาฝึกงาน)",
                en: "BackEnd Developer (Internship)"
            },
            company: "BRAINERGY Co.,Ltd.",
            link: "https://brainergy.digital/",
            startDate: "2022-12",
            endDate: "2023-05",
            details: [
                {
                    th: "พัฒนา API สำหรับระบบ E-Tax Invoice สำหรับการทำ Custom Integration กับระบบของลูกค้า",
                    en: "API Development for E-Tax Invoice System for custom integration with the client's system"
                },
                {
                    th: "พัฒนาระบบบันทึกเวลาทำงานที่รองรับการซิงโครไนซ์ข้อมูลแบบเรียลไทม์ และรายงานอัตโนมัติ เพื่อเพิ่มประสิทธิภาพทีม",
                    en: "Full-Stack Developed a responsive timesheet system with real-time synchronization and automated reporting to improve team productivity."
                }
            ],
            techStack: ["Django", "Angular.ts", "Docker", "PostgreSQL", "TeamCity", "ClickUp", "ArgoCD"]
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
                    th: "พัฒนาและดูแลเว็บไซต์ของบริษัท Est Serend Engineering Co.,Ltd.",
                    en: "Develop and maintain the website of Est Serend Engineering Co.,Ltd."
                },
                {
                    th: "พัฒนาและดูแลระบบในการจัดการ Certificate ของบริษัท",
                    en: "Develop and maintain the Certificate management system of the company"
                }
            ],
            techStack: ["Django", "React.js", "Vue.js", "Docker", "PostgreSQL", "Firebase", "Google Cloud"]
        }
    ],
    prijectAndRewards: [
        {
            title: {
                th: "1st Prize: INNOVATION from Hackathon U League for All 2022",
                en: "1st Prize: INNOVATION from Hackathon U League for All 2022"
            },
            link: "https://www.pim.ac.th/archives/22152",
            subtitle: {
                th: "Project: All Caring (Physical Therapy Platform)",
                en: "Project: All Caring (Physical Therapy Platform)"
            },
            details: {
                th: "ได้รับรางวัลชนะเลิศในหมวดนวัตกรรมจาก Hackathon U League for All 2022 สำหรับโครงการ \"All Caring\" แพลตฟอร์มที่ช่วยให้ญาติสามารถกายภาพบำบัดให้แก่ผู้ป่วยติดเตียงได้อย่างถูกต้องและเหมาะสมกับแต่ละบุคคล",
                en: "Awarded 1st prize in the Innovation category at the Hackathon U League for All 2022 for the project \"All Caring,\" a platform that enables relatives to provide appropriate physical therapy to bedridden patients."
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
        // {
        //     title: {
        //         th: "Selected as a Finalist for the 22nd Thailand Innovation Awards",
        //         en: "Selected as a Finalist for the 22nd Thailand Innovation Awards"
        //     },
        //     link: "https://line.me/R/ti/p/%40902uxpci",
        //     subtitle: {
        //         th: "Project: Bot Pharmacy (Line Chatbot for Pharmacy Management)",
        //         en: "Project: Bot Pharmacy (Line Chatbot for Pharmacy Management)"
        //     },
        //     details: {
        //         th: "ได้รับการคัดเลือกเป็นผู้เข้ารอบสุดท้ายในงาน Thailand Innovation Awards ครั้งที่ 22 สำหรับโปรเจกต์ \"Bot Pharmacy\" ซึ่งเป็น Line Chatbot ที่ช่วยในการจัดการระบบเภสัชกรรม",
        //         en: "Selected as a finalist for the 22nd Thailand Innovation Awards for the project \"Bot Pharmacy,\" a Line Chatbot that helps manage pharmacy systems."
        //     }
        // },
        {
            title: {
                th: "InCIT 2024: The 8th International Conference on Information Technology",
                en: "InCIT 2024: The 8th International Conference on Information Technology"
            },
            link: "https://www.up.ac.th/NewsRead.aspx?itemID=33350",
            subtitle: {
                th: "Award: Certificate of Recognition for Outstanding Quality and Ethics in Information Technology, InCIT 2024",
                en: "Award: Certificate of Recognition for Outstanding Quality and Ethics in Information Technology, InCIT 2024"
            },
            details: {
                th: "ได้รับประกาศเกียรติคุณในงาน InCIT 2024 ซึ่งเป็นการประชุมวิชาการระดับนานาชาติด้านเทคโนโลยีสารสนเทศ โดยยกย่องในฐานะนักศึกษาสาขาเทคโนโลยีสารสนเทศที่มีคุณภาพและจริยธรรมดีเด่น ประจำปี 2567",
                en: "Honored at InCIT 2024, an international conference on information technology, with a certificate recognizing outstanding quality and exemplary ethics as an information technology student in 2024."
            }
        },
    ],
    educations: [
        {
            title: {
                th: "ปริญญาตรี",
                en: "Bachelor’s Degree"
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
            isGraduated: false,
            year: "2021",
            gpa: "4.00"
        }
    ],
    skills: [
        {
            title: "Programming Languages",
            details: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "GoLang", "C#", "Bash"]
        },
        {
            title: "BackEnd",
            details: ["Spring Boot", "Django", ".Net Core", "Kubernetes", "Docker", "PostgreSQL", "MySQL", "MongoDB"]
        },
        {
            title: "FrontEnd",
            details: ["Angular.ts", "React.js", "Vue.js", "Svelte.ts", "Bootstrap", "Material-UI"]
        },
        {
            title: "Tools",
            details: ["Git", "Jira", "ClickUp", "TeamCity", "ArgoCD", "Firebase", "Google Cloud", "DigitalOcean"]
        },
        // {
        //     title: "OS",
        //     details: ["Windows", "Linux"]
        // }
    ]
}