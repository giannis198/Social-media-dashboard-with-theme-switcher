import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'

interface OverviewCardProps {
  icon: StaticImageData
  title: string
  number: string
  color: string
  sign: StaticImageData
  percentage: string
}

export const OverviewCard = ({
  icon,
  title,
  number,
  color,
  sign,
  percentage
}: OverviewCardProps) => {
  return (
    <>
      <Card className='p-6'>
        <CardHeader className='flex-row items-center justify-between p-0 pb-6'>
          <CardDescription className='text-base font-bold text-DarkGrayishBlue dark:text-DesaturatedBlue'>
            {title}
          </CardDescription>
          <Image src={icon} alt={title} />
        </CardHeader>
        <CardContent className='p-0'>
          <div className='flex w-full justify-between'>
            <p className='text-4xl font-bold tracking-tight text-VeryDarkBlue dark:text-white'>
              {number}
            </p>
            <div
              className={`${color} flex w-full items-center justify-end gap-x-1 text-sm font-bold`}
            >
              <Image src={sign} alt={title} />
              <p>{percentage}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
