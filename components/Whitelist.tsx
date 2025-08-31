"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

import { Mail, User, Link, Wallet } from "lucide-react"
import {
    RiTwitterLine,
    RiTelegramLine,
    RiYoutubeLine,
} from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";

// Yup validation schema
const validationSchema = Yup.object({
    name: Yup.string()
        .required('Full name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    wallet: Yup.string()
        .required('Wallet address is required')
        .matches(/^0x[a-fA-F0-9]{40}$/, 'Please enter a valid EVM wallet address'),
    social: Yup.string()
        .required('Social links are required')
        .min(10, 'Please provide valid social media links')
        .max(500, 'Social links are too long')
});

const Whitelist = () => {
    const [isConnected, setConnected] = useState(false);

    const router = useRouter();

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        try {
            // Simulate API call (replace with actual implementation)
            // const response = await fetch(process.env.NEXT_PUBLIC_WHITELIST_URL, {
            //     method: "POST",
            //     body: JSON.stringify(values),
            // });

            // Reset form on success
            resetForm();
            toast({
                title: "Success!",
                description: "You've been added to our Whitelist. We'll be in touch soon!",
                duration: 2000
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
                duration: 2000
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat font-['Gagalin-Regular']"
            style={{ backgroundImage: 'url("/images/hero/bg.webp")', backgroundSize: "cover" }}
        >
            <div
                className="flex flex-row items-center pt-8 px-8 gap-2 text-amber-900 hover:opacity-50 
                text-lg cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => { router.push("/") }}
            >
                <FiArrowLeft />
                Back to Home
            </div>

            <div className="flex flex-col items-center justify-center py-4">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8 animate-fade-in">
                        <h2
                            className="text-4xl font-bold heading-stroke mb-4"
                        >
                            {" "}
                            Only the hungry get in
                        </h2>
                        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                            Step into the FATMAN ecosystem early. Unlock priority access, rewards, and insider updates.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto animate-scale-in">
                        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl heading-stroke">
                                    Early Access Registration
                                </CardTitle>
                                <CardDescription className="text-gray-900">
                                    Secure your spot in the future of digital finance
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        wallet: '',
                                        social: ''
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form className="space-y-6">
                                            <InputField
                                                icon={User}
                                                id="name"
                                                label="Full Name *"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                errors={errors}
                                                touched={touched}
                                            />

                                            <InputField
                                                icon={Mail}
                                                id="email"
                                                label="Email Address *"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                errors={errors}
                                                touched={touched}
                                            />

                                            <InputField
                                                icon={Wallet}
                                                id="wallet"
                                                label="EVM Wallet Address *"
                                                name="wallet"
                                                placeholder="Enter your EVM wallet address"
                                                type="text"
                                                errors={errors}
                                                touched={touched}
                                            />

                                            <InputField
                                                icon={Link}
                                                id="social"
                                                label="Social Links *"
                                                name="social"
                                                type="text"
                                                placeholder="LinkedIn, Twitter, Telegram, etc."
                                                errors={errors}
                                                touched={touched}
                                            />

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-12 bg-amber-300 hover:bg-amber-400 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in"
                                            >
                                                {isSubmitting ? "Submitting..." : "Join Whitelist"}
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>

                                <div className="flex flex-row items-center justify-center gap-4 mt-6">
                                    <a
                                        href="https://x.com/Bluelink2025"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="https://x.com/Fatswaps"
                                    >
                                        <RiTwitterLine className="text-2xl text-amber-300 hover:text-amber-400 transition" />
                                    </a>
                                    <a
                                        href="https://t.me/FAT_Swaps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                    >
                                        <RiTelegramLine className="text-2xl text-amber-300 hover:text-amber-400 transition" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@FatSwaps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <RiYoutubeLine className="text-2xl text-amber-300 hover:text-amber-400 transition" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Form Input with Formik integration
const InputField = ({ icon: Icon, errors, touched, ...props }: any) => (
    <div className="space-y-2 animate-fade-in">
        <Label
            htmlFor={props.id}
            className="text-sm font-medium text-gray-900 flex items-center"
        >
            <Icon className="h-4 w-4 mr-2" />
            {props.label}
        </Label>
        <Field
            as={Input}
            {...props}
            className={`h-12 border-amber-300 focus:border-amber-400 focus:ring-amber-400 bg-white ${errors[props.name] && touched[props.name] ? 'border-red-500' : ''
                }`}
        />
        {errors[props.name] && touched[props.name] && (
            <div className="text-red-500 text-sm mt-1">{errors[props.name]}</div>
        )}
    </div>
);

export default Whitelist;