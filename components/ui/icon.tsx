import React from 'react'
import Image from 'next/image'

export type IconProps = {
    size?: number
    className?: string
} & ({
    name: string
    src?: string
} | {
    name?: string
    src: string
})

export function SvgIcon({ name, size = 24, src, className = '' }: IconProps) {
    return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <Image
                src={src ? src : `/icons/${name}.svg`}
                alt={`${name} icon`}
                width={size}
                height={size}
                className="w-full h-full"
            />
        </div>
    )
}

