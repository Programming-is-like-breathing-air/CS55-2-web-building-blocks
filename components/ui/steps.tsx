import React from "react";
import Theme from "../layout/componentTheme";

export function StepsBasic() {
    return (
        <Theme componentName="steps"
               componentStyle="basic"
               backgroundDesktop="white"
               componentReactView="StepsBasic"
        />
    )
}

export function StepsWithContent() {
    return (
        <Theme componentName="steps"
               componentStyle="withContent"
               backgroundDesktop="white"
               componentReactView="StepsWithContent"
        />
    )
}
export function StepsWithDots() {
    return (
        <Theme componentName="steps"
               componentStyle="withDots"
               backgroundDesktop="white"
               componentReactView="StepsWithDots"
        />
    )
}
export function StepsWithIcon() {
    return (
        <Theme componentName="steps"
               componentStyle="withIcon"
               backgroundDesktop="white"
               componentReactView="StepsWithIcon"
        />
    )
}