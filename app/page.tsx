import UserCard from '@/components/UserCard'
import facebook from '../public/icon-facebook.svg'
import instagram from '../public/icon-instagram.svg'
import youtube from '../public/icon-youtube.svg'
import twitter from '../public/icon-twitter.svg'
import { OverviewCard } from '@/components/OverviewCard'
import arrowUp from '../public/icon-up.svg'
import arrowDown from '../public/icon-down.svg'
import Footer from '@/components/Footer'

const HomePage = () => {
  const usersData = [
    {
      id: '01',
      cardTopColor: 'clr-facebook',
      logo: facebook,
      name: '@nathanf',
      followers: '1987',
      sign: arrowUp,
      influence: 'followers',
      number: '12',
      color: 'clr-positive'
    },
    {
      id: '02',
      cardTopColor: 'clr-twitter',
      logo: twitter,
      name: '@nathanf',
      followers: '1044',
      influence: 'followers',
      sign: arrowUp,
      number: '99',
      color: 'clr-positive'
    },
    {
      id: '03',
      cardTopColor: 'clr-instagram',
      logo: instagram,
      name: '@nathanf',
      followers: '11k',
      influence: 'followers',
      sign: arrowUp,
      number: '1099',
      color: 'clr-positive'
    },
    {
      id: '04',
      cardTopColor: 'clr-youtube',
      logo: youtube,
      name: 'Nathan F.',
      followers: '8239',
      influence: 'subscribers',
      sign: arrowDown,
      number: '144',
      color: 'clr-negative'
    }
  ]

  const overviewData = [
    {
      icon: facebook,
      title: 'PageViews',
      number: '87',
      color: 'clr-negative',
      sign: arrowDown,
      percentage: '3%'
    },
    {
      icon: facebook,
      title: 'Likes',
      number: '52',
      color: 'clr-positive',
      sign: arrowUp,
      percentage: '2%'
    },
    {
      icon: instagram,
      title: 'Likes',
      number: '5462',
      color: 'clr-positive',
      sign: arrowUp,
      percentage: '2257%'
    },
    {
      icon: instagram,
      title: 'ProfileViews',
      number: '52k',
      color: 'clr-positive',
      sign: arrowUp,
      percentage: '1375%'
    },

    {
      icon: twitter,
      title: 'Likes',
      number: '507',
      color: 'clr-positive',
      sign: arrowUp,
      percentage: '553%'
    },
    {
      icon: twitter,
      title: 'Retweets',
      number: '117',
      color: 'clr-positive',
      sign: arrowUp,
      percentage: '303%'
    },
    {
      icon: youtube,
      title: 'Likes',
      number: '107',
      color: 'clr-negative',
      sign: arrowDown,
      percentage: '19%'
    },
    {
      icon: youtube,
      title: 'Total Views',
      number: '1407',
      color: 'clr-negative',
      sign: arrowDown,
      percentage: '12%'
    }
  ]
  return (
    <section className='absolute left-1/2 top-56 w-full -translate-x-1/2 md:top-28'>
      <div className='container pb-10'>
        <div className='gridAuto w-full items-center gap-x-10 space-y-5 pb-10 md:space-y-0'>
          {usersData.map(user => (
            <UserCard
              influence={user.influence}
              key={user.id}
              cardTopColor={user.cardTopColor}
              logo={user.logo}
              name={user.name}
              followers={user.followers}
              sign={user.sign}
              number={user.number}
              color={user.color}
            />
          ))}
        </div>
        <div>
          <h2 className='pb-5 text-2xl font-bold text-DarkGrayishBlue dark:text-white'>
            Overview - Today
          </h2>
          <div className='gridAuto'>
            {overviewData.map((data, index) => (
              <OverviewCard
                key={index}
                icon={data.icon}
                title={data.title}
                number={data.number}
                color={data.color}
                sign={data.sign}
                percentage={data.percentage}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default HomePage
