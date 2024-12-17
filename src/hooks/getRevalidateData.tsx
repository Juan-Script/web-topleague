export const getRevalidatedData = async <T,>(endpoint: string): Promise<{
    data: T | undefined;
    error: Error | null;
}> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/public/${endpoint}`,
            {
                next: {
                    revalidate: 30,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Error en la petición');
        }

        const result = await response.json();
        return {
            data: result?.data?.data,
            error: null
        };
    }
    catch (error) {
        return {
            data: undefined,
            error: error instanceof Error ? error : new Error('Error desconocido')
        };
    }
};