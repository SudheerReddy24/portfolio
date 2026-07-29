export interface Skill {
    id: number;
    title: string;
    icon: string;
    skills: SkillItem[];
    color: string;
}

export interface SkillItem {
    name: string;
    icon: string;
    color?: string;
}