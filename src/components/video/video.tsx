import React from "react";
import { clx } from "@/utils/clx";

type VideoProps = {
    src: string;
    className?: string;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

function Video(props: VideoProps) {
    const { children, className, src, ...rest } = props;
    
    return (
        <video
            className={clx("w-full h-full", className)}
            {...rest}
        >
            <source src={src} />
        </video>
    );
}

export default Video;