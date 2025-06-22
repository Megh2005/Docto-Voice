"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        date: "",
        time: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getTodayDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    date: formData.date,
                    time: formData.time,
                }
            );

            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                date: "",
                time: "",
            });

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <Card className="bg-[#111827] border-[#3b82f6]/30 shadow-xl">
                <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-semibold text-[#e0e7ff]">
                        Contact Us
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                                <p className="text-green-400 text-sm">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <p className="text-red-400 text-sm">
                                    Failed to send message. Please try again or contact us directly.
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm text-[#94a3b8]">
                                    Your Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm text-[#94a3b8]">
                                    Your Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-sm text-[#94a3b8]">
                                Subject
                            </Label>
                            <Input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm text-[#94a3b8]">
                                Your Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6] resize-none"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="date" className="text-sm text-[#94a3b8]">
                                    Preferred Callback Date
                                </Label>
                                <Input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={getTodayDate()}
                                    className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="time" className="text-sm text-[#94a3b8]">
                                    Preferred Time (10 AM - 4 PM)
                                </Label>
                                <Input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    min="10:00"
                                    max="16:00"
                                    className="bg-[#1f2937] text-[#e0e7ff] border-[#3b82f6]/20 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#fff] text-black font-bold font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}