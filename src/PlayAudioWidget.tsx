import { Component, ReactNode, Fragment, createElement } from "react";

import { PlayAudioWidgetContainerProps } from "../typings/PlayAudioWidgetProps";
import {PlayAudio} from "./components/PlayAudio";

import "./ui/PlayAudioWidget.css";

export default class PlayAudioWidget extends Component<PlayAudioWidgetContainerProps> {
    render(): ReactNode {
        const fileId = this.props.fileId.displayValue;
        return <PlayAudio
                fileId={fileId}
                tabIndex={this.props.tabIndex}
                />
    }
}
