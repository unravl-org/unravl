// Types
type Index = {
    topic: string;
    description: string;
    icon: string;
    applications: Application[];
    style?: string;
};

type Application = {
    name: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
    status?: 'active' | 'inactive' | string;
};

export type { Index, Application };