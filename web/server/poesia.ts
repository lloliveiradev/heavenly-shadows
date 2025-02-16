export const getPoesias = async (API_URL: string | undefined, id?: string, options: any = {}) => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/api/poesia/find`, {
        cache: 'no-cache',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options)
    });
    const data = await response.json();
    return data;
}