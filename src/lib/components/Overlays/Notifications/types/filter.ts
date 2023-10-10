export interface RecentFilterType {
    and: {
        createdAt: {
            gte: string;
        };
        isInternal?: undefined;
    } | {
        isInternal: {
            is: boolean;
        };
        createdAt?: undefined;
    }[];
}

export interface PendingFilterType {
    and: ({
        isInternal: {
            is: boolean;
        };
        dateToExpire?: undefined;
    } | {
        dateToExpire: {
            gte: string;
        };
        isInternal?: undefined;
    })[];
}

export type WidgetFilters = Array<{
    key: string;
    label: string;
}>;

export interface NotificationType {
    id: string
    title?: string
    prize?: string
    isVisualized?: boolean
    message?: string
    reason?: string
}
