"use client";

import React, { useState } from 'react';
import { Star, User, MessageSquare, Send } from 'lucide-react';
import axios from 'axios';
import useGetAllReviews from '@/hook/useGetAllReviews';

const Reviews = () => {
    const [hoverRating, setHoverRating] = useState(0);
    const { reviews: allReviews, loading,refetch:reviewRefetch } = useGetAllReviews();
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) return;

        const newReview = {
            ...formData,
            date: new Date().toISOString().split('T')[0]
        };
        const res = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/reviews`, newReview)
        if (res.data.res.insertedId) {
            alert("Review added successfully");
            reviewRefetch();
        }
        setFormData({ name: '', rating: 5, message: '' });
    };
    if (loading) {
        return <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50'>Loading...</div>
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Customer Reviews</h1>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Review Form */}
                <div className="lg:col-span-1">
                    <div className="bg-amber-900/20 p-8 rounded-3xl border border-amber-500/30 backdrop-blur-sm sticky top-28">
                        <h2 className="text-2xl font-semibold text-orange-300 mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6" />
                            Write a Review
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-amber-200 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/40 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-200 mb-2">Rating</label>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 ${star <= (hoverRating || formData.rating)
                                                    ? 'fill-orange-400 text-orange-400'
                                                    : 'text-amber-200/30'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-amber-200 mb-2">Your Review</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/40 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                    placeholder="Tell us about your experience..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                            >
                                <Send className="w-5 h-5" />
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {allReviews.map((review) => (
                            <div
                                key={review._id}
                                className="bg-amber-800/10 border border-amber-500/10 p-6 rounded-2xl hover:border-amber-500/30 transition-all hover:-translate-y-1 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                                            <User className="w-5 h-5 text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-orange-100">{review.name}</h3>
                                            <span className="text-xs text-amber-200/50">{review.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating ? 'fill-orange-400 text-orange-400' : 'text-amber-200/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-amber-100/80 leading-relaxed italic">
                                    {review.message}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;