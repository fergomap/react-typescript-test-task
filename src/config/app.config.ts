interface AppConfig {
    ROUTES: {
        DASHBOARD: string;
        LOG_IN: string;
        SETTINGS: string;
    };
    ENDPOINTS: {
        COMMITS: string;
        REPOSITORY: string;
    };
}

export const APP_CONSTANTS: AppConfig = {
    ROUTES: {
        DASHBOARD: '/dashboard',
        LOG_IN: '/log-in',
        SETTINGS: '/settings'
    },
    ENDPOINTS: {
        COMMITS: 'https://api.github.com/repositories/19438/commits',
        REPOSITORY: 'https://api.github.com/repositories/19438'
    }
};
