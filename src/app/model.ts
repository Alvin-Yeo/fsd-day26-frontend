export interface Wine {
    id: string;
    title: string;
    price: number;
    country?: string;
    description?: string;
    points?: number;
    province?: string;
    taster?: string;
    variety?: string;
    winery?: string;
}