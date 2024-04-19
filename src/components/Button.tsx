import { ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const button = cva([""], {
  variants: {
    variant: {
      primary: "text-sm py-2 px-4 bg-black text-white rounded",
      text: "text-sm py-2 px-2",
      icon: "py-3 px-3 bg-stone-100 rounded-full hover:bg-stone-200",
    },
    width: {
      fullwidth: "w-full",
      regular: "w-auto",
    },
  },
  defaultVariants: {
    variant: "primary",
    width: "regular",
  },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export default function Button({
  children,
  variant,
  width,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ variant, width })}>
      {children}
    </button>
  )
}
