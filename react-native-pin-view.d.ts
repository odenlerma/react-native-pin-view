// Type definitions for react-native-pin-view v3.0.0
// Project: https://github.com/talut/react-native-pin-view
// TypeScript Version: 2.8
declare module "react-native-pin-view" {
    // @ts-ignore
    import React from "react"
    // @ts-ignore
    import { ViewStyle, TextStyle } from "react-native"

    type onButtonPressCallback = (key: string) => void
    type onValueChangeCallback = (value: string) => void

    export interface PinViewProps {
        onButtonPress?: onButtonPressCallback
        onValueChange?: onValueChangeCallback

        pinLength: number,
        inputSize?: number
        activeOpacity?: number
        buttonSize?: number

        style ?: ViewStyle
        inputAreaStyle?: ViewStyle
        inputViewStyle?: ViewStyle
        inputViewEmptyStyle?: ViewStyle
        buttonViewStyle?: ViewStyle
        buttonAreaStyle ?: ViewStyle
        inputViewFilledStyle?: ViewStyle

        inputTextStyle?: TextStyle
        buttonTextStyle?: TextStyle

        disabled?: boolean
        showInputText?: boolean
        accessible?: boolean

        buttonTextByKey ?: object,

        customLeftButtonDisabled?: boolean
        customLeftButton?: React.FunctionComponent<any>
        customLeftAccessibilityLabel?:string,
        customLeftButtonViewStyle?: ViewStyle

        customRightButtonDisabled?: boolean
        customRightButton?: React.FunctionComponent<any>
        customRightAccessibilityLabel?:string,
        customRightButtonViewStyle?: ViewStyle

        placeholder: string,
        placeholderTextStyle: ViewStyle
    }

    const PinView: React.FunctionComponent<PinViewProps>
    export default PinView
}
