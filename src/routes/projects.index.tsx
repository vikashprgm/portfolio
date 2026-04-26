import { createFileRoute } from '@tanstack/react-router'
import { ModeToggle } from '#/components/mode-toggle'
import { ProjectCard } from '#/components/ProjectCard'
import { ThemeProvider } from '#/components/ThemeProvider'
import { data } from '#/data/data'
import { Link } from '@tanstack/react-router'
import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})
async function RouteComponent() {

  return (
    <ThemeProvider>
    <div>
      <div className='flex items-center pt-5 p-3 z-50'>

        <div className='flex gap-3 flex-1'>
        <Link to='/'>
          <Button>Go back</Button>
        </Link>
        <ModeToggle />
        </div>

        <div className='text-3xl font-bold font-mono'>
          VIKASH YADAV
        </div>

        <div className='flex-1'/>

      </div>
      <Separator/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center p-5'>
        {
          data.map((e)=><ProjectCard {...e}/>)
        }
        </div>
    </div>
    </ThemeProvider>
  )
}
