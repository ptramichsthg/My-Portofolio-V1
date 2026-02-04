import { useState, useEffect } from "react";
import supabase from "../utils/supabase.js";
import Swal from "sweetalert2";
import AnimatedButton from "./AnimatedButton.jsx";

const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
                {/* Close Button - Larger and More Visible */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-10 group"
                >
                    <i className="bx bx-x text-white text-3xl group-hover:rotate-90 transition-transform duration-300" />
                </button>
                {children}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
        position: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch testimonials dari Supabase saat komponen mount
    useEffect(() => {
        // fetchTestimonials(); // Disabled as per user request to clear data
        setTestimonials([]); // Start empty
        setIsLoading(false);
    }, []);

    const fetchTestimonials = async () => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching testimonials:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load testimonials. Please refresh the page.',
                    confirmButtonColor: '#3B82F6',
                    background: '#1f2937',
                    color: '#fff'
                });
            } else {
                setTestimonials(data || []);
            }
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.content.trim()) {
            newErrors.content = 'Testimonial is required';
        } else if (formData.content.trim().length < 10) {
            newErrors.content = 'Testimonial must be at least 10 characters';
        }

        if (!formData.position.trim()) {
            newErrors.position = 'Position is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Insert testimonial ke Supabase
            const { data, error } = await supabase
                .from('testimonials')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        content: formData.content,
                        position: formData.position,
                        rating: 5,
                        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=3b82f6&color=fff&size=100`
                    }
                ])
                .select();

            if (error) {
                console.error('Error submitting testimonial:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to submit testimonial. Please try again.',
                    confirmButtonColor: '#3B82F6',
                    background: '#1f2937',
                    color: '#fff'
                });
            } else {
                // Refresh testimonials
                await fetchTestimonials();

                // Reset form
                setFormData({ name: '', email: '', content: '', position: '' });
                setIsModalOpen(false);

                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Testimonial submitted successfully!',
                    confirmButtonColor: '#3B82F6',
                    background: '#1f2937',
                    color: '#fff'
                });
            }
        } catch (err) {
            console.error('Error:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                confirmButtonColor: '#3B82F6',
                background: '#1f2937',
                color: '#fff'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Render stars
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <i
                key={index}
                className={`bx bxs-star text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-500'}`}
            />
        ));
    };

    return (
        <section
            id="testimonials"
            className="relative pt-20 min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            {/* Background Effects */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto pb-20">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-5xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        What People Say
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Voices from clients, collaborators, and friends who have experienced my work.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mb-10 shadow-2xl max-w-4xl mx-auto"
                    data-aos="fade-up"
                >
                    {/* Card Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-yellow-600/20 rounded-2xl blur-xl opacity-50"></div>

                    <div className="relative">
                        {/* Card Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 border-b border-white/10">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <i className="bx bx-comment-detail text-3xl bg-gradient-to-br from-green-500 to-yellow-500 bg-clip-text text-transparent" />
                                Testimonials
                            </h3>

                            <AnimatedButton
                                onClick={() => setIsModalOpen(true)}
                                variant="glow"
                                icon="bx bx-plus"
                                className="px-6 py-3"
                            >
                                Add Testimonial
                            </AnimatedButton>
                        </div>

                        {/* Card Body (Scrollable) */}
                        <div className="max-h-[500px] overflow-y-auto p-6 custom-scrollbar">
                            {isLoading ? (
                                <div className="text-center py-12">
                                    <i className="bx bx-loader-alt bx-spin text-6xl text-white/30 mb-4" />
                                    <p className="text-lg font-semibold text-white mb-2">
                                        Loading Testimonials...
                                    </p>
                                </div>
                            ) : testimonials.length > 0 ? (
                                <div className="space-y-5">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={testimonial.id}
                                            className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 to-yellow-500/0 group-hover:from-green-500/5 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>

                                            {/* Quote Icon */}
                                            <div className="mb-3">
                                                <i className="bx bxs-quote-alt-left text-3xl text-green-500/50" />
                                            </div>

                                            {/* Content */}
                                            <p className="text-gray-200 mb-4 leading-relaxed text-base">
                                                {testimonial.content}
                                            </p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={`Avatar of ${testimonial.name}`}
                                                    className="w-12 h-12 rounded-full shadow-lg object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff&size=48`;
                                                    }}
                                                />
                                                <div>
                                                    <h4 className="font-bold text-white text-base">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-400">
                                                        {testimonial.position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <i className="bx bx-message-dots text-6xl text-white/30 mb-4 animate-pulse" />
                                    <p className="text-lg font-semibold text-white mb-2">
                                        No Testimonials Yet
                                    </p>
                                    <p className="text-sm text-gray-300 max-w-sm mx-auto">
                                        Be the first to share your experience and inspire others with your story!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Modal */}
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-6 sm:p-7">
                    {/* Header */}
                    <div className="text-center mb-7">
                        <div className="relative inline-block mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto shadow-2xl transform rotate-3">
                                <i className="bx bx-message-dots text-2xl text-white transform -rotate-3" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                            Share Your Testimonial
                        </h3>
                        <p className="text-sm text-gray-300">
                            Tell us about your experience working with us
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">
                                Full Name
                            </label>
                            <div className="relative group">
                                <i className="bx bx-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-green-400 transition-colors duration-300" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.name
                                        ? 'border-red-500 focus:ring-red-500/30'
                                        : 'border-white/20 focus:border-green-500 focus:ring-green-500/30'
                                        } bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-base focus:outline-none focus:ring-4 transition-all duration-300 hover:bg-white/15`}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-400 text-xs mt-2.5 flex items-center gap-1.5 font-medium">
                                    <i className="bx bx-error-circle text-sm" />
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2.5">
                                Email Address
                            </label>
                            <div className="relative group">
                                <i className="bx bx-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-green-400 transition-colors duration-300" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.email
                                        ? 'border-red-500 focus:ring-red-500/30'
                                        : 'border-white/20 focus:border-green-500 focus:ring-green-500/30'
                                        } bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-base focus:outline-none focus:ring-4 transition-all duration-300 hover:bg-white/15`}
                                    placeholder="name@email.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-2.5 flex items-center gap-1.5 font-medium">
                                    <i className="bx bx-error-circle text-sm" />
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Position Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2.5">
                                Position / Role
                            </label>
                            <div className="relative group">
                                <i className="bx bx-briefcase absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-green-400 transition-colors duration-300" />
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.position
                                        ? 'border-red-500 focus:ring-red-500/30'
                                        : 'border-white/20 focus:border-green-500 focus:ring-green-500/30'
                                        } bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-base focus:outline-none focus:ring-4 transition-all duration-300 hover:bg-white/15`}
                                    placeholder="CEO, Developer, Designer, etc."
                                />
                            </div>
                            {errors.position && (
                                <p className="text-red-400 text-xs mt-2.5 flex items-center gap-1.5 font-medium">
                                    <i className="bx bx-error-circle text-sm" />
                                    {errors.position}
                                </p>
                            )}
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2.5">
                                Your Testimonial
                            </label>
                            <div className="relative group">
                                <i className="bx bx-message-detail absolute left-4 top-5 text-gray-400 text-xl group-focus-within:text-green-400 transition-colors duration-300" />
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.content
                                        ? 'border-red-500 focus:ring-red-500/30'
                                        : 'border-white/20 focus:border-green-500 focus:ring-green-500/30'
                                        } bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-base focus:outline-none focus:ring-4 transition-all duration-300 resize-none hover:bg-white/15 leading-relaxed`}
                                    placeholder="Share your experience working with me..."
                                />
                            </div>
                            {errors.content && (
                                <p className="text-red-400 text-xs mt-2.5 flex items-center gap-1.5 font-medium">
                                    <i className="bx bx-error-circle text-sm" />
                                    {errors.content}
                                </p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-4">
                            <AnimatedButton
                                onClick={() => setIsModalOpen(false)}
                                variant="secondary"
                                className="flex-1 px-5 py-3 text-sm font-semibold"
                            >
                                Cancel
                            </AnimatedButton>
                            <AnimatedButton
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                variant="glow"
                                icon={isSubmitting ? "bx bx-loader-alt bx-spin" : "bx bx-send"}
                                className="flex-1 px-5 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-400 hover:to-yellow-400 shadow-xl hover:shadow-2xl transform hover:scale-105"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </CustomModal>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;