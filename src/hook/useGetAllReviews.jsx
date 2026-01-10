"use client"
import { useCallback, useEffect, useState } from 'react'

const useGetAllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchGetAllReviews = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetch("http://localhost:3000/api/reviews");
            const res = await data.json();
            setReviews(res);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
       fetchGetAllReviews()
    }, [fetchGetAllReviews]);
    return { reviews, loading, error, refetch: fetchGetAllReviews };
}

export default useGetAllReviews