import { Component, ReactNode, createElement } from "react";
import { PlayAudio } from "./components/PlayAudio";
import { PlayAudioWidgetPreviewProps } from "../typings/PlayAudioWidgetProps";

declare function require(name: string): string;

export class preview extends Component<PlayAudioWidgetPreviewProps> {
    render(): ReactNode {
        const fileId = `[${this.props.fileId}]`;
        return <PlayAudio fileId={fileId}/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PlayAudioWidget.css");
}
