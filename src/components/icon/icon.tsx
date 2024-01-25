import React from "react";
import * as Icons from "@medusajs/icons";

type IconProps = {
    src: string;
};

function Icon(props: IconProps) {
    var {src} = props;
    if (!src) {
        src = "QuestionMarkCircle";
    }
    if (Icons[src] === undefined) {
        src = "QuestionMarkCircle";
    }
    const IconComponent = Icons[src];
    return (
        <IconComponent />
    );
}

export default Icon;