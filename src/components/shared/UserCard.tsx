import { Models } from 'appwrite'
import { Link } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'
import {
  useFollowUser,
  // useUnfollowUser,
  useGetFollowAndUnfollowUsers,
} from '@/lib/react-query/queries'

import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { IUser } from '@/types'

type UserCardProps = {
  userObject: Models.Document
}

const UserCard = ({ userObject }: UserCardProps) => {
  const [isFollowed, setIsFollowed] = useState(false)
  const { user: currentUser } = useUserContext()
  const { data: followersData } = useGetFollowAndUnfollowUsers(userObject.$id)
  const { mutate: followUser } = useFollowUser()
  // const { mutate: unFollowUser } = useUnfollowUser()

  // todo: run a follow user api first...first-letter, and check whether user saved in db or not?
  // ! follow user created, now test function

  const followedUserRecord = currentUser?.following?.find(
    (record: IUser) => record.id === userObject.$id
  )

  useEffect(() => {
    setIsFollowed(!!followedUserRecord)
  }, [currentUser])

  // console.log('current User: ', currentUser)
  // console.log('followersData: ', followersData)

  const handleFollowUser = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()

    if (followedUserRecord) {
      setIsFollowed(false)
      // return unFollowUser(followedUserRecord.$id)
      return
    }

    followUser({ userId: currentUser.id, followingId: userObject.$id })
    setIsFollowed(true)
  }

  return (
    <div className='user-card'>
      <img
        src={userObject.imageUrl || '/assets/icons/profile-placeholder.svg'}
        alt='creator'
        className='rounded-full w-14 h-14'
      />

      <div className='flex-center flex-col gap-1'>
        <p className='base-medium text-light-1 text-center line-clamp-1'>
          {userObject.name}
        </p>
        <p className='small-regular text-light-3 text-center line-clamp-1'>
          @{userObject.username}
        </p>
      </div>

      <Button
        onClick={(e) => handleFollowUser(e)}
        type='button'
        size='sm'
        className='shad-button_primary px-5'
      >
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    </div>
  )
}

export default UserCard
