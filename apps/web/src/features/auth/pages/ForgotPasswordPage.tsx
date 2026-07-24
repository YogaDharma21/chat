import React from "react";
import { Link } from "react-router";
import CarouselImage from "../components/CarouselImage";
import {
    forgotPasswordSchema,
    type forgotPasswordValues,
} from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<forgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const { mutateAsync, isPending, isError, error } = useForgotPassword();

    const onSubmit = async (data: forgotPasswordValues) => {
        try {
            await mutateAsync(data);
            alert("Password reset link sent to your email");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex min-h-screen bg-[#EBEDF2]">
            <CarouselImage />
            <main
                id="ContainerInputs"
                className="flex items-center justify-end flex-1 pr-[calc(((100%-1280px)/2)+75px)] py-[60px]"
            >
                <section
                    id="BackgroundInputs"
                    className="fixed bg-white rounded-l-[24px] top-0 right-0 bottom-0 left-[685px]"
                />
                <div className="flex w-[435px] h-fit shrink-0 flex-col gap-[40px] relative z-20">
                    <section id="CompanyLogo">
                        <img
                            src="/assets/images/logos/heyhao.svg"
                            alt="icon"
                            className="w-[178px] h-[38px] shrink-0 mx-auto"
                        />
                    </section>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-[40px]"
                    >
                        <div className="flex flex-col gap-[30px]">
                            <header className="flex flex-col gap-3">
                                <h1 className="font-semibold text-[24px] leading-[30px] text-center">
                                    Forgot Password? We Got You!
                                </h1>
                                <p className="font-medium leading-[20px] text-center text-heyhao-secondary">
                                    Drop your email Adress to get the reset
                                    link.
                                </p>
                            </header>
                            <section
                                id="Inputs"
                                className="flex flex-col gap-[30px]"
                            >
                                <div>
                                    <div id="Email" className="relative">
                                        <div className="relative h-[72px] has-[:invalid]:border-heyhao-coral overflow-hidden rounded-[24px] border-[1.5px] border-heyhao-border py-[24px] focus-within:border-heyhao-blue transition-all duration-300">
                                            <input
                                                {...register("email")}
                                                id="Email"
                                                placeholder=""
                                                type="email"
                                                className="peer absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-transparent font-semibold leading-[20px] focus:outline-none pb-[16px] pl-[80px] pt-[36px] z-10"
                                            />
                                            <div className="w-[1.5px] h-6 bg-heyhao-border absolute left-[64px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0" />
                                            <img
                                                src="/assets/images/icons/sms-grey.svg"
                                                alt="icon"
                                                className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            />
                                            <label
                                                htmlFor="Email"
                                                className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 leading-[20px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </section>
                        </div>
                        <section id="Cta" className="flex flex-col gap-6">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-heyhao-blue rounded-full py-4 text-white w-full font-bold leading-[20px]"
                            >
                                {isPending ? "Loading..." : "Send Reset Link"}
                            </button>
                            <p className="font-semibold leading-[20px] text-center">
                                Remember Your Password?{" "}
                                <Link
                                    to="/sign-in"
                                    className="text-heyhao-blue hover:underline"
                                >
                                    Login Now
                                </Link>
                            </p>
                        </section>
                    </form>
                </div>
            </main>
        </div>
    );
}
