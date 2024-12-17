"use client"

import { useState, useEffect } from 'react';

interface UseDataProps<T> {
    endpoint: string;
    initialData?: T;
}

export function useData<T>({ endpoint, initialData }: UseDataProps<T>) {
    const [data, setData] = useState<T | undefined>(initialData);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/${endpoint}`, {
                    next: {
                        revalidate: 30
                    },
                    signal
                });

                if (!response.ok) {
                    throw new Error('Error en la petición');
                }

                const result = await response.json();
                setData(result?.data?.data);
                setError(null);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [endpoint]);

    return { data, error, isLoading };
}
