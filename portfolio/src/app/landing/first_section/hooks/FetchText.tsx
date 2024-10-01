export const fetchText = async (): Promise<{
  title: string;
  body: string;
} | null> => {
  try {
    const response = await fetch(
      "http://localhost:3000/texts/by-section/seccion-hero"
    );

    if (response.ok) {
      const data = await response.json();
      return { title: data.title, body: data.body };
    } else {
      console.error("Error al obtener el texto:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error general:", error);
    return null;
  }
};

export const uploadFileText = async (
  title: string,
  body: string
): Promise<any> => {
  const payload = {};
  if (title) payload.title = title;
  if (body) payload.body = body;

  try {
    const response = await fetch(
      "http://localhost:3000/texts/66f3b550ff20662d8b6bde5e",
      {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al reemplazar el texto");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en uploadFileText:", error);
    throw error;
  }
};