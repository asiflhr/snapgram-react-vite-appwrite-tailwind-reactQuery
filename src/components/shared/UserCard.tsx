import { Models } from 'appwrite'
import { Link } from 'react-router-dom'
import {
  // useFollowUser,
  // useUnfollowUser,
  useGetFollowAndUnfollowUsers,
} from '@/lib/react-query/queries'

import { Button } from '../ui/button'

type UserCardProps = {
  user: Models.Document
}

const UserCard = ({ user }: UserCardProps) => {
  const { data: followersData } = useGetFollowAndUnfollowUsers(user.$id)

  // todo: run a follow user api first...first-letter, and check whether user saved in db or not?

  console.log('followersData: ', followersData)

  return (
    <Link to={`/profile/${user.$id}`} className='user-card'>
      <img
        src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
        alt='creator'
        className='rounded-full w-14 h-14'
      />

      <div className='flex-center flex-col gap-1'>
        <p className='base-medium text-light-1 text-center line-clamp-1'>
          {user.name}
        </p>
        <p className='small-regular text-light-3 text-center line-clamp-1'>
          @{user.username}
        </p>
      </div>

      <Button type='button' size='sm' className='shad-button_primary px-5'>
        Follow
      </Button>
    </Link>
  )
}

export default UserCard
