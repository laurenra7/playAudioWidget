/**
 * This file was generated from PlayAudioWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface PlayAudioWidgetContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    fileId: EditableValue<Big>;
}

export interface PlayAudioWidgetPreviewProps {
    readOnly: boolean;
    fileId: string;
}
