export type direction = "vertical" | "horizonta";
export type size = "large" | "default" | "small";
export type column = "1" | "2" | "3" | "4";
export type typeEnum = "input" | "select" | "space" | "custom" | "date" | "cascader" | "checkBox" | "radio" | "rate" | "upload" | "switch" | "slider";
export type opstionsItem = {
    label: string;
    value: string;
};
import { MainPackage } from "../../BaseComps/index";
import { ComputedRef, Ref } from "vue";
export type dataItem = {
    label?: string;
    prop?: string;
    type: typeEnum;
    value?: any;
    span?: column | number;
    nospan?: number;
    labelWidth?: string | number;
    required?: boolean;
    placeholder?: string;
    showPlaceholder?: boolean;
    options?: opstionsItem[] | ComputedRef;
    hide?: boolean | Ref<boolean>;
    deepHide?: boolean | Ref<boolean>;
    rules?: any;
    slotName?: string;
    class?: string;
    input?: MainPackage["input"];
    select?: MainPackage["select"];
    date?: MainPackage["date"];
    cascader?: MainPackage["cascader"];
    checkBox?: MainPackage["checkbox"];
    radio?: MainPackage["radio"];
    rate?: MainPackage["rate"];
    upload?: MainPackage["upload"];
    switch?: MainPackage["switch"];
    slider?: MainPackage["slider"];
};
export interface Args {
    request?: ((...arg: any[]) => Promise<any>) | {
        [key: string]: any;
    };
    parseData?: (data: any) => any;
    path?: string;
    title?: string;
    dataList: dataItem[];
    column?: column | number;
    labelPosition?: "left" | "right" | "top";
    size?: size;
    gutter?: number;
    closePlaceholder?: boolean;
    labelWidth?: string;
    statusIcon?: boolean;
    hideRequiredAsterisk?: boolean;
    labelSuffix?: string;
    requireAsteriskPosition?: "left" | "right";
    validateOnRuleChange?: boolean;
    disabled?: boolean;
    scrollToError?: boolean;
    scrollIntoViewOptions?: any;
    buttons?: MainPackage["button"][];
    buttonsAlign?: "left" | "center" | "right";
}
export declare const useForm: (args: Args) => Args;
