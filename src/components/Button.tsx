import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const button = cva([""], {
  variants: {
    variant: {
      primary: "text-sm bg-black text-white px-4 py-2 rounded",
      secondary: "text-sm bg-stone-300 text-black px-4 py-2 rounded",
      text: "text-sm text-black px-4 py-2",
      icon: "rounded-full px-2 py-2 bg-stone-100 hover:bg-stone-200",
    },
    size: {
      regular: "w-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "regular",
  },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export default function Button({
  children,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ variant, size })}>
      {children}
    </button>
  )
}
