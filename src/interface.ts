export type Lang = "th" | "en";

export interface IData {
    fullName: ILanguage,
    email: string,
    phone: string,
    infos: IInfo[],
    about: ILanguage,
    experiences: IExperience[],
    projectAndRewards: IProjectAndReward[],
    educations: IEducation[],
    skills: ISkill[]
}

export interface IInfo {
    icon: string,
    alt: string,
    text: string,
    link: string
}

export interface ILanguage {
    th: string,
    en: string
}

export interface IExperience {
    title: ILanguage,
    company: string,
    link?: string,
    startDate: string,
    endDate?: string,
    details: ILanguage[],
    techStack: string[],
    type: "professional" | "early-career"
}

export interface IProjectAndReward {
    title: ILanguage,
    link?: string,
    subtitle: ILanguage,
    details: ILanguage
}

export interface IEducation {
    title: ILanguage,
    faculty: ILanguage,
    major: ILanguage,
    school: ILanguage,
    year: number,
    isGraduated: boolean,
    gpa: string
}

export interface ISkill {
    title: string,
    details: string[]
}