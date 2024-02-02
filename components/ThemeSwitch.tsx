import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className='flex items-center justify-between space-x-2 md:justify-end'>
      <p className='font-bold text-DarkGrayishBlue dark:text-DesaturatedBlue'>
        Dark Mode
      </p>
      <Switch onClick={toggleTheme} />
    </div>
  )
}
