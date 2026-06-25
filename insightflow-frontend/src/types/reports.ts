export interface OverviewData {
    total_events: number;
    success_rate: number;
    top_region: string;
    average_value: number;
}

export interface RegionData {
    region: string;
    events: number;
    successRate: number;
}

export interface CategoryData {
    category: string;
    events: number;
    avgValue: number;
}

export interface TrendData {
    date: string;
    events: number;
}

export interface ReportsResponse {
    overview: OverviewData;
    regions: RegionData[];
    categories: CategoryData[];
    trends: TrendData[];
}
