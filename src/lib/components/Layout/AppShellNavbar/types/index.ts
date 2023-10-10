export interface NavLinkOptionsProps {
    icon: any
    label: string
    link: string | number
    links?: NavLinkOptionsProps[]
    onClick?: () => void
}
