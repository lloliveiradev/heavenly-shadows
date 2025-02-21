import { Options } from '../types';

export const getPoesias = async (API_URL: string | undefined, id?: string, options?: Options) => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/api/poesia/find`, {
        cache: 'force-cache',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options || {}),
        next: { revalidate: 20 }
    });
    const data = await response.json();
    return data;
}