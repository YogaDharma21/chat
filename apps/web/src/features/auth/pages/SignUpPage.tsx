import React from "react";
import { Link } from "react-router";
import CarouselImage from "../components/CarouselImage";
import { useForm } from "react-hook-form";
import { signUpSchema, type signUpValues } from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<signUpValues>({
        resolver: zodResolver(signUpSchema),
    });

    const avatar = watch("avatar");

    const onSubmit = async (data: signUpValues) => {
        console.log(data);
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
                <div className="flex w-[435px] h-fit shrink-0 flex-col gap-[40px] z-20 relative">
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
                                    Hey🙌🏻, Welcome Aboard!
                                </h1>
                                <p className="font-medium leading-[20px] text-center text-heyhao-secondary">
                                    Create your account to continue!
                                </p>
                            </header>
                            <div>
                                <section
                                    id="Avatar"
                                    className="flex items-center gap-[12px] justify-center"
                                >
                                    <div className="flex items-center justify-center rounded-full overflow-hidden size-[100px] shrink-0">
                                        <img
                                            id="photo-container"
                                            src={
                                                avatar instanceof File
                                                    ? URL.createObjectURL(
                                                          avatar,
                                                      )
                                                    : "/assets/images/photos/default.png"
                                            }
                                            alt="image"
                                            className="object-cover size-full "
                                        />
                                    </div>
                                    <input
                                        {...register("avatar")}
                                        id="file-input"
                                        name="test"
                                        type="file"
                                        className="absolute opacity-0 "
                                        onChange={(e) => {
                                            if (e.target.files) {
                                                setValue(
                                                    "avatar",
                                                    e.target.files[0],
                                                );
                                            }
                                        }}
                                    />
                                    <button
                                        type="button"
                                        id="add-photo"
                                        className="flex items-center gap-[6px] px-[24px] py-[14px] rounded-full bg-heyhao-black"
                                    >
                                        <img
                                            src="/assets/images/icons/edit-2-white-fill.svg"
                                            alt="icon"
                                            className="size-6 shrink-0"
                                        />
                                        <p className="font-bold leading-[20px] text-white">
                                            Change Avatar
                                        </p>
                                    </button>
                                </section>
                                {errors.avatar && (
                                    <p className="text-red-500 text-xs font-medium mt-2 text-center">
                                        {errors.avatar?.message?.toString()}
                                    </p>
                                )}
                            </div>
                            <section
                                id="Inputs"
                                className="flex flex-col gap-[30px]"
                            >
                                <div>
                                    <div
                                        id="Fullname"
                                        className="relative h-[72px] overflow-hidden has-[:invalid]:border-heyhao-coral rounded-[24px] border-[1.5px] border-heyhao-border py-[24px] focus-within:border-heyhao-blue transition-all duration-300"
                                    >
                                        <input
                                            {...register("name")}
                                            id="FullName"
                                            placeholder=""
                                            type="text"
                                            className="peer absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-transparent font-semibold leading-[20px] focus:outline-none pb-[16px] pl-[80px] pt-[36px]"
                                        />
                                        <img
                                            src="/assets/images/icons/user-square-grey.svg"
                                            alt="icon"
                                            className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                        />
                                        <div className="w-[1.5px] h-6 bg-heyhao-border absolute left-[64px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0" />
                                        <label
                                            htmlFor="FullName"
                                            className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-sm leading-[17.5px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                        >
                                            Enter your full name
                                        </label>
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
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
                                            <img
                                                src="/assets/images/icons/sms-grey.svg"
                                                alt="icon"
                                                className="absolute left-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            />
                                            <div className="w-[1.5px] h-6 bg-heyhao-border absolute left-[64px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0" />
                                            <label
                                                htmlFor="Email"
                                                className="absolute left-[80px] text-heyhao-secondary transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-sm leading-[17.5px] font-medium top-4 peer-focus:top-4 -translate-y-0 peer-focus:-translate-y-0 peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                            >
                                                Your email address
                                            </label>
                                        </div>
                                        {/* <img
                                        id="EmailNotUsed"
                                        src="/assets/images/icons/checklist-green-fill.svg"
                                        alt="icon"
                                        className="absolute z-40 right-[24px] top-1/2 size-[24px] shrink-0 -translate-y-1/2"
                                    />
                                    <div
                                        id="EmailUsed"
                                        className="absolute right-[-9px] top-6 flex flex-col items-center gap-[1px] peer-focus:z-30 z-30 peer-placeholder-shown:z-0"
                                    >
                                        <img
                                            src="/assets/images/icons/checklist-red-fill.svg"
                                            alt="icon"
                                            className="size-[24px] shrink-0"
                                        />
                                        <img
                                            src="/assets/images/icons/polygon-red-fill.svg"
                                            alt="icon"
                                            className="w-[15px] h-[18px] shrink-0"
                                        />
                                        <div className="bg-heyhao-coral mt-[-9.5px] relative z-30 px-[12px] py-[6px] rounded-lg text-white font-medium text-[12px] leading-[15px]">
                                            Email Used
                                        </div>
                                    </div> */}
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
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
                                            >
                                                <img
                                                    src="/assets/images/icons/eye-grey.svg"
                                                    alt="Hide password icon"
                                                    className="show-icon size-[24px] shrink-0"
                                                />
                                                <img
                                                    src="/assets/images/icons/eye-slash-black.svg"
                                                    alt="Show password icon"
                                                    className="hide-icon size-[24px] shrink-0 hidden"
                                                />
                                            </button>
                                            <input
                                                {...register("password")}
                                                id="Password-Input"
                                                placeholder=""
                                                type="password"
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
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    {errors?.password && (
                                        <p className="text-red-500 text-xs font-medium">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>
                            </section>
                        </div>
                        <section id="Cta" className="flex flex-col gap-6">
                            <button
                                type="submit"
                                className="bg-heyhao-blue cursor-pointer rounded-full py-4 text-white w-full font-bold leading-[20px]"
                            >
                                Create Account
                            </button>
                            <p className="font-semibold leading-[20px] text-center">
                                Already Have Account?{" "}
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
