"use client"
import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItems() {
    const pathname = usePathname()
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {headerLinks.map((item) => {
            const isActive = pathname === item.route
            return (
            <li key={item.route} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap  ` }>
                <Link href={item.route}>
                    {item.label}
                </Link>
            </li>
        )}
        )}
    </ul>
  )
}
