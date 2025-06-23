'use client'

import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => (
    <div className="flex items-center py-6 justify-center">
        <UserProfile path="/user-profile" routing="path" />
    </div>
)

export default UserProfilePage