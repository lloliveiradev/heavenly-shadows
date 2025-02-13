export const getPoesias = async (API_URL: string | undefined, id: string) => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/poesia/find`, {
        cache: 'force-cache',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filters: [{ key: 'persona', op: '==', val: id }] })
    });
    const data = await response.json();
    return data;
}