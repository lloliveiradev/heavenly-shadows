export async function postContato(API_URL: string, values: {
    email: string;
    message: string;
    name: string;
    subject: string;
}) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("POST", `${API_URL}/api/contato`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.responseText));
            } else {
                console.error('@error', request.responseText);
                reject(new Error(`Failed to send message: ${request.responseText}`));
            }
        };
        request.onerror = function () {
            console.error('@error', request.responseText);
            reject(new Error(`Network error`));
        };
        request.send(JSON.stringify(values));
    });
};