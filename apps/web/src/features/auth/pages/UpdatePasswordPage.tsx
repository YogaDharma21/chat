import React, { useState } from "react";
import CarouselImage from "../components/CarouselImage";
import { useForm } from "react-hook-form";
import {
    updatePasswordSchema,
    type updatePasswordValues,
} from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import { useNavigate, useParams } from "react-router";
import { AxiosError } from "axios";

export default function UpdatePasswordPage() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<updatePasswordValues>({
        resolver: zodResolver(updatePasswordSchema),
    });

    const { mutateAsync, isPending, isError, error } = useUpdatePassword(
        token ?? "",
    );

    const onSubmit = async (data: updatePasswordValues) => {
        try {
            await mutateAsync(data);
            navigate("/sign-in");
        } catch (error) {
            if (error instanceof AxiosError) {
                return alert(
                    error?.response?.data?.message ?? "An error occured",
                );
            }

            const err = error as Error;

            alert(err?.message ?? "An error occured");
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
                                    Set Your New Password Now!
                                </h1>
                                <p className="font-medium leading-[20px] text-center text-heyhao-secondary">
                                    Keep your account safe with a fresh
                                    password.
                                </p>
                            </header>
                            <section
                                id="Inputs"
                                className="flex flex-col gap-[30px]"
                            >
                                {/* <div id="Email" className="relative">
                                    <div className="relative h-[72px] overflow-hidden rounded-[24px] bg-heyhao-border py-[24px]">
                                        <img
                                            src="/assets/images/icons/sms-grey.svg"
                                            alt="icon"
                                            className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2"
                                        />
                                        <div className="w-px h-6 bg-[#DBDBDB] absolute left-[64px]" />
                                        <input
                                            readOnly=""
                                            id="Email"
                                            placeholder=""
                                            type="email"
                                            defaultValue="Bimore@shaynakit.com"
                                            className="peer absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-transparent font-semibold leading-[20px] focus:outline-none pb-[16px] pl-[80px] pt-[36px] z-10"
                                        />
                                        <label
                                            htmlFor="Email"
                                            className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-sm leading-[17.5px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                </div> */}
                                <div>
                                    <div
                                        id="Password-Container"
                                        className="flex flex-col gap-[12px]"
                                    >
                                        <div className="relative h-[72px] has-[:invalid]:border-heyhao-coral overflow-hidden rounded-[24px] border-[1.5px] border-heyhao-border py-[24px] focus-within:border-heyhao-blue transition-all duration-300">
                                            <button
                                                type="button"
                                                data-target="Password-Input"
                                                className="show-password absolute right-[24px] transform -translate-y-1/2 top-1/2 z-30"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                <img
                                                    src="/assets/images/icons/eye-grey.svg"
                                                    alt="Hide password icon"
                                                    className={`show-icon size-[24px] shrink-0 ${showPassword ? "hidden" : ""}`}
                                                />
                                                <img
                                                    src="/assets/images/icons/eye-slash-black.svg"
                                                    alt="Show password icon"
                                                    className={`hide-icon size-[24px] shrink-0 ${showPassword ? "" : "hidden"}`}
                                                />
                                            </button>
                                            <input
                                                {...register("password")}
                                                id="Password-Input"
                                                placeholder=""
                                                type={showPassword ? "text" : "password"}
                                                className="peer absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-transparent font-semibold leading-[20px] tracking-[0.2em] focus:outline-none pb-[16px] px-[80px] pt-[36px] z-10"
                                            />
                                            <div className="w-[1.5px] h-6 bg-heyhao-border absolute left-[64px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0" />
                                            <img
                                                src="/assets/images/icons/lock-grey.svg"
                                                alt="Lock icon"
                                                className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            />
                                            <label
                                                htmlFor="Password-Input"
                                                className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-sm leading-[17.5px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            >
                                                New Password
                                            </label>
                                        </div>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div
                                        id="New-Password-Container"
                                        className="flex flex-col gap-[12px]"
                                    >
                                        <div className="relative h-[72px] has-[:invalid]:border-heyhao-coral overflow-hidden rounded-[24px] border-[1.5px] border-heyhao-border py-[24px] focus-within:border-heyhao-blue transition-all duration-300">
                                            <button
                                                type="button"
                                                data-target="New-Password-Input"
                                                className="show-password absolute right-[24px] transform -translate-y-1/2 top-1/2 z-30"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            >
                                                <img
                                                    src="/assets/images/icons/eye-grey.svg"
                                                    alt="Hide password icon"
                                                    className={`show-icon size-[24px] shrink-0 ${showConfirmPassword ? "hidden" : ""}`}
                                                />
                                                <img
                                                    src="/assets/images/icons/eye-slash-black.svg"
                                                    alt="Show password icon"
                                                    className={`hide-icon size-[24px] shrink-0 ${showConfirmPassword ? "" : "hidden"}`}
                                                />
                                            </button>
                                            <input
                                                {...register("confirmPassword")}
                                                id="New-Password-Input"
                                                placeholder=""
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="peer absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-transparent font-semibold leading-[20px] tracking-[0.2em] focus:outline-none pb-[16px] px-[80px] pt-[36px] z-10"
                                            />
                                            <div className="w-[1.5px] h-6 bg-heyhao-border absolute left-[64px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0" />
                                            <img
                                                src="/assets/images/icons/lock-grey.svg"
                                                alt="Lock icon"
                                                className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            />
                                            <label
                                                htmlFor="New-Password-Input"
                                                className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-sm leading-[17.5px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            >
                                                Confirm New Password
                                            </label>
                                        </div>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.confirmPassword.message}
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
                                {isPending
                                    ? "Loading..."
                                    : "Update My Password"}
                            </button>
                        </section>
                    </form>
                </div>
            </main>
        </div>
    );
}
