import { CSSProperties } from 'react'
export interface ButtonProps {
    /**
    * Button: uses the MUI Button as base component and accepts props for styling and
    * @prop label: string -  this is the text that shows up on the button
    * @prop variant: 'primary' | 'secondary' | 'outline' | 'text' | 'rounded' | 'square' - this determines the base styling for the button
    * @prop size: 'small' | 'medium' | 'large' - this determines the size of the button
    * @prop type?: 'submit' | 'reset' | 'button' - button type
    * @prop onClick?: () => void - adds an onclick event to th button
    * @prop icon?: JSX.Element - adds an icon at the end of the button
    * @prop to?: string - wraps a react-router-dom Link component around the button
    * @prop style?: CSSProperties - adds extra styling to the button, overriding existing styles
    */
    label: string
    variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'rounded' | 'square' | 'socialLogin'
    size: 'small' | 'medium' | 'large' 
    type?: 'submit' | 'reset' | 'button'
    onClick?: () => void
    icon?: JSX.Element
    startIcon?: JSX.Element
    to?: string
    style?: CSSProperties
}