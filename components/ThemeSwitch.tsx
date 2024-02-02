import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { Label } from './ui/label'

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
      <Label
        htmlFor='switch'
        className='font-bold text-DarkGrayishBlue dark:text-DesaturatedBlue'
      >
        Dark Mode
      </Label>
      <Switch id='switch' onClick={toggleTheme} />
    </div>
  )
}
