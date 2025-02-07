import { GlobalMap } from '@/components/maps/GlobalMap'
import { ProfileMenu } from '../components/ProfileMenu'

export const dynamic = 'force-dynamic'

export default async function MapPage (): Promise<any> {
  return (
    <div className='w-full h-full'>
      <ProfileMenu />
      <GlobalMap
        showFullscreenControl={false}
      />
    </div>
  )
}
