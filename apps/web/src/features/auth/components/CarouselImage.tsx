import React from "react";

export default function CarouselImage() {
    return (
        <section
            id="ContainerBackgroundImages"
            className="flex w-full max-w-[685px]"
        >
            <span className="fixed w-[685px] top-0 left-0 right-0 h-[160px] bg-[linear-gradient(0deg,rgba(235,237,242,0)_0%,#EBEDF2_100%)] z-10" />
            <span className="fixed w-[685px] bottom-0 left-0 right-0 h-[160px] bg-[linear-gradient(0deg,#EBEDF2_0%,rgba(235,237,242,0)_100%)] z-10" />
            <section
                id="BackgroundImages"
                className="fixed top-0 h-screen w-full max-w-[685px] overflow-hidden"
            >
                <div className="flex justify-center gap-[10px]">
                    <div className="flex flex-col w-[380px] gap-[10px]">
                        <div className="slider w-[380px]">
                            <div className="slide-top flex flex-col gap-[10px]">
                                <img
                                    src="/assets/images/thumbnails/auth-1.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-2.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-3.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-1.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-2.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-3.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="slider w-[380px]">
                            <div className="slide-top flex flex-col gap-[10px]">
                                <img
                                    src="/assets/images/thumbnails/auth-1.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-2.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-3.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-1.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-2.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-3.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[275px] gap-[10px]">
                        <div className="slider w-[275px]">
                            <div className="slide-bottom flex flex-col gap-[10px]">
                                <img
                                    src="/assets/images/thumbnails/auth-4.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-5.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-6.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-4.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-5.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-6.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="slider w-[275px]">
                            <div className="slide-bottom flex flex-col gap-[10px]">
                                <img
                                    src="/assets/images/thumbnails/auth-4.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-5.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-6.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-4.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-5.png"
                                    alt="image"
                                />
                                <img
                                    src="/assets/images/thumbnails/auth-6.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
