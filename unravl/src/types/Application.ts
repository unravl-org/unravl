type Application = {
    name: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
    status?: 'active' | 'inactive' | string;
};

export default Application;