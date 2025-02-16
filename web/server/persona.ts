
import { Persona } from '@/types';
import { Flame, Leaf, Droplet, Wind } from 'lucide-react';
import React from 'react';

/**
 * 
 * @param API_URL 
 * @param id 
 * @param options 
 * @returns {Persona[]}
 */
export const getPersonas = async (API_URL: string | undefined, id?: string, options?: any) => {
    if (!API_URL) {
        throw new Error('API_URL environment variable is not set');
    }
    const response = await fetch(`${API_URL}/api/persona${id ? `/${id}` : '/find'}`, {
        cache: 'force-cache',
        method: id ? 'GET' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: id ? undefined : JSON.stringify(options)
    });
    const data = await response.json();
    const icons = {
        Wind: React.createElement(Wind),
        Flame: React.createElement(Flame),
        Droplet: React.createElement(Droplet),
        Leaf: React.createElement(Leaf),
    };
    if (id) {
        data.icon = icons[data.icon];
    } else {
        data.map((persona: Persona) => {
            persona.icon = icons[persona.icon];
        });
    };
    return data;
}