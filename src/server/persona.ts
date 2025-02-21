
import { Persona } from '../types';
import { Flame, Leaf, Droplet, Wind } from 'lucide-react';
import React from 'react';

export const getPersonas = async (API_URL: string | undefined, id?: string): Promise<Persona> => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/api/persona${id ? `/${id}` : '/find'}`, {
        cache: 'force-cache',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 20 }
    });
    const data = await response.json();
    const icons = {
        Wind: React.createElement(Wind, { size: 40 }),
        Flame: React.createElement(Flame, { size: 40 }),
        Droplet: React.createElement(Droplet, { size: 40 }),
        Leaf: React.createElement(Leaf, { size: 40 }),
    };
    data.icon = icons[data.icon];
    return data;
};