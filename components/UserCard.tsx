import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
import { time } from 'console'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface UserCardProps {
  cardTopColor: string
  logo: StaticImageData
  name: string
  followers: string
  influence: string
  sign: StaticImageData
  number: string
  color: string
}

const UserCard = ({
  cardTopColor,
  logo,
  name,
  followers,
  influence,
  sign,
  number,
  color
}: UserCardProps) => {
  return (
    <>
      <Card className={`border-t-4 ${cardTopColor}`}>
        <CardHeader className='flex-row items-center justify-center gap-x-2'>
          <Image src={logo} alt={name} />
          <CardDescription className='text-DarkGrayishBlue dark:text-DesaturatedBlue'>
            {name}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-1 text-center'>
          <p className='text-6xl font-bold tracking-tight text-VeryDarkBlue dark:text-white'>
            {followers}
          </p>
          <p className='pl-2 uppercase tracking-[.3rem] text-DarkGrayishBlue dark:text-DesaturatedBlue'>
            {influence}
          </p>
        </CardContent>
        <CardFooter>
          <div
            className={`${color} flex w-full items-center justify-center gap-x-1 text-sm font-bold`}
          >
            <Image src={sign} alt={name} />
            <p>{number} Today</p>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default UserCard
