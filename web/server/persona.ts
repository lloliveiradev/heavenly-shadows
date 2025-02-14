export const getPersonas = async (API_URL: string | undefined, id?: string) => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/persona${id ? '?id' : ''}`, { cache: 'force-cache' });
    const data = await response.json();
    return data;
}