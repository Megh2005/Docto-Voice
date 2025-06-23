import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex my-[-4rem] items-center h-screen justify-center">
            <SignIn />
        </div>
    )
}