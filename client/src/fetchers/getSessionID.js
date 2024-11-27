const apiUrl = process.env.REACT_APP_API_URL;

export const fetchSessionID = async () => {
    let sessionId = localStorage.getItem("sessionId");

    if (!sessionId) {
        const response = await fetch(`${apiUrl}/create_session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to create session ID");
        }

        const data = await response.json();

        sessionId = data.sessionId; 

        localStorage.setItem("sessionId", sessionId);
    }

    return sessionId;
};
