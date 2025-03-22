// frontend/src/services/api.ts
const API_URL = 'http://localhost:5000/api';

// Client services
export const clientService = {
    // Get all clients
    getClients: async () => {
        const response = await fetch(`${API_URL}/clients`);
        if (!response.ok) throw new Error('Failed to fetch clients');
        return response.json();
    },

    // Get a single client
    getClient: async (id: string) => {
        const response = await fetch(`${API_URL}/clients/${id}`);
        if (!response.ok) throw new Error('Failed to fetch client');
        return response.json();
    },

    // Create a new client
    createClient: async (clientData: any) => {
        const response = await fetch(`${API_URL}/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientData),
        });
        if (!response.ok) throw new Error('Failed to create client');
        return response.json();
    },

    // Update a client
    updateClient: async (id: string, clientData: any) => {
        const response = await fetch(`${API_URL}/clients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientData),
        });
        if (!response.ok) throw new Error('Failed to update client');
        return response.json();
    },

    // Delete a client
    deleteClient: async (id: string) => {
        const response = await fetch(`${API_URL}/clients/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete client');
        return response.json();
    },
};

// Property services
export const propertyService = {
    // Similar methods for properties
    getProperties: async () => {
        const response = await fetch(`${API_URL}/properties`);
        if (!response.ok) throw new Error('Failed to fetch properties');
        return response.json();
    },

    // Get client properties
    getClientProperties: async (clientId: string) => {
        const response = await fetch(`${API_URL}/properties/client/${clientId}`);
        if (!response.ok) throw new Error('Failed to fetch client properties');
        return response.json();
    },

    // Create properties
    createProperty: async (propertyData: any) => {
        const response = await fetch(`${API_URL}/properties`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(propertyData),
        });
        if (!response.ok) throw new Error('Failed to create property');
        return response.json();
    },

    updateProperty: async (id: string, propertyData: any) => {
        const response = await fetch(`${API_URL}/properties/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(propertyData),
        });
        if (!response.ok) throw new Error('Failed to update property');
        return response.json();
    },

    getProperty: async (id: string) => {
        const response = await fetch(`${API_URL}/properties/${id}`);
        if (!response.ok) throw new Error('Failed to fetch property');
        return response.json();
    },

    deleteProperty: async (id: string) => {
        const response = await fetch(`${API_URL}/properties/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete property');
        return response.json();
    },
};

// Reminder services
export const reminderService = {
    // Get all reminders
    getReminders: async () => {
        const response = await fetch(`${API_URL}/reminders`);
        if (!response.ok) throw new Error('Failed to fetch reminders');
        return response.json();
    },

    // Get upcoming reminders
    getUpcomingReminders: async () => {
        const response = await fetch(`${API_URL}/reminders/upcoming`);
        if (!response.ok) throw new Error('Failed to fetch upcoming reminders');
        return response.json();
    },

    // Get client reminders
    getClientReminders: async (clientId: string) => {
        const response = await fetch(`${API_URL}/reminders/client/${clientId}`);
        if (!response.ok) throw new Error('Failed to fetch client reminders');
        return response.json();
    },

    createReminder: async (reminderData: any) => {
        const response = await fetch(`${API_URL}/reminders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reminderData),
        });
        if (!response.ok) throw new Error('Failed to create reminder');
        return response.json();
    },

    updateReminder: async (id: string, reminderData: any) => {
        const response = await fetch(`${API_URL}/reminders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reminderData),
        });
        if (!response.ok) throw new Error('Failed to update reminder');
        return response.json();
    },

    getReminder: async (id: string) => {
        const response = await fetch(`${API_URL}/reminders/${id}`);
        if (!response.ok) throw new Error('Failed to fetch reminder');
        return response.json();
    },

    deleteReminder: async (id: string) => {
        const response = await fetch(`${API_URL}/reminders/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete reminder');
        return response.json();
    },

    // Additional reminder methods...
};