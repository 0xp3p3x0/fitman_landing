"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
        .required("Full name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters"),
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address"),
    wallet: Yup.string()
        .required("Wallet address is required")
        .matches(/^0x[a-fA-F0-9]{40}$/, "Please enter a valid EVM wallet address"),
    social: Yup.string()
        .required("Social links are required")
        .min(10, "Please provide valid social media links")
        .max(500, "Social links are too long")
});

const Whitelist = () => {
    const [isConnected, setConnected] = useState(false);
    const { address, isConnected: walletConnected } = useAccount();
    const router = useRouter();

    // Auto-fill wallet address when wallet connects
    useEffect(() => {
        if (walletConnected && address) {
            setConnected(true);
        } else {
            setConnected(false);
        }
    }, [walletConnected, address]);

    return (
        <div
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/hero/bg.webp")', backgroundSize: "cover" }}
        >
            <div className="flex flex-row justify-between items-center p-8 pb-0">
                <div
                    className="flex flex-row items-center gap-2 text-amber-900 hover:opacity-50 
                text-base sm:text-lg cursor-pointer transition-all duration-300 ease-in-out font-['Gagalin-Regular']"
                    onClick={() => { router.push("/") }}
                >
                    <FiArrowLeft />
                    Back to Home
                </div>

                <ConnectButton />
            </div>

            <div className="flex flex-col items-center justify-center py-4">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-6 sm:mb-8 animate-fade-in">
                        <h2
                            className="text-3xl sm:text-4xl font-bold heading-stroke mb-2 sm:mb-4 font-['Gagalin-Regular']"
                        >
                            {" "}
                            Only the hungry get in
                        </h2>
                        <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto font-['Gagalin-Regular']">
                            Step into the FATMAN ecosystem early. Unlock priority access, rewards, and insider updates
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto animate-scale-in">
                        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl heading-stroke font-['Gagalin-Regular']">
                                    Be first with FATMAN
                                </CardTitle>
                                <CardDescription className="text-gray-900 font-['Gagalin-Regular']">
                                    Secure early access to tokens, NFTs, and rewards
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        wallet: "",
                                        social: ""
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                                        try {
                                            const scriptURL = process.env.NEXT_PUBLIC_WHITELIST_URL;
                                            
                                            if (!scriptURL) {
                                                throw new Error("Whitelist URL not configured");
                                            }

                                            const res = await fetch(scriptURL, {
                                                method: "POST",
                                                body: JSON.stringify(values),
                                            });

                                            const data = await res.json();

                                            if (data.result === "success") {
                                                toast({
                                                    title: "✅ Success",
                                                    description: "You’ve joined the whitelist!",
                                                });
                                                resetForm();
                                            } else if (data.result === "duplicate") {
                                                toast({
                                                    title: "⚠️ Duplicate",
                                                    description: data.message,
                                                    variant: "destructive",
                                                });
                                            } else {
                                                toast({
                                                    title: "❌ Error",
                                                    description: data.message || "Something went wrong.",
                                                    variant: "destructive",
                                                });
                                            }
                                        } catch (err) {
                                            console.error(err);
                                            toast({
                                                title: "❌ Error",
                                                description: "Unable to submit form.",
                                                variant: "destructive",
                                            });
                                        } finally {
                                            setSubmitting(false);
                                        }
                                    }}
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

                                            <WalletField
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
                                                className="w-full h-12 bg-amber-300 hover:bg-amber-400 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in font-['Gagalin-Regular']"
                                            >
                                                {isSubmitting ? "Submitting..." : "Join Whitelist"}
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>

                                <div className="flex flex-row items-center justify-center gap-4 mt-6">
                                    <a
                                        href="https://x.com/fatswaps?s=21&t=ILk-W94OMusx0Xy_RWrhOQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="X"
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

// Wallet field component that can auto-fill from connected wallet
const WalletField = ({ icon: Icon, errors, touched, ...props }: any) => {
    const { setFieldValue } = useFormikContext();
    const { address, isConnected: walletConnected } = useAccount();

    // Auto-fill wallet address when wallet connects
    useEffect(() => {
        if (walletConnected && address) {
            setFieldValue("wallet", address);
        }
    }, [walletConnected, address, setFieldValue]);

    return (
        <div className="space-y-2 animate-fade-in">
            <Label
                htmlFor={props.id}
                className="text-sm font-medium text-gray-900 flex items-center font-['Gagalin-Regular']"
            >
                <Icon className="h-4 w-4 mr-2" />
                {props.label}
            </Label>
            <Field
                as={Input}
                {...props}
                className={`h-12 border-amber-300 focus:border-amber-400 focus:ring-amber-400 bg-white ${errors[props.name] && touched[props.name] ? "border-red-500" : ""
                    }`}
            />
            {errors[props.name] && touched[props.name] && (
                <div className="text-red-500 text-sm mt-1 font-['Gagalin-Regular']">{errors[props.name]}</div>
            )}
        </div>
    );
};

// Reusable Form Input with Formik integration
const InputField = ({ icon: Icon, errors, touched, ...props }: any) => (
    <div className="space-y-2 animate-fade-in">
        <Label
            htmlFor={props.id}
            className="text-sm font-medium text-gray-900 flex items-center font-['Gagalin-Regular']"
        >
            <Icon className="h-4 w-4 mr-2" />
            {props.label}
        </Label>
        <Field
            as={Input}
            {...props}
            className={`h-12 border-amber-300 focus:border-amber-400 focus:ring-amber-400 bg-white ${errors[props.name] && touched[props.name] ? "border-red-500" : ""
                }`}
        />
        {errors[props.name] && touched[props.name] && (
            <div className="text-red-500 text-sm mt-1 font-['Gagalin-Regular']">{errors[props.name]}</div>
        )}
    </div>
);

export default Whitelist;
