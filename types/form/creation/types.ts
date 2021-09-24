import {booleanType, stringType} from "../../types";

export type StringType = {
    _template: string,
    label: stringType,
    placeholder?: stringType,
    isRequired?: booleanType,
    logic?: any
}